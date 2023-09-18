import { Button } from "@nextui-org/react";
import { useFavoriteStore } from "../store/useFavoriteBook";
import useDrawerAnimation from "../store/useDrawerAnimation";

export default function ButtonOpenListFavorite() {
  const { toggleDrawer, favoriteBook } = useFavoriteStore();
  const { toggleDrawerAnimation } = useDrawerAnimation();

  return (
    <Button
      className="text-slate-100 font-bold mt-5 md:mt-0 bg-green-500 z-30"
      endContent={<p>Mis libros Favoritos ({favoriteBook.length})</p>}
      onPress={() => {
        toggleDrawer(), toggleDrawerAnimation();
      }}
    />
  );
}
