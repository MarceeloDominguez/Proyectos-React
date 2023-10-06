"use client";
import { useFetchById } from "@/hooks/useFetchById";
import Images from "@/components/details/Images";
import Loading from "@/components/Loading";
import ContentCardProduct from "@/components/ContentCardProduct";
import AddToCart from "@/components/AddToCart";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useCartStore } from "@/store/cartStore";

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
    id: idProduct,
  } = useFetchById(id);
  const { productsInCart } = useCartStore();

  const cartItem = productsInCart.find((item) => item.id === Number(id));

  let quantityInCart;

  if (cartItem) {
    quantityInCart = cartItem.quantity;
  } else {
    quantityInCart = 0;
  }

  return (
    <div className="bg-slate-100 flex flex-col justify-between min-h-screen">
      <div className="lg:w-3/5 md:w-3/4 container mx-auto px-6">
        <header>
          <Navbar logo={false} />
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
                <div className="mt-6">
                  <AddToCart
                    stock={stock!}
                    id={idProduct!}
                    quantity={quantityInCart}
                  />
                </div>
              </div>
              <div>
                <div className="my-4 h-[25vh] sm:h-[10vh] flex flex-col justify-end lg:mb-8">
                  <button className="bg-[#53B175] md:w-[50%] w-full flex items-center justify-center h-10 rounded-xl text-slate-100 font-bold text-sm">
                    Comprar ahora
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
