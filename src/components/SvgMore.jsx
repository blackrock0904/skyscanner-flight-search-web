import * as React from "react"

export function SvgMore(props) {
  return (
    <svg
      width={11}
      height={20}
      viewBox="0 0 11 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1l8.667 8.667L1 18.333"
        stroke="#A7A7A7"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
