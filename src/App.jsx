import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, CountryCard } from "./views";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [searchCountry, setSearchCountry] = useState("");

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
              toggleDarkMode={toggleDarkMode}
              searchCountry={searchCountry}
            />
          }
        />
        <Route path="/country/:countryId" element={<CountryCard />} />
      </Routes>
    </>
  );
}

export default App;
