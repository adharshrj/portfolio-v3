import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  loading : true
});

export const setLoading = () => {
  setGlobalState("loading", false);
};

export { useGlobalState };
