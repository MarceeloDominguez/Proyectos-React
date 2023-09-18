import { create } from "zustand";

type State = {
  isAnimation: boolean;
};

type Actions = {
  toggleDrawerAnimation: () => void;
};

const useDrawerAnimation = create<State & Actions>((set) => ({
  isAnimation: false,

  toggleDrawerAnimation: () =>
    set((state) => ({ isAnimation: !state.isAnimation })),
}));

export default useDrawerAnimation;
