import { doc, getDoc, setDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firestore, auth } from "../config/fbConfig";

const collection = process.env.NEXT_PUBLIC_COLLECTION;
const docId = process.env.NEXT_PUBLIC_DOCID;
export default async function handler(req, res) {
  try {
    // Get data from the request body
    console.log({ collection }, { docId });
    console.log("Request Body:", req.body);
    const { data, type } = req.body;

    // Reference to the document to update
    const docRef = doc(firestore, collection, docId);

    signInWithEmailAndPassword(auth, process.env.EMAIL, process.env.PASS)
      .then(async () => {
        // Update the document
        await getDoc(docRef).then(async (snap) => {
          if (snap.exists()) {
            let skillStore = snap.data();
            const skillIdx = skillStore[type].findIndex(
              (skill) => skill.title === data.title
            );
            if (skillIdx !== -1) {
              skillStore[type][skillIdx] = data;
            } else {
              skillStore[type].push(data);
            }

            skillStore = JSON.parse(JSON.stringify(skillStore));

            if (Object.keys(skillStore).length > 0) {
              await setDoc(docRef, skillStore, {
                merge: true,
              });
            }
          }
        });

        res
          .status(200)
          .json({ success: true, message: "Document updated successfully" });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log({ error });
        res
          .status(500)
          .json({ success: false, error: { errorCode, errorMessage } });
      });
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
