import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsBoxArrowInRight } from "react-icons/bs";
import styles from "../Sidebar.module.css";

export const UserBadge = () => {
  return (
    <div className="text-sm z-50 whitespace-pre w-full px-2.5 py-3 flex flex-col font-medium">
      <div
        className={`flex p-4 items-center justify-between ${styles.userBadgeText}`}
      >
        <div className="flex flex-row items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>Andrés Piñeros</span>
        </div>
        <BsBoxArrowInRight size={20} />
      </div>
    </div>
  );
};
