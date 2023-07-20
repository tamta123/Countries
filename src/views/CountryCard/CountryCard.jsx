import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function CountryCard({ countries, mode }) {
  const { countryCode } = useParams();
  const navigate = useNavigate();

  const country = countries.find(
    (country) => country.alpha3Code === countryCode
  );

  if (!country) {
    return <div>Country not Found</div>;
  }

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div
      className={`flex flex-col items-center justify-center lg:items-start lg:pl-20 ${
        mode === "dark" ? "bg-[#202C36]" : "bg-[#FAFAFA]"
      }`}
    >
      <button
        className={`flex gap-2 items-center justify-center w-[104px] h-[32px] rounded-[2px] mt-10 xl:mt-20 ${
          mode === "dark"
            ? "bg-[#2B3844] text-[#FFFFFF]"
            : "bg-[#FFFFFF] text-[#111517]"
        }`}
        style={{ boxShadow: "0px 0px 7px 0px rgba(0, 0, 0, 0.29)" }}
        onClick={handleBack}
      >
        <img
          src={
            mode === "dark"
              ? "../../../public/arrow-white.svg"
              : "../../../public/arrow.svg"
          }
          alt="arrow"
        />
        Back
      </button>
      <div className="mt-[64px] w-[85%] lg:flex xl:gap-[145px] xl:justify-between xl:items-center xl:mt-[20] lg:w-[95%]">
        <div className="w-full h-[229px] xl:w-[50%] xl:h-[401px]">
          <img
            className="rounded-[5.718px]"
            src={country.flag}
            alt="flag"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              boxShadow: "0px 0px 8px 2px rgba(0, 0, 0, 0.03)",
            }}
          />
        </div>
        <div
          className={`pt-[47px] xl:p-0 lg:w-[40%] ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          <h2
            className={`font-bold font-nunito-sans text-[22px] leading-normal mb-[16px]`}
          >
            {country.name}
          </h2>
          <div className="lg:flex lg:item-center lg:justify-between">
            <div className="mb-[32px]">
              <div className="flex items-center gap-1">
                <div className="font-semibold font-nunito-sans text-[14px] leading-9">
                  Native Name:
                </div>
                <div className="font-normal font-nunito-sans text-[12px] leading-9">
                  {country.nativeName}
                </div>
              </div>
              <div className="flex items-center  gap-1">
                <div className="font-semibold font-nunito-sans text-[14px] leading-9">
                  Population:
                </div>
                <div className="font-normal font-nunito-sans text-[12px] leading-9">
                  {country.population.toLocaleString("en-US")}
                </div>
              </div>
              <div className="flex items-center  gap-1">
                <div className="font-semibold font-nunito-sans text-[14px] leading-9">
                  Region:
                </div>
                <div className="font-normal font-nunito-sans text-[12px] leading-9">
                  {country.region}
                </div>
              </div>
              <div className="flex items-center  gap-1">
                <div className="font-semibold font-nunito-sans text-[14px] leading-9">
                  Sub Region:
                </div>
                <div className="font-normal font-nunito-sans text-[12px] leading-9">
                  {country.subregion}
                </div>
              </div>
              <div className="flex items-center  gap-1">
                <div className="font-semibold font-nunito-sans text-[14px] leading-9">
                  Capital:
                </div>
                <div className="font-normal font-nunito-sans text-[12px] leading-9">
                  {country.capital}
                </div>
              </div>
            </div>
            <div className="mb-[36px]">
              <div className="flex items-center  gap-1">
                <div className="font-semibold font-nunito-sans text-[14px] leading-9">
                  Top Level Domain:
                </div>
                <div className="font-normal font-nunito-sans text-[12px] leading-9">
                  {country.topLevelDomain}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold font-nunito-sans text-[14px] leading-9">
                  Currencies:
                </span>
                {country.currencies ? (
                  country.currencies.map((currency) => (
                    <div
                      className="font-normal font-nunito-sans text-[12px] leading-9"
                      key={country.alpha3Code}
                    >
                      {currency.name}
                    </div>
                  ))
                ) : (
                  <div>No currency data available.</div>
                )}
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold font-nunito-sans text-[14px] leading-9">
                  Languages:
                </span>
                {country.languages ? (
                  <span className="font-normal font-nunito-sans text-[12px] leading-9">
                    {country.languages
                      .map((language) => language.name)
                      .join(", ")}
                  </span>
                ) : (
                  <div className="font-normal font-nunito-sans text-[12px] leading-9">
                    No language data available.
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="pb-[40px] flex flex-col gap-4 lg:flex-row xl:pb-0">
            <span className="font-semibold font-nunito-sans text-[16px] leading-[24px] xl:w-[30%]">
              Border Countries:
            </span>
            <div className="flex items-center justify-center flex-wrap gap-3 font-normal font-nunito-sans text-[12px] leading-normal">
              {country.borders && country.borders.length > 0 ? (
                country.borders.map((borderCountryCode) => {
                  const borderCountry = countries.find(
                    (countryData) =>
                      countryData.alpha3Code === borderCountryCode
                  );

                  return (
                    <div
                      className={`h-[28px] w-[96px] flex items-center justify-center text-center rounded-[2px] ${
                        mode === "dark" ? "bg-[#2B3844]" : "bg-[#FFFFFF]"
                      }`}
                      style={{
                        boxShadow:
                          mode === "dark"
                            ? "0px 0px 4px 1px rgba(17, 21, 23, 0.25)"
                            : "0px 0px 4px 1px rgba(0, 0, 0, 0.10)",
                      }}
                      key={borderCountryCode}
                    >
                      {borderCountry
                        ? borderCountry.name.includes(" ")
                          ? borderCountry.alpha3Code
                          : borderCountry.name
                        : "Country not found"}
                    </div>
                  );
                })
              ) : (
                <div>None</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
