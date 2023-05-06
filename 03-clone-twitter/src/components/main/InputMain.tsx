import { iconInputMain } from "../../data/data";
import { useTweetsContext } from "../../context/TweetContext";

export default function InputMain() {
  const { handleChange, inputValue, handleSubmit, colorButtonInput } =
    useTweetsContext();

  return (
    <form onSubmit={handleSubmit} className="p-3 border-b border-borderColor">
      <div className="flex">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="avatar"
          className="w-14 h-14 rounded-full mr-2 cursor-pointer"
        />
        <div className="flex-1 flex items-center">
          <input
            placeholder="¿Qué está pasando?"
            className="w-full py-2 px-2 regular-text text-xl text-slate-50 placeholder:text-gray-400 tracking-[0.4px] bg-primary outline-none"
            value={inputValue.description}
            name="description"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex mt-4">
        <div className="flex-1 ml-16 px-1 flex items-center cursor-pointer">
          {iconInputMain.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="w-8 h-8 mr-2 flex justify-center items-center rounded-full hover:bg-button/20"
              >
                <Icon className="text-button text-[18px]" />
              </div>
            );
          })}
        </div>
        <button
          type="submit"
          className={`${
            colorButtonInput ? "opacity-100" : "opacity-60"
          } bg-button px-4 py-[6px] rounded-full`}
        >
          <span className="bold-text tracking-[0.4px] text-medium text-slate-50">
            Twittear
          </span>
        </button>
      </div>
    </form>
  );
}
