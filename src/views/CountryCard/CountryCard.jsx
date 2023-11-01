import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function CountryCard({ countries, mode }) {
  const { countryCode } = useParams();
  const navigate = useNavigate();

  const country = countries.find((country) => country.cca3 === countryCode);

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
        <div>
          {mode === "dark" ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="call-made">
                <path
                  id="Shape"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z"
                  fill="white"
                />
              </g>
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="call-made">
                <path
                  id="Shape"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z"
                  fill="#111517"
                />
              </g>
            </svg>
          )}
        </div>
        Back
      </button>
      <div className="mt-[64px] w-[85%] lg:flex xl:gap-[145px] xl:justify-between xl:items-center xl:mt-[20] lg:w-[95%] lg:gap-4">
        <img
          className="rounded-[5.718px]"
          src={country.flags.png}
          alt="flag"
          style={{
            width: "100%",
            maxWidth: "700px",
            height: "auto%",
            objectFit: "cover",
            boxShadow: "0px 0px 8px 2px rgba(0, 0, 0, 0.03)",
          }}
        />
        <div
          className={`pt-[47px] xl:p-0 lg:w-[40%] ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          <h2
            className={`font-bold font-nunito-sans text-[22px] lg:text-[32px] leading-normal mb-[16px]`}
          >
            {country.name.common}
          </h2>
          <div className="lg:flex lg:item-center lg:justify-between">
            <div className="mb-[32px]">
              <div className="flex items-center gap-1">
                <div className="font-semibold font-nunito-sans text-[14px] lg:text-[16px] leading-9">
                  Native Name:
                </div>
                <div className="font-normal font-nunito-sans text-[14px] lg:text-[16px] leading-9">
                  {country.nativeName}
                </div>
              </div>
              <div className="flex items-center  gap-1">
                <div className="font-semibold font-nunito-sans text-[14px] lg:text-[16px] leading-9">
                  Population:
                </div>
                <div className="font-normal font-nunito-sans text-[14px] lg:text-[16px] leading-9">
                  {country.population.toLocaleString("en-US")}
                </div>
              </div>
              <div className="flex items-center  gap-1">
                <div className="font-semibold font-nunito-sans text-[14px] lg:text-[16px] leading-9">
                  Region:
                </div>
                <div className="font-normal font-nunito-sans text-[14px]  lg:text-[16px] leading-9">
                  {country.region}
                </div>
              </div>
              <div className="flex items-center  gap-1">
                <div className="font-semibold font-nunito-sans text-[14px] lg:text-[16px] leading-9">
                  Sub Region:
                </div>
                <div className="font-normal font-nunito-sans text-[14px] lg:text-[16px] leading-9">
                  {country.subregion}
                </div>
              </div>
              <div className="flex items-center  gap-1">
                <div className="font-semibold font-nunito-sans text-[14px] lg:text-[16px] leading-9">
                  Capital:
                </div>
                <div className="font-normal font-nunito-sans text-[14px] lg:text-[16px] leading-9">
                  {country.capital}
                </div>
              </div>
            </div>
            <div className="mb-[36px]">
              <div className="flex items-center  gap-1">
                <div className="font-semibold font-nunito-sans text-[14px] lg:text-[16px] leading-9">
                  Top Level Domain:
                </div>
                <div className="font-normal font-nunito-sans text-[14px] lg:text-[16px] leading-9">
                  {country.topLevelDomain}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold font-nunito-sans text-[14px] lg:text-[16px] leading-9">
                  Currencies:
                </span>
                {Array.isArray(country.currencies) &&
                country.currencies.length > 0 ? (
                  country.currencies.map((currency) => (
                    <div
                      className="font-normal font-nunito-sans text-[14px] lg:text-[16px] leading-9"
                      key={currency.code}
                    >
                      {currency.name}
                    </div>
                  ))
                ) : (
                  <div>No currency data available.</div>
                )}
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold font-nunito-sans text-[14px] lg:text-[16px] leading-9">
                  Languages:
                </span>
                {Array.isArray(country.languages) &&
                country.languages.length > 0 ? (
                  <span className="font-normal font-nunito-sans text-[14px] lg:text-[16px] leading-9">
                    {country.languages
                      .map((language) => language.name)
                      .join(", ")}
                  </span>
                ) : (
                  <div className="font-normal font-nunito-sans text-[14px] lg:text-[16px] leading-9">
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
            <div className="flex items-center justify-center flex-wrap gap-3 font-normal font-nunito-sans text-[12px] lg:text-[14px] leading-normal">
              {country.borders && country.borders.length > 0 ? (
                country.borders.map((borderCountryCode) => {
                  const borderCountry = countries.find(
                    (country) => country.cca3 === borderCountryCode
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
                        ? borderCountry.name.common
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
