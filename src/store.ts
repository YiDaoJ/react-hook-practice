import { create } from "zustand";

interface FruitState {
  name: "apple";
  quantity: number;
  increase: (by: number) => void;
}

export const useFruitStore = create<FruitState>()((set) => ({
  name: "apple",
  quantity: 0,
  increase: (by) => set((state) => ({ quantity: state.quantity + by })),
}));
