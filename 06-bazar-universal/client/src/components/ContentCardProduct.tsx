import { AiFillStar } from "react-icons/ai";

type Props = {
  price: number;
  discountPercentage: number;
  rating: number;
};

export default function ContentCardProduct({
  price,
  discountPercentage,
  rating,
}: Props) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-md text-slate-900 font-medium">
        ${price}{" "}
        <span className="text-xs font-bold text-[#53B175]">
          {discountPercentage.toFixed(0)}% OFF
        </span>
      </h2>
      <div className="flex items-center gap-1">
        <AiFillStar color="#FFB000" />{" "}
        <span className="text-xs font-medium text-slate-900">
          {rating.toFixed(1)}
        </span>
      </div>
    </div>
  );
}
