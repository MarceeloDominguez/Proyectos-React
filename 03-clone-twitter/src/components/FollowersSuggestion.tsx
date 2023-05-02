export default function FollowersSuggestion() {
  return (
    <div className="flex items-center px-4 pb-4 pt-2 hover:bg-[#252e38] cursor-pointer">
      <img
        src="https://randomuser.me/api/portraits/men/1.jpg"
        className="w-12 h-12 rounded-full mr-3"
      />
      <div className="flex-1">
        <div>
          <span className="text-medium tracking-[0.4px] text-slate-50 bold-text">
            nombre
          </span>
        </div>
        <div>
          <span className="text-medium tracking-[0.4px] text-slate-500 regular-text">
            @nombre
          </span>
        </div>
      </div>
      <div>
        <p>button</p>
      </div>
    </div>
  );
}
