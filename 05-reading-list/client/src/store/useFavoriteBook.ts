import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  favoriteBook: string[];
  isOpenDrawer: boolean;
};

type Actions = {
  addBookToFavorite: (id: string) => void;
  removeBookFavorite: (id: string) => void;
  toggleDrawer: () => void;
  drawerStateInitial: (newStateInitial: boolean) => void;
};

export const useFavoriteStore = create(
  persist<State & Actions>(
    (set) => ({
      favoriteBook: [],
      isOpenDrawer: false,

      addBookToFavorite: (id: string) =>
        set((state) => ({ favoriteBook: [...state.favoriteBook, id] })),

      removeBookFavorite: (id: string) =>
        set((state) => ({
          favoriteBook: state.favoriteBook.filter((book) => book !== id),
        })),

      toggleDrawer: () =>
        set((state) => ({ isOpenDrawer: !state.isOpenDrawer })),

      drawerStateInitial: (newStateInitial) =>
        set({ isOpenDrawer: newStateInitial }),
    }),
    { name: "books-favorite" }
  )
);
