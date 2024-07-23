// import React, { useState } from 'react';
// //import "@styles/Components/TextBox.css";

// const TextBox = ({ id, regexType, isRequired }) => {
//     const [isValid, setIsValid] = useState(true);
//     const [value, setValue] = useState();
  
//     const handleChange = (event) => {
//       const inputValue = event.target.value;

//       let finalRegex;
//       let errorMessage;
//       const alphanumericRegex = /^[a-zA-Z0-9]*$/; //1
//       const alphaRegex = /^[a-zA-Z]+$/; //2
//       const numericRegex = /^[0-9]\d*$/; //3
//       const emailRegex = /^[0-9]\d*$/; //4
//       const noRegex = /.*/; //5

//       const alphanumericErrorMsg = "Please enter only alphanumeric value";
//       const alphaErrorMsg = "Please enter a valid value";
//       const numericErrorMsg = "Please enter a valid number";
//       const emailErrorMsg = "Please enter a valid email address"

//       switch (regexType){
//         case 1:
//             finalRegex = alphanumericRegex;
//             errorMessage = alphanumericErrorMsg;
//             break;
//         case 2: 
//             finalRegex = alphaRegex;
//             errorMessage = alphaErrorMsg;
//             break;
//         case 3:
//             finalRegex = numericRegex;
//             errorMessage = numericErrorMsg;
//             break;
//         case 4:
//             finalRegex = emailRegex;
//             errorMessage = emailErrorMsg;
//             break;
//         default:
//             finalRegex = noRegex;
//             errorMessage = "";
//             break;
//       }
      
//       if (finalRegex.test(inputValue)) {
//         setIsValid(true);
//         setValue(inputValue);
//       } else {
//         setIsValid(false);
//       }
//     };
  
//     return (
//       <div>
//         <input
//           type="text"
//           value={value}
//           onChange={handleChange}
//           id={id}
//           style={{ borderColor: isValid ? 'initial' : 'red' }}
//           required = {isRequired ? 'required' : ''}
//           name= {id}
//         />
//         {!isValid && (
//           <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.2rem' }}>
//             {errorMessage}
//           </p>
//         )}
//       </div>
//     );
//   };
  
//   export default TextBox;

import React, { useState, useEffect } from 'react';

function TextBox({ fieldName, value, onChange }) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Set inputValue state based on the initial value prop
    if (value !== undefined) {
      setInputValue(value);
    }
  }, [value]);

  const handleInputChange = (event) => {
    const {value} = event.target;
    // Update local state
    setInputValue(value);
    // Notify parent component of value change (if controlled)
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div>
      <label htmlFor={fieldName}>{fieldName}:</label>
      <input
        type="text"
        id={fieldName}
        name={fieldName}
        value={value !== undefined ? value : inputValue}
        onChange={handleInputChange} 
      />
      <p>Value entered for {fieldName}: {value !== undefined ? value : inputValue}</p>
    </div>
  );
}

export default TextBox;