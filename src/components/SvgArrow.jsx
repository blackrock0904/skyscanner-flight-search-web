import * as React from "react"

export function SvgArrow(props) {
  return (
    <svg
      style={styles}
      width={14}
      height={10}
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 5h12M9 1l4 4-4 4"
        stroke="#C4C4C4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


const styles = {
    padding: '0 20'
  }

