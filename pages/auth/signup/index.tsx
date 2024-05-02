"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import LayOut from "@/components/LayOut";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const handelSignUp = async () => {
    signIn("credentials", {
      email,
      password,
      callbackUrl: "/auth/signin",
    });
  };
  return (
    <LayOut showSearch={false} clsx="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/8b02bc99-bf25-4b2e-ac77-0a5e07a0abd3/EG-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
      <div className="bg-black bg-opacity-65 max-w-[450px] mx-auto p-16 ">
        <h1 className="text-3xl mb-6 font-bold">Sign Up</h1>
        <div className="mb-6">
          <Input
            id="email"
            lable="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <Input
            id="password"
            lable="Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />{" "}
        </div>

        <div className="mb-4 ">
          <Input
            id="Cpassword"
            lable="Confirm Password"
            type="password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={ConfirmPassword}
          />
        </div>
        {password != ConfirmPassword ? (
          <div className="mb-2">
            <span className="w-full bg-red-500 p-1">password not match</span>
          </div>
        ) : null}
        <div className="mb-4">
          <Button
            disabled={!(password === ConfirmPassword)}
            onClick={handelSignUp}
            lable="Sign UP"
          />
        </div>
        <div>
          <span
            onClick={() => {
              router.push("/auth/signin");
            }}
            className="opacity-80 cursor-pointer"
          >
            {" "}
            Already Membare ?{" "}
          </span>{" "}
        </div>
      </div>
    </LayOut>
  );
}
