"use client";
import { useEffect, useState } from "react";
import { Product } from "@/interface/product";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function RandomProduct() {
  const [dataProducts, setDataProducts] = useState<Product[]>([]);

  useEffect(() => {
    setDataProducts(products);
  }, []);

  const getRandomProduct = (arr: Product[], num: number) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const randomProduct = getRandomProduct(dataProducts, 4);

  return (
    <>
      <p className="text-textPrimary md:text-[40px] text-[20px] font-semibold flex justify-center lg:mb-5">
        Related Products
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 py-10 px-5 lg:w-[1340px] container mx-auto">
        {randomProduct.map((item, index) => (
          <div key={index} className="flex justify-center">
            <div className="bg-white rounded-[16px] pt-14 max-w-[335px] shadow-sm relative">
              <ProductCard product={item} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
