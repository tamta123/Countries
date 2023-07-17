import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, CountryCard } from "./views";
import Header from "./components/Header";
import { useState } from "react";
import CountriesData from "./data.json";

function App() {
  const [mode, setMode] = useState("light");
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCountries = CountriesData.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const toggleDarkMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <>
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
            />
          }
        />
        <Route
          path="/country/:countryCode" // Change the parameter name to countryCode
          element={<CountryCard countries={CountriesData} />}
        />
      </Routes>
    </>
  );
}

export default App;
