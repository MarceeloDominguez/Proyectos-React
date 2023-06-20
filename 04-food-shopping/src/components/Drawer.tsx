"use client";
import { IoClose } from "react-icons/io5";
import ListProductsCart from "./ListProductsCart";
import { useContextGlobalCart } from "@/context/GlobalContext";
import { useCartStore } from "@/store/cartStore";

export default function Drawer() {
  const { productsCart } = useCartStore();
  const { showDrawer, closeDrawer, priceTotalProduct } = useContextGlobalCart();

  if (!showDrawer) return null;

  const shipping = 20;

  return (
    <div className="bg-slate-400/50 z-50 fixed right-0 top-0 h-full w-full">
      <div
        //style={{ scrollbarWidth: "thin" }}
        className="bg-[#F9F8F8] z-50 fixed right-0 top-0 h-full lg:w-[30%] md:w-[65%] w-full md:rounded-tl-[20px] rounded-bl-[20px] transition-transform duration-1000 ease-in-out overflow-y-auto"
      >
        {/* <style>{`::-webkit-scrollbar { display: none;}`}</style> */}
        <div className="fixed top-0 right-0 lg:w-[30%] md:w-[65%] w-full h-14 p-4 md:rounded-tl-[20px] bg-[#F9F8F8]">
          <button onClick={() => closeDrawer()}>
            <IoClose size={25} />
          </button>
        </div>
        <div className="pt-14">
          <h3 className="text-center text-[22px] font-bold text-textPrimary">
            List Products
          </h3>
          <div className="pb-28">
            {productsCart.map((item) => (
              <ListProductsCart key={item.id} product={item} />
            ))}
          </div>
        </div>
        <div className="bg-[#F9F8F8] border-t-2 border-[#DEDDDD] fixed bottom-0 right-0 lg:w-[30%] md:w-[65%] w-full h-28 md:rounded-bl-[20px]">
          <div className="pt-2 px-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-textPrimary font-bold md:text-lg">Shipping</p>
              <p className="text-[#525C60] font-bold md:text-lg">
                {shipping.toLocaleString("as-AR", {
                  style: "currency",
                  currency: "ARS",
                })}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-textPrimary font-bold md:text-lg">
                Price total
              </p>
              <p className="text-[#525C60] font-bold md:text-lg">
                {(priceTotalProduct + shipping).toLocaleString("as-AR", {
                  style: "currency",
                  currency: "ARS",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
