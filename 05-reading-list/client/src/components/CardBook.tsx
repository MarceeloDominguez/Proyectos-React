import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { Book } from "../interface/books";
import { useFavoriteStore } from "../store/useFavoriteBook";

type Prop = {
  item: Book;
};

export default function CardBook({ item }: Prop) {
  const { cover, title, ISBN } = item;
  const { addBookToFavorite, favoriteBook, removeBookFavorite } =
    useFavoriteStore();

  const isFavorite = favoriteBook.includes(ISBN);

  const toggleFavorite = (id: string) => {
    if (isFavorite) {
      removeBookFavorite(id);
      return;
    }

    addBookToFavorite(id);
  };

  return (
    <Card
      className="h-[500px] bg-slate-100"
      isFooterBlurred
      radius="md"
      shadow="sm"
    >
      <Image
        removeWrapper
        alt="Card Book"
        className="w-full h-full"
        src={cover}
        radius="md"
      />
      <CardFooter className="justify-between bg-slate-600/50 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-md truncate font-bold text-white/80">{title}</p>
        <Button
          className={`text-tiny text-white px-8 ${
            isFavorite ? "bg-green-600/60" : "bg-black/20"
          }`}
          color="default"
          radius="lg"
          size="sm"
          onPress={() => toggleFavorite(ISBN)}
        >
          {isFavorite ? "En favorito" : "Guardar en Favoritos"}
        </Button>
      </CardFooter>
    </Card>
  );
}
