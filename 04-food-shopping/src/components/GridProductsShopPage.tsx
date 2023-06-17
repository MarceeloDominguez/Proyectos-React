import { products } from "@/data/products";
import Link from "next/link";
import ProductCard from "./ProductCard";

export default function GridProductsShopPage() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 py-10 px-5">
      {products.map((item, index) => (
        <div
          key={index}
          className="flex justify-center rounded-[16px] shadow-sm"
        >
          <Link
            href={`/product/${item.id}`}
            className="bg-white rounded-[16px] pt-14 max-w-[335px] shadow-sm relative"
          >
            <ProductCard product={item} />
          </Link>
        </div>
      ))}
    </div>
  );
}
