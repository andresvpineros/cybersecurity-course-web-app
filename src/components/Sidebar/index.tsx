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
  BsCloudSun,
} from "react-icons/bs";
import { useTheme } from "next-themes";

// Components
import { SubMenu } from "./SubMenu";
import { UserBadge } from "./UserBadge";

export const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 900px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const { theme, setTheme } = useTheme();
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
      href: "https://github.com/andresvpineros/ciberseguridad-unir-problemas/issues",
      icon: <BsLifePreserver size={23} className="min-w-max" />,
      external: true,
      subMenus: false,
    },
    {
      title: "Modo oscuro",
      icon: <BsMoon size={23} className="min-w-max" />,
      external: false,
      subMenus: false,
      onClick: () => setTheme("dark"),
    },
    {
      title: "Modo claro",
      icon: <BsCloudSun size={23} className="min-w-max" />,
      external: false,
      subMenus: false,
      onClick: () => setTheme("light"),
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
            delay: 0,
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
    <nav className="fixed top-0 left-0 bottom-0">
      <motion.div
        variants={NavAnimation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className={`flex flex-col text-gray border-r z-[999] max-w-[20rem] w-[20rem] overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 md:relative fixed h-screen ${styles.colorModeSidebar}`}
      >
        <div className="flex flex-col flex-1">
          <div className="flex justify-center font-medium py-7 border-slate-300 mx-3">
            <Image
              src={
                theme === "light"
                  ? "/images/logo.png"
                  : "/images/logo-white.png"
              }
              width={180}
              height={180}
              alt=""
            />
          </div>
          <ul className="px-2.5 text-[0.9rem] pb-3 flex flex-col gap-2 font-medium">
            {Menus.map((menu, i) => (
              <div key={i}>
                {menu.subMenus === false ? (
                  <li>
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
                  <div>
                    <SubMenu data={menu} />
                  </div>
                )}
              </div>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <ul
            className={`px-2.5 py-5 flex flex-col gap-2 text-[0.9rem] font-medium ${styles.userMenuBorder}`}
          >
            {ConfigMenus.map((menu, i) => (
              <>
                {menu.href && (
                  <li key={i}>
                    <Link
                      href={menu.href}
                      target={menu.external ? "_blank" : ""}
                      className={`${styles.link} ${styles.deactivate}`}
                    >
                      {menu.icon}
                      {menu.title}
                    </Link>
                  </li>
                )}
              </>
            ))}
            {theme === "dark" ? (
              <li>
                <button
                  onClick={ConfigMenus[2].onClick}
                  className={`${styles.button} ${styles.deactivate}`}
                >
                  {ConfigMenus[2].icon}
                  {ConfigMenus[2].title}
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={ConfigMenus[1].onClick}
                  className={`${styles.button} ${styles.deactivate}`}
                >
                  {ConfigMenus[1].icon}
                  {ConfigMenus[1].title}
                </button>
              </li>
            )}
          </ul>
          <UserBadge />
        </div>
      </motion.div>
      {/* <div className="m-3 " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div> */}
    </nav>
  );
};
