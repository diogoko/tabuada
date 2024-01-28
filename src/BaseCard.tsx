import { PropsWithChildren } from "react";

export interface BaseCardProps {
  onClick?: () => void;
}

export default function BaseCard({
  children,
  onClick,
}: PropsWithChildren<BaseCardProps>) {
  return (
    <div
      onClick={() => onClick?.()}
      className="cursor-pointer select-none text-8xl text-center flex-grow h-full flex items-center place-content-center text-glow"
    >
      <div className="rotate-90">{children}</div>
    </div>
  );
}
