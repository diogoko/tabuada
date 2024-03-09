import { PropsWithChildren } from "react";

export type ButtonSize = "small" | "medium";

export interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  size?: ButtonSize;
}

export default function Button({
  children,
  onClick,
  disabled,
  size = "medium",
}: PropsWithChildren<ButtonProps>) {
  const className = `
    border-2 border-gray-100 cursor-pointer bg-teal-800 hover:border-teal-500 hover:bg-teal-700 disabled:bg-gray-700
    ${size === "small" ? "rounded-md p-3 text-xl" : ""}
    ${size === "medium" ? "rounded-xl p-6 text-3xl" : ""}
  `;

  return (
    <button
      className={className}
      type="button"
      onClick={() => onClick?.()}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
