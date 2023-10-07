"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import url from "url";

export default function SearchProducts() {
  const [textValue, setTextValue] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const searchUrl = url.format({
      pathname: "/items",
      query: {
        search: textValue,
      },
    });

    router.push(searchUrl);
  };

  return (
    <div className="flex py-3 px-6 md:max-w-xl mx-auto flex-col gap-4">
      <div>
        <input
          placeholder="Buscar... Ej: Laptop, iPhone, MacBook..."
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          className="bg-slate-300 w-[100%] h-10 p-2 rounded-xl placeholder:text-slate-600 placeholder:text-sm focus:outline-none"
        />
      </div>
      <div className="bg-[#53B175] h-10 rounded-xl">
        {/* <Link
          href={{
            pathname: "/items",
            query: {
              search: textValue,
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
        </Link> */}
        <button
          onClick={handleSearch}
          disabled={!textValue}
          className={`text-sm font-bold text-slate-100 h-10 w-[100%] ${
            !textValue ? "opacity-70" : "opacity-100"
          }`}
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
