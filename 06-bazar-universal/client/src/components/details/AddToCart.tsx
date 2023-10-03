type Props = {
  stock: number;
};

export default function AddToCart({ stock }: Props) {
  return (
    <div className="flex mt-6 gap-4 items-center">
      <div className="border-2 border-[#53B175] flex rounded-lg overflow-auto">
        <button className="w-8 h-8 flex items-center justify-center bg-slate-300">
          <span className="text-2xl font-semibold text-slate-900">+</span>
        </button>
        <div className="w-8 h-8 flex items-center justify-center bg-slate-100">
          <span className="text-1xl font-bold text-slate-900">0</span>
        </div>
        <button className="w-8 h-8 flex items-center justify-center bg-slate-300">
          <span className="text-2xl font-semibold text-slate-900">-</span>
        </button>
      </div>
      <p className="text-slate-900 font-semibold text-sm">En Stock ({stock})</p>
    </div>
  );
}
