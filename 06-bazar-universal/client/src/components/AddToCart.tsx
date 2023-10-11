"use client";
import { useCartStore } from "@/store/cartStore";

type Props = {
  stock: number;
  id: number;
  quantity: number;
};

export default function AddToCart({ stock, id, quantity }: Props) {
  const { addProductsToCart, removeProduct } = useCartStore();
  const inStock = stock - quantity;

  return (
    <div className="flex gap-2 items-end">
      <div className="border-2 border-[#53B175] flex rounded-lg overflow-hidden">
        <button
          onClick={() => removeProduct(id)}
          className="w-8 md:h-8 h-6 flex items-center justify-center bg-slate-300 dark:bg-slate-700"
        >
          <span className="text-2xl font-semibold text-slate-700 dark:text-slate-100">
            -
          </span>
        </button>
        <div className="w-8 md:h-8 h-6 flex items-center justify-center bg-slate-200 dark:bg-slate-600">
          <span className="text-1xl font-bold text-slate-700 dark:text-slate-100">
            {quantity}
          </span>
        </div>
        <button
          onClick={() => addProductsToCart(id)}
          disabled={inStock === 0}
          className="w-8 md:h-8 h-6 flex items-center justify-center bg-slate-300 dark:bg-slate-700"
        >
          <span className="text-2xl font-semibold text-slate-700 dark:text-slate-100">
            +
          </span>
        </button>
      </div>
      <p className="text-slate-700 dark:text-slate-400 font-semibold text-[12px] md:text-sm">
        ({inStock}) En Stock
      </p>
    </div>
  );
}
