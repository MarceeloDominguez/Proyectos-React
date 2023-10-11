"use client";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

export default function BackPage() {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="flex items-center gap-3 text-slate-400 dark:text-slate-100 font-semibold"
      >
        <BiArrowBack size={20} /> Atras
      </button>
    </div>
  );
}
