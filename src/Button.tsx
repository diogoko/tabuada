import { PropsWithChildren } from "react";

export interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  disabled,
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className="border-2 border-gray-100 rounded-xl p-6 cursor-pointer bg-teal-800 hover:border-teal-500 hover:bg-teal-700 disabled:bg-gray-700 text-3xl"
      type="button"
      onClick={() => onClick?.()}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
