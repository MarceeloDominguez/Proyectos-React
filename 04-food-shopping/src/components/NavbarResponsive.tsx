"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { LuShoppingCart } from "react-icons/lu";
import { useContextGlobalCart } from "@/context/GlobalContext";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

const links = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Shop", route: "/shop" },
];

export default function NavbarResponsive() {
  const [showMenu, setShowMenu] = useState(false);
  const { openDrawer } = useContextGlobalCart();
  const { productsCart } = useCartStore();

  return (
    <nav className="lg:hidden flex justify-between items-center container mx-auto px-5">
      <AiOutlineMenu size={22} onClick={() => setShowMenu(true)} />
      <Logo width={100} height={54} />
      <button
        onClick={() => openDrawer()}
        className="bg-textPrimary h-8 w-8 rounded-full flex items-center justify-center relative"
      >
        <LuShoppingCart size={16} color="#fff" />
        <div className="bg-orange-600 absolute -top-2 left-5 h-6 w-6 rounded-full flex items-center justify-center">
          <span className="text-black font-bold text-[12px]">
            {productsCart.length}
          </span>
        </div>
      </button>
      <div
        className={`fixed left-0 top-0 bg-[#F9F8F8] ${
          showMenu ? "w-[70%] h-full" : "w-0 h-0 opacity-0"
        }`}
      >
        <div className="absolute right-10 top-5">
          <RxCross1 size={22} onClick={() => setShowMenu(false)} />
        </div>
        <div className="mt-20">
          <div className="flex justify-center mb-7 py-2">
            <Logo width={198} height={54} />
          </div>
          <ul className="flex flex-col gap-8">
            {links.map((item, index) => (
              <Link
                href={item.route}
                key={index}
                className="text-textPrimary text-xl font-semibold px-4"
              >
                {item.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
