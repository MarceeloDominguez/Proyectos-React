import { Product } from "@/interface/products";
import React from "react";

type Props = {
  value: string;
  products: Product[];
};

export default function AmountResults({ value, products }: Props) {
  return (
    <span className="text-slate-900 font-medium text-[13px] px-1">
      Cantidad de resultados de la búsqueda de "{value}": {products.length}
    </span>
  );
}
