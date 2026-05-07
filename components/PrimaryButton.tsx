"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  trailing?: ReactNode;
};

export default function PrimaryButton({
  children,
  trailing,
  className = "",
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={`swish-gradient w-full rounded-full py-4 px-6 text-white font-semibold text-lg flex items-center justify-center relative shadow-lg shadow-primary/20 active:scale-[0.99] transition-transform ${className}`}
    >
      <span>{children}</span>
      {trailing && (
        <span className="absolute right-5 top-1/2 -translate-y-1/2">
          {trailing}
        </span>
      )}
    </button>
  );
}
