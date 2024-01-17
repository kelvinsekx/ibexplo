import React from "react";
import { Container } from "./Container";
import Link from "next/link";

export const NavigateHome: React.FC<
  React.ComponentPropsWithoutRef<"div">
> = () => {
  return (
    <Link href="/">
      <svg
        width="12"
        height="23"
        viewBox="0 0 12 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 21.5L1 11.5L11 1.5"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Link>
  );
};
