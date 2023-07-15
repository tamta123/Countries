import React, { useState, useEffect } from "react";

const CountryInfo = ({ country }) => {
  //   const [countries, setCountries] = useState([]);
  //   useEffect(() => {}, []);

  return (
    <div>
      <div>
        <img src={country.flags.svg} alt={`${country.name} flag`} />
      </div>
      <h2>{country.name}</h2>
      <span>Population:{country.population}</span>
      <span>Region:{country.region}</span>
      <span>Capital:{country.capital}</span>
    </div>
  );
};

export default CountryInfo;
