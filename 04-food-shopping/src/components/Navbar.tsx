import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";

const links = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Shop", route: "/shop" },
];

export default function Navbar() {
  return (
    <nav className="bg-[#fff] py-10 fixed left-0 right-0 h-navbar z-50">
      <div className="container mx-auto flex justify-between">
        <div className="flex gap-[150px] items-center">
          <Link href={"/"}>
            <Image src="/logo.svg" alt="Logo" width={198} height={54} />
          </Link>
          <ul className="flex gap-10">
            {links.map((item, index) => (
              <Link
                href={item.route}
                key={index}
                className="text-[#274C5B] text-xl font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <div className="relative">
            <input className="h-12 w-[240px] rounded-[24px] bg-[#FAFAFA] focus:outline-none pl-5" />
            <div className="absolute top-1 right-1 bg-[#7EB693] h-10 w-10 rounded-full flex items-center justify-center">
              <BiSearch size={20} color="#fff" />
            </div>
          </div>
          <div className="h-12 w-[150px] rounded-[32px] bg-[#FAFAFA] flex items-center pl-1 gap-2">
            <div className="bg-[#274C5B] h-10 w-10 rounded-full flex items-center justify-center">
              <LuShoppingCart size={20} color="#fff" />
            </div>
            <span className="text-lg text-[#274C5B] font-bold">Cart(0)</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
