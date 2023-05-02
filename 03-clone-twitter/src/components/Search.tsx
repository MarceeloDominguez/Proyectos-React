import { BiSearch } from "react-icons/Bi";

export default function Search() {
  return (
    <div className="mb-3 mt-2">
      <div className="flex relative items-center">
        <BiSearch className="absolute ml-3 w-5 h-5 text-slate-500" />
        <input
          placeholder="Buscar en Twitter"
          className="w-full rounded-full h-[40px] px-9 text-medium regular-text bg-secondary placeholder:text-slate-500"
        />
      </div>
    </div>
  );
}
