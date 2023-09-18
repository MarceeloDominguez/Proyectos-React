import "animate.css";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useFavoriteStore } from "../store/useFavoriteBook";
import { api } from "../api/api";
import EmptyList from "./EmptyList";
import useDrawerAnimation from "../store/useDrawerAnimation";

export default function DrawerFavorite() {
  const {
    isOpenDrawer,
    toggleDrawer,
    favoriteBook,
    removeBookFavorite,
    drawerStateInitial,
  } = useFavoriteStore();
  const { isAnimation, toggleDrawerAnimation } = useDrawerAnimation();

  useEffect(() => {
    drawerStateInitial(false);
  }, []);

  const { data: books } = useQuery({
    queryKey: ["books"],
    queryFn: () => api(),
  });

  if (!isOpenDrawer) return null;

  const handleToggleDrawer = () => {
    setTimeout(() => {
      toggleDrawer();
    }, 300),
      toggleDrawerAnimation();
  };

  const bookFavorite = books?.filter((book) =>
    favoriteBook.includes(book.book.ISBN)
  );

  return (
    <div
      className={`fixed right-0 bottom-0 left-0 top-0 w-full z-50 bg-slate-300/40 backdrop-filter ${
        isAnimation ? "backdrop-blur-md" : "backdrop-blur-none"
      }`}
    >
      <div
        className={`bg-slate-100 animate__animated animate__faster ${
          isAnimation ? "animate__fadeInRight" : "animate__fadeOutRight"
        } md:rounded-tl-xl md:rounded-bl-xl z-50 fixed right-0 top-0 bottom-0 md:w-[60%] lg:w-[40%] w-full overflow-auto min-h-screen`}
      >
        <button
          className="w-10 h-10 bg-green-500 rounded-full mt-4 ml-5 text-xl"
          onClick={handleToggleDrawer}
        >
          X
        </button>
        <div className="grid lg:grid-cols-3 grid-cols-2 justify-center gap-4 p-5 mb-10">
          {bookFavorite?.map(({ book }) => (
            <div key={book.ISBN} className="rounded-lg relative">
              <img
                src={book.cover}
                alt="imagen del libro"
                className="h-[400px] w-full rounded-lg shadow-lg"
              />
              <button
                className="bg-green-400 w-10 h-10 absolute top-2 right-2 rounded-lg font-semibold text-xl"
                onClick={() => removeBookFavorite(book.ISBN)}
              >
                X
              </button>
            </div>
          ))}
        </div>
        {favoriteBook.length === 0 && <EmptyList />}
      </div>
    </div>
  );
}
