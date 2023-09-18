type Prop = {
  title: string;
};

export default function Error({ title }: Prop) {
  return (
    <div>
      <p className="text-slate-950 text-center font-bold text-lg">
        No se encontraron resultados de "{title}"
      </p>
    </div>
  );
}
