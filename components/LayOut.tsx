import React from "react";
import Logo from "@/components/Logo";
import SearchComp from "./SearchComp";

export default function LayOut({
  children,
  clsx,
  goToLogo,
  showSearch = true,
}: {
  children: React.ReactNode;
  clsx?: string;
  goToLogo?: () => void;
  showSearch?: boolean;
}) {
  return (
    <div className={` flex min-h-screen flex-col  ${clsx} `}>
      <div className="min-h-screen w-full bg-black bg-opacity-50">
        <div className="p-4 flex justify-between">
          <Logo goTo={goToLogo} />
          {showSearch && <SearchComp />}
        </div>

        {children}
      </div>
    </div>
  );
}
