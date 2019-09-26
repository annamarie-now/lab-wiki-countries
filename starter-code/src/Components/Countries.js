import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";
const myCountries = countries;

const Countries = () => {
  return (
    <div>
      {myCountries.map((eachCountry, index) => {
        return (
          <div className="container">
            <Link
              className="row"
              key={eachCountry.cca3}
              to={`/Countries/${eachCountry.cca3}`}
            >
              {eachCountry.name.common}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export { Countries, myCountries };
