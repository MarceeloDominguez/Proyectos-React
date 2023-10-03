"use client";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useFetchById } from "@/app/hooks/useFetchById";
import Logo from "@/components/Logo";
import Images from "@/components/details/Images";
import Loading from "@/components/Loading";
import ContentCardProduct from "@/components/ContentCardProduct";
import AddToCart from "@/components/details/AddToCart";

type Props = {
  params: { id: string };
};

export default function DetailsProduct({ params }: Props) {
  const { id } = params;
  const {
    title,
    images,
    price,
    discountPercentage,
    rating,
    description,
    loading,
    stock,
  } = useFetchById(id);

  return (
    <div className="bg-slate-100 min-h-screen px-6">
      <div className="container mx-auto">
        <header>
          <section className="flex justify-between py-3">
            <Logo />
            <div className="w-12 flex justify-center items-center text-slate-900">
              <HiOutlineShoppingBag size={24} />
            </div>
          </section>
        </header>
        {loading ? (
          <Loading />
        ) : (
          <section>
            {images && <Images images={images!} />}
            <h2 className="mt-6 mb-2 text-2xl font-bold text-slate-900 line-clamp-2">
              {title}
            </h2>
            <ContentCardProduct
              discountPercentage={discountPercentage!}
              price={price!}
              rating={rating!}
            />
            <p className="mt-6 text-slate-600 text-sm">{description}</p>
            <AddToCart stock={stock!} />
            <div className="h-[30vh] mt-6 flex flex-col justify-end p-1">
              <button className="bg-[#53B175] w-[80%] flex self-center items-center justify-center h-10 rounded-xl text-slate-100 font-bold text-sm">
                Comprar
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
