import { AiFillStar } from "react-icons/ai";

type Props = {
  price: number;
  discountPercentage: number;
  rating: number;
  changeSize?: boolean;
};

export default function ContentCardProduct({
  price,
  discountPercentage,
  rating,
  changeSize = false,
}: Props) {
  return (
    <div className="flex justify-between">
      <h2
        className={`${
          changeSize ? "md:text-4xl text-lg" : "text-md"
        } text-slate-900 font-medium`}
      >
        ${price}{" "}
        <span
          className={`${
            changeSize ? "md:text-xl text-xs" : "text-xs"
          } font-bold text-[#53B175]`}
        >
          {discountPercentage.toFixed(0)}% OFF
        </span>
      </h2>
      <div className="flex items-center gap-1">
        <AiFillStar color="#FFB000" />{" "}
        <span
          className={`${
            changeSize ? "md:text-lg text-xs" : "text-xs "
          } font-medium text-slate-900`}
        >
          {rating.toFixed(1)}
        </span>
      </div>
    </div>
  );
}
