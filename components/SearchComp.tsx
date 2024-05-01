"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function SearchComp() {
  const router = useRouter();
  const [search, setSearch] = React.useState("");
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      router.push(`/dashboard/search?q=${search}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className="relative right-8">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
      <input
        onKeyDown={handleKeyPress}
        onChange={handleChange}
        type="search"
        id="search"
        className="block w-full p-2 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white"
        placeholder="Search"
        required
      />
    </div>
  );
}
