import React from "react";

export default function Input({
  id,
  lable,
  type,
  value,
  onChange,
}: {
  id: string;
  type: string;
  value: string;
  onChange: (e: any) => void;
  lable: string;
}) {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        id={id}
        className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-transparent  border-gray-300 border-[1px]     focus:border-white peer "
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {lable}
      </label>
    </div>
  );
}
