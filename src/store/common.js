import { create } from "zustand";

const useCommon = create((set) => ({
  common: { navBarHeight: 56 },
  setNavBarHeight: (height) =>
    set((state) => ({
      common: { ...state.common, navBarHeight: height },
    })),
}));

export default useCommon;
