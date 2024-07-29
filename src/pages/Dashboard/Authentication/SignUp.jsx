import React, { useState } from 'react';
import "@styles/Components/PageBody.css";
import '@styles/Authentication/SignUp.css';
import PageBody from "@components/Pages/PageBody";
import Textbox from '@components/TextBox/TextBox.jsx';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {

    const imgBg = "/assets/images/sign-up.png";
    const registerIC = "/assets/icons/register-icon.png";
    const mobilenumberRegEx = 'const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/';

    // obj to pass after submit
    const [inputValue, setInputValue] = useState({
        affiliateCode: '',
        username: '',
        password: '',
        city: '',
        mobileNumber: '',
        fullName: '',
        email: '',
        confirmPassword: '',
        country: '',
        nationality: '',
        responsibilityCheckbox: false,
        awareCheckbox: false
    });

    const handleInputChange = (event) => {
        console.log(event);
        const {name, value, type, checked} = event.target;
        
        setInputValue(prevValue => 
        ({
            ...prevValue,
            [name]: type ==='checkbox' ? checked : value
        }));

        console.log(inputValue);
      };

    const handleSubmit = (values) => {
        console.log(values);
        setInputValue(values);
        // call API here
    }

    // schema for validation
    const SignupSchema = Yup.object().shape({
        affiliateCode: Yup.string()
            .min(2, 'Affiliate Code is too Short!')
            .max(50, 'Affiliate Code is too Long!')
            .required('Affiliate Code is Required'),
        username: Yup.string()
            .min(2, 'Username is too Short!')
            .max(20, 'Username is too Long!')
            .required('Username is Required'),
        password: Yup.string()
            .min(2, 'Password is too short!')
            .max(20, 'Password is too Long!')
            .required('Password is Required'),
        city: Yup.string()
            .required('City is Required'),
        mobileNumber: Yup.string()
            .matches(mobilenumberRegEx, 'Phone number is not valid')
            .required('Mobile Number is Required'),
        fullName: Yup.string()
            .min(2, 'FullName is too Short!')
            .max(100, 'FullName is too Long!')
            .required('FullName Code is Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("Password"), null], "Password must match")
            .required('Field cannot be empty!'),
        country: Yup.string()
            .min(2, 'Country is too Short!')
            .max(100, 'Country is too Long!')
            .required('Country is Required'),
        nationality: Yup.string()
            .min(2, 'Nationality is too Short!')
            .max(100, 'Nationality is too Long!')
            .required('Nationality is Required'),
        responsibilityCheckbox: Yup.boolean()
            .oneOf([true], 'You must accept the terms and conditions')
            .required('You must accept the terms and conditions'),
        awareCheckbox: Yup.boolean()
            .oneOf([true], 'You must accept the terms and conditions')
            .required('You must accept the terms and conditions')
    });

    return (
        <>
          <main>
    
            <PageBody pageBgImg={imgBg}>

                <div className="container signup-container">
                    <div className="signup-content-container">
                        <div className="signup-content-left">
                            <h1>Open an Account</h1>
                            <p><i>Just a simple step to create an account</i></p>

                            <ul>
                                <li>Create a username and password</li>
                                <li>Confirm email and password</li>
                                <li>Complete the application</li>
                            </ul>
                        </div>

                        <div className="signup-content-right">

                            <h1>Create New Account</h1>

                            <Formik
                                initialValues={inputValue}
                                validationSchema={SignupSchema}
                                onSubmit={handleSubmit}
                            >
                            {({ errors, touched }) => (
                                <div>
                                    <div className="create-account-container content-spacing" >
                                        
                                        <div className="create-account-content-left">

                                            <div className="textbox-spacing">
                                                <Textbox 
                                                    value={inputValue.affiliateCode} 
                                                    labelName="Affiliate Code" 
                                                    fieldName="affiliateCode"
                                                    fieldType="text"
                                                    onChange={handleInputChange}
                                                    required="required"
                                                />
                                                <ErrorMessage name="affiliateCode" component="div" />
                                            </div>

                                            <div className="textbox-spacing">
                                                <Textbox 
                                                    value={inputValue.username} 
                                                    labelName="Username" 
                                                    fieldName="username"
                                                    fieldType="text"
                                                    onChange={handleInputChange}
                                                    required="required"
                                                />
                                                <ErrorMessage name="username" component="div" />
                                            </div>
                                            
                                            <div className="textbox-spacing">
                                                <Textbox 
                                                    value={inputValue.password} 
                                                    labelName="Password" 
                                                    fieldName="password"
                                                    fieldType="password"
                                                    onChange={handleInputChange}
                                                    required="required"
                                                />
                                                <ErrorMessage name="password" component="div" />
                                            </div>

                                            <div className="textbox-spacing">
                                                <Textbox 
                                                    value={inputValue.city} 
                                                    labelName="City" 
                                                    fieldName="city"
                                                    fieldType="text"
                                                    onChange={handleInputChange} 
                                                    required="required"
                                                />
                                                <ErrorMessage name="city" component="div" />
                                            </div>

                                            <div className="textbox-spacing">
                                                <Textbox 
                                                    value={inputValue.mobileNumber} 
                                                    labelName="Mobile number" 
                                                    fieldName="mobileNumber"
                                                    fieldType="text"
                                                    onChange={handleInputChange} 
                                                    required="required"
                                                />
                                                <ErrorMessage name="mobileNumber" component="div" />
                                            </div>
                                        </div>

                                        <div className='flex-placeholder'></div>

                                        <div className="create-account-content-left">

                                            <div className="textbox-spacing">
                                                <Textbox 
                                                    value={inputValue.fullName} 
                                                    labelName="Full Name" 
                                                    fieldName="fullName"
                                                    fieldType="text"
                                                    onChange={handleInputChange} 
                                                    required="required"
                                                />
                                                <ErrorMessage name="fullName" component="div" />
                                            </div>

                                            <div className="textbox-spacing">
                                                <Textbox 
                                                    value={inputValue.email} 
                                                    labelName="Email" 
                                                    fieldName="email"
                                                    fieldType="text"
                                                    onChange={handleInputChange} 
                                                    required="required"
                                                />
                                                <ErrorMessage name="email" component="div" />
                                            </div>
                                            
                                            <div className="textbox-spacing">
                                                <Textbox 
                                                    value={inputValue.confirmPassword} 
                                                    labelName="Confirm Password" 
                                                    fieldName="confirmPassword"
                                                    fieldType="password"
                                                    onChange={handleInputChange}
                                                    required="required"
                                                />
                                                <ErrorMessage name="confirmPassword" component="div" />
                                            </div>

                                            <div className="textbox-spacing">
                                                <Textbox 
                                                    value={inputValue.country} 
                                                    labelName="Country" 
                                                    fieldName="country"
                                                    fieldType="text"
                                                    onChange={handleInputChange} 
                                                    required="required"
                                                />
                                                <ErrorMessage name="country" component="div" />
                                            </div>

                                            <div className="textbox-spacing">
                                                <Textbox 
                                                    value={inputValue.nationality} 
                                                    labelName="Nationality" 
                                                    fieldName="nationality"
                                                    fieldType="text"
                                                    onChange={handleInputChange}
                                                    required="required" 
                                                />
                                                <ErrorMessage name="nationality" component="div" />
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <label>
                                        <p>
                                            <input 
                                                type="checkbox" 
                                                name="responsibilityCheckbox" 
                                                checked ={inputValue.responsibilityCheckbox} 
                                                onChange={handleInputChange}
                                            />
                                            I understand and accept that as an Corsa Future Intervest Group Ltd. customer, it is my responsibility
                                            to review all Terms of Business, Risk Disclosure, and Order Execution Policy set forth, and they can
                                            be amended from time to time without prior notice.
                                        </p>
                                    </label>

                                    <label>
                                        <p>
                                            <input 
                                                type="checkbox" 
                                                name="awareCheckbox"
                                                checked ={inputValue.awareCheckbox} 
                                                onChange={handleInputChange}
                                            />
                                            I understand and accept that when opening an Corsa Future Intervest Group Ltd. Account I need to
                                            be aware of and abide by the laws of my local country to my best endeavours.
                                        </p>
                                    </label>

                                    <div className="content-spacing">
                                        <button className="register-button" type="submit">
                                            <img src={registerIC}/>Register
                                        </button>
                                    </div>
                                    
                                    <p>By continuing, you agree to Privacy Policy and Terms of Service</p>
                                </div>
                                
                            )}
                            </Formik>
                            
                        </div>
                    </div>
                </div>

            </PageBody>
    
          </main>
        </>
    );
}

export default SignUp;