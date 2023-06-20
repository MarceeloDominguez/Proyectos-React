"use client";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";
import Logo from "./Logo";
import NavbarResponsive from "./NavbarResponsive";
import { useContextGlobalCart } from "@/context/GlobalContext";
import { useCartStore } from "@/store/cartStore";

const links = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Shop", route: "/shop" },
];

export default function Navbar() {
  const { openDrawer } = useContextGlobalCart();
  const { productsCart } = useCartStore();

  return (
    <nav className="bg-[#fff] lg:py-10 py-4 fixed left-0 right-0 lg:h-navbar h-responsiveNavbar z-50">
      {/* full screen */}
      <div className="container mx-auto lg:flex hidden justify-between">
        <div className="flex gap-[150px] items-center">
          <Logo width={198} height={54} />
          <ul className="flex gap-10">
            {links.map((item, index) => (
              <Link
                href={item.route}
                key={index}
                className="text-textPrimary text-xl font-semibold"
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
          <button
            onClick={() => openDrawer()}
            className="h-12 w-[150px] rounded-[32px] bg-[#FAFAFA] flex items-center pl-1 gap-2"
          >
            <div className="bg-textPrimary h-10 w-10 rounded-full flex items-center justify-center">
              <LuShoppingCart size={20} color="#fff" />
            </div>
            <span className="text-lg text-textPrimary font-bold">
              Cart({productsCart.length})
            </span>
          </button>
        </div>
      </div>
      {/* responsive screen */}
      <NavbarResponsive />
    </nav>
  );
}
