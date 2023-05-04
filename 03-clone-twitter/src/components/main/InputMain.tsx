import { iconInputMain } from "../../data/data";

export default function InputMain() {
  return (
    <div className="p-3 border-b border-borderColor">
      <div className="flex">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="avatar"
          className="w-14 h-14 rounded-full mr-2"
        />
        <div className="flex-1 flex items-center">
          <input
            placeholder="¿Qué está pasando?"
            className="w-full py-2 px-2 regular-text text-xl text-slate-50 placeholder:text-gray-600 tracking-[0.4px] bg-primary outline-none"
          />
        </div>
      </div>
      <div className="flex mt-5">
        <div className="flex-1 ml-16 px-3 flex items-center">
          {iconInputMain.map((item, index) => {
            const Icon = item.icon;
            return (
              <Icon key={index} className="mr-[18px] text-button text-xl" />
            );
          })}
        </div>
        <button className="bg-button px-4 py-[6px] rounded-full opacity-60">
          <span className="bold-text tracking-[0.4px] text-medium text-slate-50">
            Twittear
          </span>
        </button>
      </div>
    </div>
  );
}
