"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { LuShoppingCart } from "react-icons/lu";

export default function NavbarResponsive() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="lg:hidden flex justify-between items-center container mx-auto px-5">
      <AiOutlineMenu size={22} onClick={() => setShowMenu(true)} />
      <Logo width={100} height={54} />
      <div className="bg-textPrimary h-8 w-8 rounded-full flex items-center justify-center">
        <LuShoppingCart size={16} color="#fff" />
      </div>
      <div
        className={`fixed left-0 top-0 bg-red-500 ${
          showMenu ? "w-[70%] h-full" : "w-0 h-0 opacity-0"
        }`}
      >
        <div className="absolute right-10 top-5">
          <RxCross1 size={22} onClick={() => setShowMenu(false)} />
        </div>
      </div>
    </nav>
  );
}
