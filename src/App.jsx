import "./App.css";
import CountryInfo from "./components/CountryInfo";
import CountriesData from "./data.json";

function App() {
  const Countries = CountriesData;

  return (
    <>
      {Countries.map((country, index) => (
        <CountryInfo country={country} key={index} />
      ))}
    </>
  );
}

export default App;
