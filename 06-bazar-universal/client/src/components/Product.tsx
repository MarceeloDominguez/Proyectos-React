import { Product } from "@/interface/products";
import ContentCardProduct from "./ContentCardProduct";
import Link from "next/link";

type Props = {
  product: Product;
};

export default function Product({ product }: Props) {
  const {
    thumbnail,
    title,
    description,
    price,
    discountPercentage,
    rating,
    id,
  } = product;

  return (
    <Link href={`/product/${id}`}>
      <div className="flex my-4 lg:my-4 gap-3 p-1 lg:p-2 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all duration-200 ease-linear">
        <img
          src={thumbnail}
          alt="product-img"
          className="w-32 h-32 min-w-[128px] min-h-[128px] object-contain bg-slate-100 dark:bg-slate-700 rounded-xl shadow-lg"
        />
        <div className="flex flex-col gap-2 justify-between px-2 flex-auto">
          <div>
            <h2 className="line-clamp-1 text-md font-medium text-slate-900 dark:text-slate-100">
              {title}
            </h2>
            <p className="line-clamp-3 text-sm text-slate-600 dark:text-slate-400 mt-2">
              {description}
            </p>
          </div>
          <ContentCardProduct
            price={price}
            discountPercentage={discountPercentage}
            rating={rating}
          />
        </div>
      </div>
    </Link>
  );
}
