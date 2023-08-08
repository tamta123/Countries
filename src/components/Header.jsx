import React from "react";

function Header({ mode, toggleDarkMode }) {
  return (
    <div
      className={`flex items-center justify-between h-auto py-[30px] px-4 lg:px-20 ${
        mode === "dark" ? "bg-[#2B3844]" : "bg-[#FFFFFF]"
      } `}
      style={{
        boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
      }}
    >
      <h1
        className={`font-bold text-[14px] leading-20 lg:text-[24px] ${
          mode === "dark"
            ? "text-[white]  bg-[#2B3844]"
            : "text-[#111517] bg-[#FFFFFF] "
        }`}
      >
        Where in the world?
      </h1>
      <div
        className={`flex items-center gap-2 ${
          mode === "dark" ? "dark-mode" : "light-mode"
        }`}
      >
        <div
          className="flex justify-center gap-2 items-center"
          onClick={toggleDarkMode}
        >
          <div>
            {mode === "dark" ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group 3">
                  <path
                    id="Path"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.8426 11.052C7.73486 11.052 5.21543 8.74226 5.21543 5.89457C5.21543 4.82024 5.57343 3.82526 6.18514 3C3.75229 3.75612 2 5.86498 2 8.35045C2 11.4708 4.75943 14 8.16286 14C10.8743 14 13.1757 12.3945 14 10.1636C13.1 10.7238 12.0129 11.052 10.8426 11.052Z"
                    fill="white"
                  />
                </g>
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.8426 11.052C7.73486 11.052 5.21543 8.74226 5.21543 5.89457C5.21543 4.82024 5.57343 3.82526 6.18514 3C3.75229 3.75612 2 5.86498 2 8.35045C2 11.4708 4.75943 14 8.16286 14C10.8743 14 13.1757 12.3945 14 10.1636C13.1 10.7238 12.0129 11.052 10.8426 11.052Z"
                  fill="white"
                  stroke="#111517"
                />
              </svg>
            )}
          </div>
          <span
            className={`text-[12px] font-semibold leading-20 lg:text-[16px] ${
              mode === "dark"
                ? "text-[white]  bg-[#2B3844]"
                : "text-[#111517] bg-[#FFFFFF] "
            }`}
          >
            Dark Mode
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
