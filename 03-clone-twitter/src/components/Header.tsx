type Prop = {
  tabs: string[];
  handleSelected: (index: number) => void;
  selectedTab: number;
};

export default function Header({ tabs, handleSelected, selectedTab }: Prop) {
  return (
    <header className="backdrop-blur-xl bg-primary/50 sticky top-0 h-[105px] border-b border-borderColor z-10">
      <h2 className="text-xl leading-none tracking-[0.4px] pb-4 text-slate-50 regular-text p-4 cursor-pointer">
        Inicio
      </h2>
      <div className="grid grid-cols-2 h-[52px]">
        {tabs.map((item, index) => {
          return (
            <button
              key={item}
              onClick={() => handleSelected(index)}
              className="hover:bg-[#252e38] flex items-center justify-center"
            >
              <span className="text-slate-50 regular-text tracking-[0.4px] text-medium">
                {item}
              </span>
              <div
                className={`border-b-[3px] bg-red-500 ${
                  selectedTab === index ? "w-24 opacity-100" : null
                } absolute bottom-0 border-button`}
              />
            </button>
          );
        })}
      </div>
    </header>
  );
}
