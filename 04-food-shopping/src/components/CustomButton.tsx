import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

type Prop = {
  title: string;
  bgColor: string;
  bgColorContainerArrow: string;
  color: string;
  route?: string;
};

export default function CustomButton({ ...prop }: Prop) {
  const { title, bgColor, bgColorContainerArrow, color, route } = prop;

  return (
    <Link
      href={route!}
      style={{ background: bgColor }}
      className="mt-[46px] w-[220px] py-4 rounded-[8px] flex justify-center"
    >
      <span
        style={{ color }}
        className="text-sm font-semibold flex items-center gap-2"
      >
        {title}
        <div
          style={{ background: bgColorContainerArrow }}
          className="rounded-full w-5 h-5 flex justify-center items-center"
        >
          <AiOutlineArrowRight size={12} color="#fff" />
        </div>
      </span>
    </Link>
  );
}
