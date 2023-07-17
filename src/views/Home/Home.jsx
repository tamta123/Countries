import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import CountryInfo from "./CountryInfo";

function Home({ mode, filteredCountries, searchTerm, setSearchTerm }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-10 ${
        mode === "dark" ? "bg-[#202C36]" : "bg-[#FAFAFA]"
      }`}
    >
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        id="country"
        placeholder="Search for a country…"
        className={`  ${mode === "dark" ? " bg-[#2B3844]" : "bg-[#FFFFFF]"} ${
          mode === "dark" ? "text-dark-mode-font" : " text-gray-900"
        } `}
      />
      {filteredCountries.map((country) => (
        <div
          key={country.alpha3Code} // Assuming 'alpha3Code' is a unique identifier for the country
          className={`w-[80%] flex flex-col items-center justify-center ${
            mode === "dark" ? "bg-[#2B3844]" : "bg-[#FFFFFF]"
          }`}
        >
          <Link to={`/country/${country.alpha3Code}`}>
            <CountryInfo country={country} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
