import Image from "next/image";

export default function ListProductsCart() {
  return (
    <div className="mb-5 p-2">
      <div className="flex gap-2">
        <Image
          src={"/products/producto-1.png"}
          alt="producto"
          width={100}
          height={100}
          className="rounded-lg"
        />
        <div className="flex flex-col flex-1 justify-center gap-3">
          <p className="md:text-lg text-sm text-textPrimary font-semibold">
            Nombre del producto
          </p>
          <span className="md:text-xl text-[16px] text-[#525C60] font-semibold">
            $13.00
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex gap-2 border border-black p-1 rounded-lg mx-2">
            <button className="md:text-[20px] text-[16px] font-bold text-[#525C60]">
              -
            </button>
            <span className="md:text-[20px] text-[16px] text-[#525C60] font-bold">
              5
            </span>
            <button className="md:text-[20px] text-[16px] font-bold text-[#525C60]">
              +
            </button>
          </div>
          <button className="md:text-[15px] text-[13px] text-red-600 font-bold">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
