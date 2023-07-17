import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function CountryCard({ countries }) {
  const { countryCode } = useParams();
  const navigate = useNavigate();

  const country = countries.find(
    (country) => country.alpha3Code === countryCode
  );

  if (!country) {
    return <div>Country not Found</div>;
  }

  const handleBack = () => {
    // Navigate back to the home page
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <div>
        <div>
          <img src={country.flag} alt="" />
        </div>
        <div>
          <h2>{country.name}</h2>
          <div>Native Name:{country.nativeName}</div>
          <div>Population:{country.population}</div>
          <div>Region:{country.region}</div>
          <div>Sub Region:{country.subregion}</div>
          <div>Capital:{country.capital}</div>
        </div>
        <div>
          <div>Top Level Domain:{country.topLevelDomain}</div>
          <div>
            <span>Currencies:</span>
            {country.currencies ? (
              country.currencies.map((currency) => (
                <div key={country.alpha3Code}>{currency.name}</div>
              ))
            ) : (
              <div>No currency data available.</div>
            )}
          </div>
          <div>
            <span>Languages:</span>
            {country.languages ? (
              country.languages.map((language) => (
                <div key={language.iso639_1}>{language.name}</div>
              ))
            ) : (
              <div>No language data available.</div>
            )}
          </div>
        </div>
        <div>
          <span>Border Countries: </span>
          <div>
            {country.borders ? (
              country.borders.map((borderCountryCode) => (
                <div key={borderCountryCode}>{borderCountryCode}</div>
              ))
            ) : (
              <div>none</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
