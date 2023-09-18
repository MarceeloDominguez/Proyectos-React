import img from "../assets/lista-vacia.png";

export default function EmptyList() {
  return (
    <div>
      <h2 className="text-center font-bold text-lg text-slate-900">
        Aún no tenés libros en Favoritos
      </h2>
      <img
        src={img}
        alt="no hay libros en favoritos"
        className="h-[500px] w-full object-contain"
      />
    </div>
  );
}
