import React from "react";

const CountryInfo = ({ country, mode }) => {
  return (
    <div
      className={`w-full flex flex-col  justify-center m-auto rounded-[5px] ${
        mode === "dark" ? "bg-[#2B3844]" : "bg-[#FFFFFF]"
      }`}
      style={{
        boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.03)",
      }}
    >
      <div className="w-full h-[160px]">
        <img
          className="w-full h-[160px]"
          src={country.flags.svg}
          alt={`${country.name} flag`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "5px 5px 0px 0px",
            boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.03)",
          }}
        />
      </div>
      <div
        className={`flex flex-col pt-6 pb-12 px-6 gap-3 h-[190px] ${
          mode === "dark" ? "text-[white]" : "text-[#111517]"
        }`}
      >
        <h2 className=" font-nunito-sans pb-4 font-extrabold text-xl leading-[26px]">
          {country.name}
        </h2>
        <div className="flex gap-1">
          <span className="font-nunito-sans font-semibold text-base leading-[16px]">
            Population:
          </span>
          <span className="font-nunito-sans font-normal text-base leading-[16px]">
            {country.population}
          </span>
        </div>
        <div className="flex gap-1">
          <span className="font-nunito-sans font-semibold text-base leading-[16px]">
            Region:
          </span>
          <span className="font-nunito-sans font-normal text-base leading-[16px]">
            {country.region}
          </span>
        </div>
        <div className="flex gap-1">
          <span className="font-nunito-sans font-semibold text-base leading-[16px]">
            Capital:
          </span>
          <span className="font-nunito-sans font-normal text-base leading-[16px]">
            {country.capital}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
