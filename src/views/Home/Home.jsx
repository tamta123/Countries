import React from "react";
import { Link } from "react-router-dom";
import CountryInfo from "./CountryInfo";
import Select from "react-select";

function Home({
  mode,
  filteredCountries,
  searchTerm,
  setSearchTerm,
  selectedRegion,
  setSelectedRegion,
}) {
  const handleRegionChange = (selectedOption) => {
    setSelectedRegion(selectedOption.value);
  };

  const regionMappings = {
    Africa: ["Africa"],
    Americas: [
      "North America",
      "South America",
      "Central America",
      "Caribbean",
    ],
    Asia: ["Asia", "Middle East"],
    Europe: ["Europe"],
    Oceania: ["Oceania"],
  };

  const countriesByRegion = filteredCountries.filter((country) => {
    if (selectedRegion === "all") {
      return true;
    }

    const countryRegion = country.continents[0];
    return regionMappings[selectedRegion].includes(countryRegion);
  });

  const regionOptions = [
    { value: "all", label: "All" },
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "Americas" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  return (
    <div
      className={`flex flex-col items-center justify-center gap-10 ${
        mode === "dark" ? "bg-[#202C36]" : "bg-[#FAFAFA]"
      }`}
    >
      <div className="flex flex-col gap-10 w-[74%] lg:w-full items-start justify-start mt-6 lg:flex-row lg:justify-between lg:px-20">
        <div
          className={`flex items-center justify-start gap-6 pl-8 h-12 rounded-[5px] w-full lg:w-[35%] ${
            mode === "dark"
              ? "text-[white] bg-[#2B3844]"
              : "text-[#111517] bg-[#FFFFFF]"
          }`}
          style={{
            boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="search">
              <path
                id="Shape"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.1111 9.77778H10.4L10.1333 9.51111C11.0222 8.53333 11.5556 7.2 11.5556 5.77778C11.5556 2.57778 8.97778 0 5.77778 0C2.57778 0 0 2.57778 0 5.77778C0 8.97778 2.57778 11.5556 5.77778 11.5556C7.2 11.5556 8.53333 11.0222 9.51111 10.1333L9.77778 10.4V11.1111L14.2222 15.5556L15.5556 14.2222L11.1111 9.77778ZM5.77778 9.77778C3.55556 9.77778 1.77778 8 1.77778 5.77778C1.77778 3.55556 3.55556 1.77778 5.77778 1.77778C8 1.77778 9.77778 3.55556 9.77778 5.77778C9.77778 8 8 9.77778 5.77778 9.77778Z"
                fill="#B2B2B2"
              />
            </g>
          </svg>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            id="country"
            placeholder="Search for a country…"
            className={`w-[90%] fill-none outline-none cursor-pointer ${
              mode === "dark" ? " bg-[#2B3844]" : "bg-[#FFFFFF]"
            } ${mode === "dark" ? "text-dark-mode-font" : " text-gray-900"} `}
          />
        </div>
        <div className="w-[60%] lg:w-[200px]">
          <Select
            options={regionOptions}
            value={regionOptions.find(
              (option) => option.value === selectedRegion
            )}
            onChange={handleRegionChange}
            styles={{
              indicatorSeparator: (provided) => ({
                ...provided,
                display: "none",
              }),
              valueContainer: (provided) => ({
                ...provided,
                width: "170px",
              }),
              control: (provided) => ({
                ...provided,
                backgroundColor: mode === "dark" ? "#2B3844" : "#FFFFFF",
                borderColor: mode === "dark" ? "#4B5563" : "#E5E7EB",
              }),
              singleValue: (provided) => ({
                ...provided,
                color: mode === "dark" ? "white" : "#red",
              }),
              menuList: (provided) => ({
                ...provided,
                backgroundColor: mode === "dark" ? "#2B3844" : "#FFFFFF",
                borderColor: mode === "dark" ? "#4B5563" : "#E5E7EB",
                borderRadius: "5px",
                boxShadow: "0px 2px 9px 0px rgba(0, 0, 0, 0.05)",
              }),
              option: (provided) => ({
                ...provided,
                color: mode === "dark" ? "white" : "#red",
                cursor: "pointer",
              }),
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6 gap-10 flex-col pr-[55px] pl-[56px] lg:px-20">
        {countriesByRegion.map((country) => (
          <div key={country.cca3}>
            <Link to={`/country/${country.cca3}`}>
              <CountryInfo country={country} mode={mode} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
