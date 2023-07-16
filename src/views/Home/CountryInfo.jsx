import React, { useState, useEffect } from "react";

const CountryInfo = ({ country }) => {
  //   const [countries, setCountries] = useState([]);
  //   useEffect(() => {}, []);

  return (
    <div>
      <div>
        <img
          className="w-full h-[160px]"
          src={country.flags.svg}
          alt={`${country.name} flag`}
        />
      </div>
      <div className="flex flex-col pt-6 pb-12 px-6">
        <h2 className="pb-4">{country.name}</h2>
        <span>Population:{country.population}</span>
        <span>Region:{country.region}</span>
        <span>Capital:{country.capital}</span>
      </div>
    </div>
  );
};

export default CountryInfo;
