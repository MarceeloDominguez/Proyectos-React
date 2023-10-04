"use client";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useFetchById } from "@/app/hooks/useFetchById";
import Logo from "@/components/Logo";
import Images from "@/components/details/Images";
import Loading from "@/components/Loading";
import ContentCardProduct from "@/components/ContentCardProduct";
import AddToCart from "@/components/details/AddToCart";
import Footer from "@/components/Footer";

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
    <div className="bg-slate-100 flex flex-col justify-between min-h-screen">
      <div className="lg:w-3/5 md:w-3/4 container mx-auto px-6">
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
          <section className="grid lg:grid-cols-2 md:mt-12 lg:gap-4">
            <div>
              {images && <Images images={images!} />}
              <div className="lg:py-10 md:py-5 py-2 lg:px-3 pr-3">
                <ContentCardProduct
                  discountPercentage={discountPercentage!}
                  price={price!}
                  rating={rating!}
                  changeSize={true}
                />
              </div>
            </div>
            <div className="lg:px-10 flex flex-col justify-between">
              <div>
                <h2 className="lg:mt-6 mt-3 mb-2 md:text-2xl text-xl font-bold text-slate-900 line-clamp-2">
                  {title}
                </h2>
                <p className="mt-6 text-slate-600 text-sm md:text-lg line-clamp-[10]">
                  {description}
                </p>
                <AddToCart stock={stock!} />
              </div>
              <div>
                <div className="my-4 h-[25vh] sm:h-[10vh] flex flex-col justify-end lg:mb-8">
                  <button className="bg-[#53B175] md:w-[50%] w-full flex items-center justify-center h-10 rounded-xl text-slate-100 font-bold text-sm">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
}
