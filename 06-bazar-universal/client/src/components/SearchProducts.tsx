"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function SearchProducts() {
  const [textValue, setTextValue] = useState("");

  return (
    <div className="flex py-3 px-6 md:max-w-xl mx-auto flex-col gap-4">
      <div>
        <input
          placeholder="Buscar... Ej: Laptop, iPhone, MacBook..."
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          className="bg-slate-300 dark:bg-slate-600 w-[100%] h-10 p-2 rounded-xl placeholder:text-slate-600 dark:placeholder:text-slate-300 placeholder:text-sm focus:outline-none dark:text-slate-100"
        />
      </div>
      <div className="bg-[#53B175] h-10 rounded-xl">
        <Link
          href={{
            pathname: "/items",
            query: {
              search: JSON.stringify(textValue),
            },
          }}
        >
          <button
            disabled={!textValue}
            className={`text-sm font-bold text-slate-100 h-10 w-[100%] ${
              !textValue ? "opacity-70" : "opacity-100"
            }`}
          >
            Buscar
          </button>
        </Link>
      </div>
    </div>
  );
}
