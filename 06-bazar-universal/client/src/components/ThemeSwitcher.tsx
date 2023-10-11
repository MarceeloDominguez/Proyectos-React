"use client";
import { useTheme } from "next-themes";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="absolute top-10 right-10">
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="bg-slate-700 text-slate-100 w-10 h-10 flex items-center justify-center rounded-xl"
        >
          <SunIcon />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="bg-slate-300 text-slate-900 w-10 h-10 flex items-center justify-center rounded-xl"
        >
          <MoonIcon />
        </button>
      )}
    </div>
  );
}
