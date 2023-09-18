import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "./api/api";
import CardBook from "./components/CardBook";
import {
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import SearchIcon from "./components/SearchIcon";
import { ChevronDownIcon } from "./components/ChevronDownIcon";
import Slider from "./components/Slider";
import Loading from "./components/Loading";
import Error from "./components/Error";
import ButtonOpenListFavorite from "./components/ButtonOpenListFavorite";
import DrawerFavorite from "./components/DrawerFavorite";

function App() {
  const [search, setSearch] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string>("Todos");
  const [chevronDownIcon, setChevronDownIcon] = useState(true);
  const [sliderValue, setSliderValue] = useState(43);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(search);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [search]);

  const {
    data: books,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["books", debouncedValue],
    queryFn: () => api(debouncedValue),
  });

  const onClear = () => {
    setSearch("");
  };

  const genres = Array.from(new Set(books?.map((book) => book.book.genre)));

  const listGenre = ["Todos", ...genres];

  const listBookByGenre =
    selectedGenre === "Todos"
      ? books
      : books?.filter((book) => book.book.genre === selectedGenre);

  const filteredBooks = listBookByGenre?.filter(
    (book) => book.book.pages >= sliderValue
  );

  return (
    <div className="bg-slate-100">
      <div className="min-h-screen w-3/4 mx-auto">
        <nav className="lg:p-5 py-5 md:flex justify-between">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Buscar por nombre..."
            startContent={<SearchIcon />}
            value={search}
            onClear={() => onClear()}
            onValueChange={(value) => setSearch(value)}
            color="default"
          />
          <div className="flex justify-between items-center gap-4">
            <ButtonOpenListFavorite />
            <Dropdown
              placement="bottom-end"
              onOpenChange={() => setChevronDownIcon(!chevronDownIcon)}
            >
              <DropdownTrigger>
                <Button
                  variant="bordered"
                  className="capitalize mt-5 md:mt-0 font-bold"
                >
                  {selectedGenre}{" "}
                  <ChevronDownIcon
                    className={`text-green-500 transition-transform duration-500 ${
                      chevronDownIcon ? "rotate-0" : "rotate-180"
                    }`}
                  />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
              >
                {listGenre.map((item) => (
                  <DropdownItem
                    onPress={() => setSelectedGenre(item)}
                    key={item}
                  >
                    {item}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </nav>
        <Slider sliderValue={sliderValue} setSliderValue={setSliderValue} />
        {isLoading ? (
          <Loading />
        ) : error !== null ? (
          <Error title={search} />
        ) : (
          <section className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:p-5 py-5">
            {filteredBooks?.map(({ book }) => (
              <CardBook item={book} key={book.ISBN} />
            ))}
          </section>
        )}
      </div>
      <DrawerFavorite />
    </div>
  );
}

export default App;
