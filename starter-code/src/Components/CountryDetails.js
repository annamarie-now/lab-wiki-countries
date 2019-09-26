import React from "react";
import { Countries } from "./Countries";
import { myCountries } from "./Countries";

const CountryDetails = props => {
  const id = props.match.params.id;

  const foundCountry = myCountries.find(el => {
    return el.cca3 === id;
  });
  return (
    <div>
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area}
              <sup>2</sup>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
