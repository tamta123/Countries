import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, CountryCard } from "./views";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [mode, setMode] = useState("light");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: " + error);
      });
  }, []);

  const filteredCountries = countries.filter((country) => {
    if (typeof country.name.common === "string") {
      console.log(country.name.common);
      return country.name.common
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    }
    // Handle the case where country.name.common is not a string
    return false;
  });

  const filterCountriesByRegion = (region) => {
    // console.log(country.region);
    if (region === "all") {
      return countries;
    }
    return countries.filter((country) => country.region === region);
  };

  const toggleDarkMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // console.log(countries);

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
              countries={countries}
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
          path="/country/:countryCode"
          element={<CountryCard countries={countries} mode={mode} />}
        />
      </Routes>
    </div>
  );
}

export default App;
