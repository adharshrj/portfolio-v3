// GlobalContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { firestore } from "../config/fbConfig";
import MainLoader from "../helpers/MainLoader";

const GlobalContext = createContext({
  globalData: null,
});
export const useStore = () => {
  return useContext(GlobalContext);
};

const GlobalProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState({});
  const [loaded, setLoaded] = useState(false);

  const collection = process.env.NEXT_PUBLIC_COLLECTION;
  const docId = process.env.NEXT_PUBLIC_DOCID;
  useEffect(() => {
    setLoaded(false);
    const docRef = doc(firestore, collection, docId);

    // Listen for changes to the Firestore document
    const unsubscribe = onSnapshot(docRef, async (snap) => {
      if (snap.exists()) {
        let store = snap.data();
        setGlobalData(store);
        setLoaded(true);
      } else {
        // Handle the case when the document doesn't exist
        console.log("Document does not exist.");
      }
    });
    // To stop listening for changes when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <GlobalContext.Provider value={{ globalData }}>
      {!loaded && <MainLoader />}
      {loaded && children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
