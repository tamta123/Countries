import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, CountryCard } from "./views";
import Header from "./components/Header";
import { useState } from "react";
import CountriesData from "./data.json";

function App() {
  const [mode, setMode] = useState("light");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const filteredCountries = CountriesData.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filterCountriesByRegion = (countries, region) => {
    if (region === "all") {
      return countries;
    }
    return countries.filter((country) => country.region === region);
  };

  const toggleDarkMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`h-[100vh] ${
        mode === "dark" ? "bg-[#202C36]" : "bg-[#FAFAFA]"
      }`}
    >
      <Header mode={mode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              mode={mode}
              searchTerm={searchTerm}
              filteredCountries={filteredCountries}
              setSearchTerm={setSearchTerm}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
              filterCountriesByRegion={filterCountriesByRegion}
            />
          }
        />
        <Route
          path="/country/:countryCode" // Change the parameter name to countryCode
          element={<CountryCard countries={CountriesData} mode={mode} />}
        />
      </Routes>
    </div>
  );
}

export default App;
