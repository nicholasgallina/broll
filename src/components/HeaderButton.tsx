"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface HeaderButtonProps {
  children: React.ReactNode;
  ignoreLogic?: boolean;
  userType?: string;
  destinationRules?: Record<string, string>;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  children,
  ignoreLogic = false,
  userType,
  destinationRules,
}) => {
  const router = useRouter();

  const handleClick = () => {
    console.log("button clicked", {
      userType,
      destinationRules,
      hasDefault: destinationRules?.hasOwnProperty("default"),
      route: destinationRules?.[userType ?? "default"],
    });

    if (ignoreLogic) {
      console.log("click ignored because ignoreLogic is true");
      return;
    }

    const route = destinationRules?.[userType ?? "default"];
    console.log("navigating to:", route);

    if (route) router.push(route);
    else console.log("no route found to navigate");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="cursor-pointer transition-filter duration-200 ease-in-out hover:drop-shadow-[0_0_10px_white]"
    >
      {children}
    </button>
  );
};

export default HeaderButton;
