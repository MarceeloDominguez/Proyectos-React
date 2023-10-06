export default function NoData() {
  return (
    <div className="flex flex-col mt-14">
      <p className="text-slate-900 font-medium text-center text-lg py-2">
        Aún no has comprado nada!
      </p>
      <div className="h-[40vh] flex items-center justify-center">
        <img
          src="/no-data.png"
          alt="imagen"
          className="w-96 h-96 object-contain"
        />
      </div>
    </div>
  );
}
