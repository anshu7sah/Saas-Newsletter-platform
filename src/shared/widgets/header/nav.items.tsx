import { navItems } from "@/app/configs/constants";
import Link from "next/link";
import React from "react";

const NavItems = () => {
  return (
    <div className="w-full hidden md:flex items-center h-full">
      {navItems.map((navItem: NavItems, i: number) => (
        <Link key={i} href={"/"} className="px-5 text-lg">
          {navItem.title}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
