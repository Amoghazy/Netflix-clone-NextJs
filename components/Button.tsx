import React from "react";

export default function Button({
  lable,
  onClick,
  disabled,
}: {
  disabled?: boolean;
  lable: string;
  onClick?: () => void;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="button"
      className="px-6 w-full py-3.5 text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none rounded-md text-center "
    >
      {lable}
    </button>
  );
}
