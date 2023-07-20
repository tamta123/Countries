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
        <div onClick={toggleDarkMode}>
          {mode === "dark" ? (
            <img src="../../../public/moon.svg" alt="Dark Mode" />
          ) : (
            <img src="../../../public/moon-light.svg" alt="Light Mode" />
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
  );
}

export default Header;
