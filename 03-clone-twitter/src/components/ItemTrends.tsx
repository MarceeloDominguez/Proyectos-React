import { BiDotsHorizontalRounded } from "react-icons/Bi";
import { Trend } from "../interface/Interface";

type Prop = {
  item: Trend;
};

export default function ItemTrends({ item }: Prop) {
  const { trendCountry, trend, numberTweets } = item;

  return (
    <div className="flex px-4 pt-2 hover:bg-[#252e38] cursor-pointer">
      <div className="flex flex-col flex-1 pb-4">
        <p className="text-small tracking-[0.4px] text-slate-500 regular-text">
          {trendCountry}
        </p>
        <p className="text-medium tracking-[0.4px] text-slate-50 bold-text">
          #{trend}
        </p>
        <p className="text-small tracking-[0.4px] text-slate-500 regular-text">
          {numberTweets} tweets
        </p>
      </div>
      <BiDotsHorizontalRounded className="w-6 h-6 text-slate-500" />
    </div>
  );
}
