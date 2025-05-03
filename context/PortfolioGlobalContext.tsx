"use client";

import React, {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

const PortfolioGlobalContext = createContext<{
  openHamburgerMenu: boolean;
  setOpenHamburgerMenu: Dispatch<SetStateAction<boolean>>;
}>({
    openHamburgerMenu: false,
    setOpenHamburgerMenu: () => {},
});

export function PortfolioGlobalProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState<boolean>(false);

  return (
    <PortfolioGlobalContext.Provider
      value={{ openHamburgerMenu, setOpenHamburgerMenu }}
    >
      {children}
    </PortfolioGlobalContext.Provider>
  );
}

export const usePortfolioGlobalContext = () => useContext(PortfolioGlobalContext)
