"use client";
import AddToCart from "../AddToCart";
import { Product } from "@/interface/products";
import { useCartStore } from "@/store/cartStore";
import PriceTotal from "./PriceTotal";

type Props = {
  product: Product;
};

export default function ProductInCart({ product }: Props) {
  const { removeProductFromCart } = useCartStore();

  return (
    <section className="flex md:gap-6 gap-2 p-1 my-5 lg:p-2 hover:bg-slate-200 rounded-xl transition-all duration-200 ease-linear">
      <div>
        <img
          src={product?.thumbnail}
          alt="image"
          className="w-28 h-28 md:w-48 md:h-48 object-contain bg-slate-100 shadow-lg rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-between px-2 lg:px-4 flex-1">
        <div>
          <h3 className="line-clamp-1 text-md md:text-2xl font-medium text-slate-900 md:mb-1">
            {product?.title}
          </h3>
          <span className="text-sm md:text-lg font-medium text-slate-500">
            ${product?.price * product?.quantity}
          </span>
        </div>
        <div>
          <AddToCart
            stock={product?.stock}
            id={product?.id}
            quantity={product?.quantity}
          />
          <div className="md:mt-3">
            <button
              onClick={() => removeProductFromCart(product.id)}
              className="text-red-500 text-[13px] md:text-lg font-bold"
            >
              Eliminar Producto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
