"use client";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { BsSearch } from "react-icons/bs";
import AmountResults from "@/components/AmountResults";
import TagsCategories from "@/components/TagsCategories";
import Product from "@/components/Product";
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import url from "url";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface SearchParams {
  search: string;
}

type Prop = {
  searchParams: SearchParams;
};

export default function ItemsPage({ searchParams }: Prop) {
  const { search } = searchParams;
  const router = useRouter();
  const [textValue, setTextValue] = useState(search || "");
  const [sent, setSent] = useState(true);
  const { products, getData, setProducts, loading } = useFetch(textValue);

  useEffect(() => {
    if (textValue === "") {
      setSent(false);
      setProducts([]);
    }
  }, [textValue]);

  // useEffect(() => {
  //   if (textValue.trim() === "") {
  //     router.replace("/items?search=");
  //   } else {
  //     const searchUrl = url.format({
  //       pathname: "/items",
  //       query: {
  //         search: textValue,
  //       },
  //     });

  //     router.push(searchUrl);
  //   }
  // }, [textValue]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    getData();
  };

  return (
    <div className="flex flex-col min-h-screen justify-between bg-slate-100">
      <div className="lg:w-3/5 md:w-3/4 container mx-auto px-6">
        <header className="flex flex-col px-1">
          <Navbar />
          <form onSubmit={handleSubmit} className="flex flex-row gap-2 py-2">
            <input
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              placeholder="Buscar... Ej: Laptop, iPhone, MacBook..."
              className="bg-slate-300 w-[100%] md:w-[45%] h-10 p-2 rounded-lg placeholder:text-slate-600 placeholder:text-sm focus:outline-none"
            />
            <button
              onClick={() => setSent(true)}
              className="bg-[#53B175] rounded-lg w-14 flex justify-center items-center text-slate-100"
            >
              <BsSearch />
            </button>
          </form>
        </header>

        {loading ? (
          <Loading />
        ) : (
          <>
            {textValue !== "" && sent && (
              <>
                <AmountResults value={textValue} products={products} />
                <TagsCategories products={products} />
              </>
            )}

            <div className="p-1 grid lg:grid-cols-2 lg:gap-x-10">
              {products.map((item) => (
                <Product product={item} key={item.id} />
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
