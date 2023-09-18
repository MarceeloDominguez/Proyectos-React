import React from "react";

type Prop = {
  sliderValue: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
};

export default function Slider({ sliderValue, setSliderValue }: Prop) {
  return (
    <section className="lg:p-5 py-4">
      <div className="flex justify-between text-sm font-semibold text-slate-900 md:w-[40%] lg:w-[25%] w-full">
        <span>43 pág</span>
        <span>1200 pág</span>
      </div>
      <input
        type="range"
        id="slider"
        name="slider"
        min="43"
        max="1200"
        className="accent-green-500 cursor-pointer bg-green-100 appearance-none rounded-full md:w-[40%] lg:w-[25%] w-full"
        value={sliderValue}
        onChange={(e) => setSliderValue(Number(e.target.value))}
      />
      <p className="text-slate-900 font-semibold text-sm mt-1">
        Libros con más de {sliderValue} páginas.
      </p>
    </section>
  );
}
