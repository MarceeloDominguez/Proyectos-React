const listCategory = ["Geografía", "Deporte", "Historia"];

type Props = {
  handleCategory: (category: string) => void;
  selectCategory: string;
};

export default function SelectCategory({
  handleCategory,
  selectCategory,
}: Props) {
  return (
    <div className="max-w-xl mx-auto flex space-x-4 mt-4">
      {listCategory.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => handleCategory(item)}
            className={`${
              selectCategory === item ? "bg-stone-800" : null!
            } px-4 py-1 rounded-md border-2 border-stone-600 flex`}
          >
            <span className="text-slate-200 font-semibold tracking-[0.5px] text-sm">
              {item}
            </span>
          </div>
        );
      })}
    </div>
  );
}
