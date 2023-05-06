import { BiDotsHorizontalRounded } from "react-icons/Bi";
import { BsFillPatchCheckFill } from "react-icons/bs";
import IconsCardTweet from "./IconsCardTweet";
import { Data } from "../../interface/data";

type Prop = {
  tweets: Data[];
};

export default function CardTweet({ tweets }: Prop) {
  return (
    <div>
      {tweets.map((item, index) => {
        return (
          <div
            key={index}
            className="flex px-4 py-2 border-b border-borderColor cursor-pointer"
          >
            <img
              src={item.avatar}
              alt="avatar-user"
              className="lg:w-14 lg:h-14 w-10 h-10 rounded-full"
            />
            <div className="flex flex-1 pl-2 relative">
              <div className="flex flex-1 flex-col p-1">
                <div className="flex gap-2 items-end">
                  <span className="bold-text lg:text-lg sm:text-lg text-sm text-slate-50 tracking-[0.4px] capitalize">
                    {item.name}
                  </span>
                  {item.verifield && (
                    <BsFillPatchCheckFill className="text-button lg:mb-[5px] sm:mb-[5px] mb-[3px]" />
                  )}
                  <span className="regular-text lg:text-medium sm:text-medium text-[12px] tracking-[0.4px] text-slate-500">
                    {item.nickname}
                  </span>
                  <span className="regular-text lg:text-medium sm:text-medium text-[12px] tracking-[0.4px] text-slate-500">
                    {item.time}
                  </span>
                </div>
                <div>
                  <p className="lg:text-[16px] sm:text-[16px] text-sm  text-slate-50 tracking-[0.2px] max-h-[250px] overflow-hidden">
                    {item.description}
                  </p>
                </div>
                {item.image !== null && (
                  <div>
                    <img
                      src={item.image}
                      alt="imagen-tweet"
                      className="py-3 rounded-[20px] w-full object-fill"
                    />
                  </div>
                )}
                <div
                  className={`flex justify-between xl:mr-20 ${
                    item.image === null && "mt-3"
                  }`}
                >
                  <IconsCardTweet item={item} />
                </div>
              </div>
              <div className="absolute right-0">
                <BiDotsHorizontalRounded className="w-6 h-6 text-slate-500 mt-1" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
