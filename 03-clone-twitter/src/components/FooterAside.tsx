import { asideInfo } from "../constants/footerAside";

export default function FooterAside() {
  return (
    <div className="mt-4 mb-2">
      <div className="flex flex-wrap gap-x-3 gap-y-[2px]">
        {asideInfo.map((item) => {
          return (
            <span
              key={item}
              className="text-small tracking-[0.4px] text-slate-500 regular-text"
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
