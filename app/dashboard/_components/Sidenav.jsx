"use client";
import { CircleUser, PanelsTopLeft, ShieldPlusIcon } from "lucide-react";
import Link from "next/link"; // ✅ correct import
import { usePathname } from "next/navigation";
import React from "react";

const Sidenav = () => {
  const path = usePathname();

  const menuOption = [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      icon: PanelsTopLeft,
    },
    {
      id: 2,
      name: "Create New",
      path: "/dashboard/create-new",
      icon: PanelsTopLeft,
    },
    {
      id: 3,
      name: "Upgrade",
      path: "/upgrade",
      icon: ShieldPlusIcon,
    },
    {
      id: 4,
      name: "Account",
      path: "/account",
      icon: CircleUser,
    },
  ];

  return (
    <div className="w-64 h-screen shadow-md fixed mt-[65px] bg-white">
      {menuOption.map((item) => (
        <Link
          key={item.id}
          href={item.path}
          className={`flex items-center gap-4 p-4 hover:bg-gray-100 cursor-pointer ${
            path === item.path ? "bg-gray-200 text-black" : ""
          }`}
        >
          <item.icon />
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidenav;
