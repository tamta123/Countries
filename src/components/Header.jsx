import React from "react";

function Header({ mode, toggleDarkMode }) {
  return (
    <div
      className={`flex items-center justify-between ${
        mode === "dark" ? "bg-[#2B3844]" : "bg-[#FFFFFF]"
      }`}
    >
      <h1>Where in the world?</h1>
      <div className="flex">
        <svg
          onClick={toggleDarkMode}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 3">
            <path
              id="Path"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.8426 11.052C7.73486 11.052 5.21543 8.74226 5.21543 5.89457C5.21543 4.82024 5.57343 3.82526 6.18514 3C3.75229 3.75612 2 5.86498 2 8.35045C2 11.4708 4.75943 14 8.16286 14C10.8743 14 13.1757 12.3945 14 10.1636C13.1 10.7238 12.0129 11.052 10.8426 11.052Z"
              fill="white"
            />
          </g>
        </svg>
        <span>Dark Mode</span>
      </div>
    </div>
  );
}

export default Header;
