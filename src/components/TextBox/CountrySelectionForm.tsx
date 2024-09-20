import React, { ChangeEvent, useEffect } from "react";
import { useFetchCountries } from "@composables/cache/useFetchCountries";
import { ICountry } from "@interface/cache/ICountry";

interface CountrySelectionFormProps {
  selectedCountry: string;
  onCountrySelect: (selectedCountry: string) => void;
}

const CountrySelectionForm: React.FC<CountrySelectionFormProps> = ({
  selectedCountry,
  onCountrySelect,
}) => {
  const { countries, loading, error } = useFetchCountries();

  const handleCountrySelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    onCountrySelect(selectedValue);
  };

  return (
    <div className="textbox-spacing">
      {loading && <p>Loading countries...</p>}
      {error && <p>Error loading countries: {error}</p>}

      {!loading && countries && (
        <select
          id="country-dropdown"
          value={selectedCountry}
          onChange={handleCountrySelect}
          required
        >
          <option value="">Select a country</option>
          {countries.map((country: ICountry) => (
            <option key={country.countryId} value={country.countryName}>
              {country.countryName}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default CountrySelectionForm;
