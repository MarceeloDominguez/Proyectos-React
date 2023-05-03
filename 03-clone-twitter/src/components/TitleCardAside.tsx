type Prop = {
  title: string;
};

export default function TitleCardAside({ title }: Prop) {
  return (
    <h2 className="text-xl font-bold leading-none tracking-[0.4px] pb-4 text-slate-50 bold-text p-4">
      {title}
    </h2>
  );
}
