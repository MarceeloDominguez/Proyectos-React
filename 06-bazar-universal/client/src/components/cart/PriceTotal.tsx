"use client";
import { useFetchAllProducts } from "@/hooks/useFetchAllProducts";
import { useCartStore } from "@/store/cartStore";
import { getListProductsInCart } from "@/utils/listProductsInCart";

export default function PriceTotal() {
  const { productsInCart } = useCartStore();
  const { products } = useFetchAllProducts();

  //obtener los item con la propiedad quantity
  const listProductsInCart = getListProductsInCart({
    productsInCart,
    products,
  });

  const priceTotal = listProductsInCart.reduce((acc, item) => {
    return acc + item?.quantity! * item?.price!;
  }, 0);

  return (
    <div className="mt-10">
      <p className="text-lg text-slate-900 font-bold">
        Precio Final: <span>${priceTotal}</span>
      </p>
      <div className="flex py-4">
        <button className="bg-[#53B175] md:w-[50%] w-full flex items-center justify-center h-10 rounded-xl text-slate-100 font-bold text-sm">
          Comprar ahora
        </button>
      </div>
    </div>
  );
}
