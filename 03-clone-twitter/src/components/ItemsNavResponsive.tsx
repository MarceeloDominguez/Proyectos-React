import { IconType } from "react-icons";

type Prop = {
  Icon: IconType;
};

export default function ItemsNavResponsive({ Icon }: Prop) {
  return (
    <div className="py-1 flex justify-center">
      <div className="rounded-full hover:bg-[#252e38] cursor-pointer w-12 h-12 flex items-center justify-center">
        <Icon className="text-2xl text-slate-50" />
      </div>
    </div>
  );
}
