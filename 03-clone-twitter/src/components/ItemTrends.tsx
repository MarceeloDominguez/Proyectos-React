import { BiDotsHorizontalRounded } from "react-icons/Bi";

export default function ItemTrends() {
  return (
    <div className="flex px-4 pt-2 hover:bg-[#252e38] cursor-pointer">
      <div className="flex flex-col flex-1 pb-4">
        <p className="text-small tracking-[0.4px] text-slate-500 regular-text">
          Tendencia en Argentina
        </p>
        <p className="text-medium tracking-[0.4px] text-slate-50 regular-text">
          #Dolar Blue
        </p>
        <p className="text-small tracking-[0.4px] text-slate-500 regular-text">
          2.256 tweets
        </p>
      </div>
      <BiDotsHorizontalRounded className="w-6 h-6 text-slate-500" />
    </div>
  );
}
