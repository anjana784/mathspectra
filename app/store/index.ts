import { create } from "zustand";

interface Store {
  systemType: "R2" | "R3";
  setSystemType: (systemType: "R2" | "R3") => void;
}

const useStore = create<Store>((set) => ({
  systemType: "R3",
  setSystemType: (systemType) => set({ systemType }),
}));

export default useStore;
