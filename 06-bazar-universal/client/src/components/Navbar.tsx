"use client";
import Logo from "./Logo";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useCartStore } from "@/store/cartStore";
import BackPage from "./cart/BackPage";

type Props = {
  logo?: boolean;
};

export default function Navbar({ logo = true }: Props) {
  const { productsInCart } = useCartStore();

  return (
    <nav className="flex justify-between py-5 mt-3">
      {logo ? <Logo /> : <BackPage />}
      <Link href={"/cart"}>
        <div className="w-12 flex justify-center items-center text-slate-900 dark:text-slate-100 relative">
          <HiOutlineShoppingBag size={24} />
          {productsInCart.length !== 0 && (
            <span className="absolute w-6 flex items-center justify-center -top-2 -right-2 text-white font-semibold text-sm bg-[#53B175] px-1 rounded-md">
              {productsInCart.length}
            </span>
          )}
        </div>
      </Link>
    </nav>
  );
}
