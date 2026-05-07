"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  leading?: ReactNode;
};

export default function SecondaryButton({
  children,
  leading,
  className = "",
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={`bg-secondaryBg text-white rounded-full py-3 px-5 font-medium text-sm flex items-center justify-center gap-2 active:scale-[0.99] transition-transform ${className}`}
    >
      {leading}
      <span>{children}</span>
    </button>
  );
}
