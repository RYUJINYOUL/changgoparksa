import { create } from "zustand";

const useUIState = create((set) => ({
  homeCategory2: "시설안내",
  headerImageSrc2:
    "/dastory/pro",
  setHomeCategory2: (value) => set({ homeCategory2: value }),
  setHeaderImageSrc2: (src) => set({ headerImageSrc2: src }),
}));

export default useUIState;
