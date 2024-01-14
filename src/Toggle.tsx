import { PropsWithChildren } from "react";

export interface ToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export default function Toggle({
  children,
  value,
  onChange,
}: PropsWithChildren<ToggleProps>) {
  const selectedClassName = "bg-purple-800";
  const unselectedClassName = "bg-gray-900";

  return (
    <div
      className={`border-2 border-gray-100 rounded-xl p-4 cursor-pointer hover:border-purple-700 hover:bg-purple-900 ${
        value ? selectedClassName : unselectedClassName
      }`}
      onClick={() => onChange(!value)}
    >
      {children}
    </div>
  );
}
