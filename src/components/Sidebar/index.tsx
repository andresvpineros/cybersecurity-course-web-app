"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Sidebar.module.css";

import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

// * React icons
import {
  BsHouse,
  BsLayers,
  BsBook,
  BsPerson,
  BsLifePreserver,
  BsMoon,
} from "react-icons/bs";
import { MdMenu } from "react-icons/md";

// Components
import { SubMenu } from "./SubMenu";
import { UserBadge } from "./UserBadge";

export const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const pathname = usePathname();

  const Menus = [
    {
      title: "Inicio",
      href: "/",
      icon: <BsHouse size={23} className="min-w-max" />,
      subMenus: false,
    },
    {
      title: "Módulos",
      href: "/modules",
      icon: <BsLayers size={23} className="min-w-max" />,
      subMenus: true,
      subMenusList: [
        {
          title: "Module 1. Introduction",
          href: "/modules/1/",
        },
        {
          title: "Module 2. OSINT Tools",
          href: "/modules/2/",
        },
      ],
    },
    {
      title: "Recursos",
      href: "/resources",
      icon: <BsBook size={23} className="min-w-max" />,
      subMenus: true,
      subMenusList: [
        {
          title: "Virtual Machines",
          href: "/resources/virtual-machines/",
        },
        {
          title: "Scripts",
          href: "/resources/scripts/",
        },
        {
          title: "Code",
          href: "/resources/code/",
        },
      ],
    },
    {
      title: "Comunidad ",
      href: "/community",
      icon: <BsPerson size={23} className="min-w-max" />,
      subMenus: false,
    },
  ];

  const ConfigMenus = [
    {
      title: "Reporte de Errores",
      href: "/reports",
      icon: <BsLifePreserver size={23} className="min-w-max" />,
      subMenus: false,
    },
    {
      title: "Modo oscuro",
      href: "/",
      icon: <BsMoon size={23} className="min-w-max" />,
      subMenus: false,
    },
  ];

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  const NavAnimation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "20rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "20rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  return (
    <nav>
      <motion.div
        variants={NavAnimation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className="flex flex-col bg-white text-gray border-r z-[999] max-w-[20rem] w-[20rem] overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 md:relative fixed h-screen"
      >
        <div className="flex flex-col flex-1">
          <div className="flex justify-center font-medium py-7 border-slate-300 mx-3">
            <Image src="/images/logo.png" width={180} height={180} alt="" />
          </div>
          <ul className="px-2.5 text-[0.9rem] pb-3 flex flex-col gap-2 font-medium">
            {Menus.map((menu, i) => (
              <>
                {menu.subMenus === false ? (
                  <li key={i}>
                    <Link
                      href={menu.href}
                      className={`${styles.link} ${
                        pathname === menu.href
                          ? styles.active
                          : styles.deactivate
                      }`}
                    >
                      {menu.icon}
                      {menu.title}
                    </Link>
                  </li>
                ) : (
                  <div key={i}>
                    <SubMenu data={menu} />
                  </div>
                )}
              </>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <ul className="px-2.5 py-5 flex flex-col gap-2 border-b border-slate-300 text-[0.9rem] font-medium">
            {ConfigMenus.map((menu, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className={`${styles.link} ${styles.deactivate}`}
                >
                  {menu.icon}
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
          <UserBadge />
        </div>
      </motion.div>
      <div className="m-3 md:hidden " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </nav>
  );
};
