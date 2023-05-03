type Prop = {
  title: string;
};

export default function ShowMore({ title }: Prop) {
  return (
    <div className="px-4 pb-4 pt-2 hover:bg-[#252e38] rounded-bl-xl rounded-br-xl cursor-pointer">
      <span className="text-medium text-button regular-text">{title}</span>
    </div>
  );
}
