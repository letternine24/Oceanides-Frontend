import React, { ChangeEvent } from 'react';

interface MobileNumberWithCountryCodeTextboxProps {
  countryCode: string;
  mobileNumber: string;
  onMobileNumberChange: (mobileNumber: string) => void;
}

const MobileNumberWithCountryCodeTextbox: React.FC<MobileNumberWithCountryCodeTextboxProps> = ({
  countryCode,
  mobileNumber,
  onMobileNumberChange,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onMobileNumberChange(e.target.value);
  };

  return (
    <div className="textbox-input-container-mobile">
        <label htmlFor="mobileNumber" className="textbox-label" >
        <span className="required-field">* </span>
        Mobile number:
      </label>
      <div className="mobile-number-container">
        <input
          type="text"
          value={countryCode}
          readOnly
          className="country-code-input"
        />
        <input
          type="text"
          value={mobileNumber}
          onChange={handleInputChange}
          className="mobile-number-input"
        />
    </div>
    </div>
    
  );
};

export default MobileNumberWithCountryCodeTextbox;