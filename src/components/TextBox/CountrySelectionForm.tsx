import React, { ChangeEvent, useEffect, useState } from "react";
import { useFetchCountries } from "@composables/cache/useFetchCountries";
import { ICountry } from "@interface/cache/ICountry";

interface CountrySelectionFormProps {
  selectedCountry: number;
  onCountrySelect: (selectedCountry: number, countryCode: string) => void;
  labelName: string;
  fieldName: string;
  required: string;
}

const CountrySelectionForm: React.FC<CountrySelectionFormProps> = ({
  labelName,
  fieldName,
  required = "optional",
  selectedCountry,
  onCountrySelect,
}) => {
  const { countries, loading, error } = useFetchCountries();
  const [currentCountryId, setCurrentCountryId] = useState<number>(selectedCountry);

  useEffect(() => {
    setCurrentCountryId(selectedCountry);
  }, [selectedCountry]);

  const handleCountrySelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = Number(e.target.value);

    const selectedCountryData = countries?.find(
      (country: ICountry) => country.countryId === selectedValue
    );

    // Get the country code
    const countryCode = selectedCountryData?.mobileCode || "";

    setCurrentCountryId(selectedValue);
    onCountrySelect(selectedValue, countryCode);
  };

  return (
    <div className="textbox-input-container">
      <label htmlFor={fieldName}>
        {required === "required" && <span className="required-field">* </span>}
        {labelName}:
      </label>
      {!loading && countries && (
        <select
          id="country-dropdown"
          value={currentCountryId}
          className="textbox-input-container-select"
          onChange={handleCountrySelect}
          required
        >
          <option value="">Select a country</option>
          {countries.map((country: ICountry) => (
            <option key={country.countryId} value={country.countryId}>
              {country.countryName}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default CountrySelectionForm;