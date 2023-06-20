"use client";
import { Product } from "@/interface/product";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";

type Prop = {
  product: Product;
};

export default function ListProductsCart({ product }: Prop) {
  const { removeProductFromCart, removeProductOneFromCart, addProductToCart } =
    useCartStore();

  const handleRemoveProductFromCart = () => {
    removeProductFromCart(product.id);
  };

  const handleRemoveAProductFromCart = () => {
    removeProductOneFromCart(product.id);
  };

  const handleAddToCart = () => {
    addProductToCart(product);
  };

  return (
    <div className="mb-5 p-2">
      <div className="flex gap-2">
        <Image
          src={product.image}
          alt="producto"
          width={100}
          height={100}
          className="rounded-lg"
        />
        <div className="flex flex-col flex-1 justify-center gap-2">
          <p className="md:text-lg text-sm text-textPrimary font-semibold">
            {product.name}
          </p>
          <span className="md:text-xl text-[16px] text-[#525C60] font-semibold">
            {(Number(product.price) * product.quantity).toLocaleString(
              "as-AR",
              {
                style: "currency",
                currency: "ARS",
              }
            )}
          </span>
          <p className="md:text-[14px] text-[12px] text-textPrimary font-semibold">
            Quantity [{product.quantity}]
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex gap-2 border border-black p-1 rounded-lg mx-2">
            <button
              onClick={handleRemoveAProductFromCart}
              className="md:text-[20px] text-[16px] font-bold text-[#525C60]"
            >
              -
            </button>
            <span className="md:text-[20px] text-[16px] text-[#525C60] font-bold">
              {product.quantity}
            </span>
            <button
              onClick={handleAddToCart}
              className="md:text-[20px] text-[16px] font-bold text-[#525C60]"
            >
              +
            </button>
          </div>
          <button
            onClick={handleRemoveProductFromCart}
            className="md:text-[15px] text-[13px] text-red-600 font-bold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
