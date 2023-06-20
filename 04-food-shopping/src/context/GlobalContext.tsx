"use client";
import { useCartStore } from "@/store/cartStore";
import { createContext, useContext, useState } from "react";

type Prop = {
  children: React.ReactNode;
};

type ContextProp = {
  showDrawer: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  priceTotalProduct: number;
};

const ContextCart = createContext({} as ContextProp);

export const GlobalContextCart = ({ children }: Prop) => {
  const { productsCart } = useCartStore();
  const [showDrawer, setShowDrawer] = useState(false);

  const openDrawer = () => {
    setShowDrawer(true);
  };

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  const priceTotalProduct = productsCart.reduce((acc, item) => {
    return acc + item.quantity * Number(item.price);
  }, 0);

  return (
    <ContextCart.Provider
      value={{ showDrawer, openDrawer, closeDrawer, priceTotalProduct }}
    >
      {children}
    </ContextCart.Provider>
  );
};

export const useContextGlobalCart = () => {
  const context = useContext(ContextCart);

  return context;
};
