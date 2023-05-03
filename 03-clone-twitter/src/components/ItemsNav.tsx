import { navItem } from "../interface/Interface";
import { IconType } from "react-icons";

type Prop = {
  item: navItem;
  Icon: IconType;
};

export default function ItemsNav({ item, Icon }: Prop) {
  const { title } = item;

  return (
    <div className="py-0.5">
      <div className="py-3 px-3 rounded-full flex items-center w-fit hover:bg-[#252e38] cursor-pointer text-slate-50 ">
        <Icon className="mr-4 text-2xl" />
        <span className="text-xl regular-text text-slate-50 tracking-[0.4px] pr-4">
          {title}
        </span>
      </div>
    </div>
  );
}
