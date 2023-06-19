"use client";
import { createContext, useContext, useState } from "react";

type Prop = {
  children: React.ReactNode;
};

type ContextProp = {
  showDrawer: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const ContextCart = createContext({} as ContextProp);

export const GlobalContextCart = ({ children }: Prop) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const openDrawer = () => {
    setShowDrawer(true);
  };

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <ContextCart.Provider value={{ showDrawer, openDrawer, closeDrawer }}>
      {children}
    </ContextCart.Provider>
  );
};

export const useContextGlobalCart = () => {
  const context = useContext(ContextCart);

  return context;
};
