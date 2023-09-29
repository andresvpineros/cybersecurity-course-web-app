import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import styles from '../Sidebar.module.css';

interface SubMenusList {
  title: string;
  href: string;
}

interface SubMenuProps {
  title: string;
  href: string;
  icon: React.ReactNode;
  subMenus: boolean;
  subMenusList?: Array<SubMenusList>;
}

export const SubMenu: React.FC<{ data: SubMenuProps }> = ({ data }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  console.log(pathname, data.title)
  return (
    <>
      <li
        className={`${styles.link} ${pathname.includes(data.href) ? styles.active : styles.deactivate}`}
        onClick={() => setOpen(!open)}
      >
        {data.icon}
        <p className="flex-1 capitalize">{data.title}</p>
        <IoIosArrowDown className={` ${open && "rotate-180"} duration-200 `} />
      </li>

      <motion.ul
        animate={
          open
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex h-0 flex-col pl-14 text-[0.8rem] font-normal overflow-hidden"
      >
        {data.subMenusList?.map((menu: SubMenusList, index) => (
          <li key={index}>
            {/* className="hover:text-blue-600 hover:font-medium" */}
            <Link href={menu.href} className={`${styles.link} ${styles.subMenu}`}>
              {menu.title}
            </Link>
          </li>
        ))}
      </motion.ul>
    </>
  );
};
