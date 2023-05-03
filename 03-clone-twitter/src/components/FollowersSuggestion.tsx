import { Followers } from "../interface/Interface";

type Prop = {
  item: Followers;
};

export default function FollowersSuggestion({ item }: Prop) {
  const { avatar, name, nickname } = item;

  return (
    <div className="flex items-center px-4 pb-4 pt-2 hover:bg-[#252e38] cursor-pointer">
      <img src={avatar} className="w-12 h-12 rounded-full mr-3" alt={name} />
      <div className="flex-1">
        <div className="max-w-[105px] truncate">
          <div>
            <span className="text-medium tracking-[0.4px] text-slate-50 bold-text">
              {name}
            </span>
          </div>
          <div>
            <span className="text-medium tracking-[0.4px] text-slate-500 regular-text">
              {nickname}
            </span>
          </div>
        </div>
      </div>
      <button className="bg-slate-50 h-8 w-20 rounded-full flex items-center justify-center">
        <span className="regular-text capitalize text-small tracking-[0.4px] text-black">
          Seguir
        </span>
      </button>
    </div>
  );
}
