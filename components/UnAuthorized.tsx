import { useRouter } from "next/router";
import React from "react";

export default function UnAuthorized() {
  const router = useRouter();
  return (
    <main className=" w-full flex flex-col justify-center items-center bg-[#000000]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#fe1a05] px-2 text-sm rounded rotate-12 absolute">
        Page Need Auth
      </div>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-[#ff3131] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#d70909] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span
            onClick={() => router.push("/auth/signin")}
            className="relative block px-8 py-3 bg-[#000000] border border-current"
          >
            Go To Sign In
          </span>
        </a>
      </button>
    </main>
  );
}
