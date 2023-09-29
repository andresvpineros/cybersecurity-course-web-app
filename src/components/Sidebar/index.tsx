"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from './Sidebar.module.css';

import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

// * React icons
import { BsHouse, BsLayers, BsBook, BsPerson } from "react-icons/bs";

// Components
import { SubMenu } from "./SubMenu";

interface ISideBar {
  children: React.ReactNode;
}

export const Sidebar: React.FC<ISideBar> = ({ children }) => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const pathname = usePathname();

  const Menus = [
    {
      title: "Home",
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
          href: "/modules/1/"
        },
        {
          title: "Module 2. OSINT Tools",
          href: "/modules/2/"
        }
      ]
    },
    {
      title: "Recursos",
      href: "/resources",
      icon: <BsBook size={23} className="min-w-max" />,
      subMenus: true,
      subMenusList: [
        {
          title: "Virtual Machines",
          href: "/resources/virtual-machines/"
        },
        {
          title: "Scripts",
          href: "/resources/scripts/"
        },
        {
          title: "Code",
          href: "/resources/code/"
        }
      ]
    },
    {
      title: "Comunidad ",
      href: "/community",
      icon: <BsPerson size={23} className="min-w-max" />,
      subMenus: false
    },
  ];

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
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
          width: "18rem",
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
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className="bg-white text-gray border-r z-[999] max-w-[20rem] w-[20rem] overflow-hidden md:relative fixed h-screen"
      >
        <div className="flex justify-center gap-2.5 font-medium py-6 border-slate-300  mx-3">
          <Image src="/images/logo.png" width={180} height={180} alt="" />
        </div>
        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            {Menus.map((menu, i) => (
              <>
                {menu.subMenus === false ? (
                  <li key={i}>
                    <Link href={menu.href} className={`${styles.link} ${pathname.includes(menu.href) ? styles.active : styles.deactivate}`}>
                      {menu.icon}
                      {menu.title}
                    </Link>
                  </li>
                ) : (
                  <div key={i} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                )}
              </>
            ))}
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};
