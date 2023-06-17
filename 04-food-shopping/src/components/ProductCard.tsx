import { Product } from "@/interface/product";
import Image from "next/image";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

type Prop = {
  product: Product;
};

export default function ProductCard({ product }: Prop) {
  const { category, image, name, price } = product;

  return (
    <>
      <span className="bg-textPrimary absolute top-5 left-6 px-3 py-1 rounded-md">
        <p className="text-white text-[12px] capitalize tracking-[0.5px]">
          {category}
        </p>
      </span>
      <div className="flex justify-center items-center h-[330px]">
        <Image src={image} alt="list-product" width={335} height={325} />
      </div>
      <div className="px-6 py-5">
        <div className="mb-3">
          <p className="text-textPrimary text-lg font-semibold leading-[23px]">
            {name}
          </p>
        </div>
        <div className="h-[1px] bg-[#DEDDDD] mt-4 mb-1" />
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm text-[#B8B8B8] leading-[20px] font-semibold mr-2 line-through">
              $20.00
            </span>
            <span className="text-[16px] text-textPrimary font-bold leading-[25px]">
              ${price}
            </span>
          </div>
          <div className="flex gap-[2px]">
            {[...Array(5)].map((item, index) => (
              <AiTwotoneStar key={index} className="text-[#FFA858]" size={14} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
