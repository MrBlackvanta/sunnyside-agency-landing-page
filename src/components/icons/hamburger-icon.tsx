import type { SVGProps } from "react";

export default function HamburgerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
        fillRule="evenodd"
      />
    </svg>
  );
}
