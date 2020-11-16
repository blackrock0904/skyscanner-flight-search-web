import React from "react";

export function SvgAirPlane(props) {
  return (
    <div style={styles}>
      <svg
        width={35}
        height={35}
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M27.36 2.039c-1.174.91-1.493 1.379-5.654 5.504l-2.494-.407 1.145-1.146a2.056 2.056 0 000-2.906 2.047 2.047 0 00-2.9 0l-3.233 3.239L2.918 4.478a2.31 2.31 0 00-2 .648 2.314 2.314 0 00.277 3.505l11.266 8.175-2.109 2.113c-.723.725-1.483 1.72-2.265 2.965l-5.254-1.548a2.208 2.208 0 00-2.186.558c-.975.977-.828 2.6.305 3.386l4.307 2.987c-.75 1.658-1.205 2.857-1.227 2.913a.686.686 0 00.882.883 55.08 55.08 0 002.907-1.229l2.982 4.316a2.207 2.207 0 003.38.305 2.217 2.217 0 00.556-2.19l-1.545-5.264c1.242-.784 2.236-1.546 2.959-2.27l2.11-2.113 8.158 11.288a2.303 2.303 0 003.499.278 2.322 2.322 0 00.645-2.005l-1.84-11.327 3.232-3.238a2.057 2.057 0 000-2.907 2.046 2.046 0 00-2.9 0l-1.144 1.147-.406-2.499c4.121-4.173 4.582-4.486 5.49-5.66a.066.066 0 00.004-.005c2.108-2.738 2.602-5.503 1.227-6.882-1.375-1.377-4.135-.883-6.869 1.23zm-8.937 2.013a.685.685 0 01.967.968l-1.84 1.845-1.664-.271 2.537-2.542zM1.997 7.522a.942.942 0 01.702-1.692l17.816 2.907-7.074 7.088L1.997 7.52zm-.383 14.341a.841.841 0 01.833-.213l4.914 1.448a46.647 46.647 0 00-1.515 2.91L1.73 23.154a.845.845 0 01-.116-1.29zm11.601 11.624a.842.842 0 01-1.288-.117l-2.85-4.124a46.902 46.902 0 002.905-1.518l1.445 4.924a.845.845 0 01-.212.835zm16.81-17.811a.682.682 0 01.966 0 .686.686 0 010 .969l-2.537 2.541-.27-1.666 1.84-1.844zm-.81 16.723a.938.938 0 01-1.688.704l-8.286-11.466 7.075-7.088 2.9 17.85zm-14.029-8.637c-.752.754-1.853 1.568-3.272 2.42-1.845 1.107-4.028 2.155-5.997 2.993.86-2.026 1.925-4.249 3.054-6.118.825-1.369 1.615-2.435 2.348-3.169C28.017 3.198 27.03 4.058 28.042 3.246c1.124-.072 2.113.263 2.802.953.69.69 1.023 1.682.951 2.808-.812 1.018.037.036-16.609 16.755zm17.78-18.555A4.57 4.57 0 0031.81 3.23a4.561 4.561 0 00-1.973-1.156c.99-.503 2.656-1.066 3.423-.297.607.608.456 1.945-.296 3.43z"
          fill="#1157A7"
        />
      </svg>
    </div>

  )
}

const styles = {
    width: 64,
    height: 64,
    borderRadius: 50,
    backgroundColor: 'rgba(0, 119, 255, 0.05)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25
}