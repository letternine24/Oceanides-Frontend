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
        setFormValues(values);
    }

    // schema for validation
    const SignupSchema = Yup.object().shape({
        affiliateCode: Yup.string()
            .min(2, 'Affiliate Code is too Short!')
            .max(50, 'Affiliate Code is too Long!')
            .required('Affiliate Code is Required'),
        Username: Yup.string()
            .min(2, 'Username is too Short!')
            .max(20, 'Username is too Long!')
            .required('Username is Required'),
        Password: Yup.string()
            .min(2, 'Password is too short!')
            .max(20, 'Password is too Long!')
            .required('Password is Required'),
        City: Yup.string()
            .required('City is Required'),
        MobileNumber: Yup.string()
            .matches(mobilenumberRegEx, 'Phone number is not valid')
            .required('Mobile Number is Required'),
        FullName: Yup.string()
            .min(2, 'FullName is too Short!')
            .max(100, 'FullName is too Long!')
            .required('FullName Code is Required'),
        Email: Yup.string().email('Invalid email').required('Required'),
        ConfirmPassword: Yup.string()
            .oneOf([Yup.ref("Password"), null], "Password must match")
            .required('Field cannot be empty!'),
        Country: Yup.string()
            .min(2, 'Country is too Short!')
            .max(100, 'Country is too Long!')
            .required('Country is Required'),
        Nationality: Yup.string()
            .min(2, 'Nationality is too Short!')
            .max(100, 'Nationality is too Long!')
            .required('Nationality is Required'),
        ResponsibilityCheckbox: Yup.boolean()
            .oneOf([true], 'You must accept the terms and conditions')
            .required('Required'),
        AwareCheckbox: Yup.boolean()
            .oneOf([true], 'You must accept the terms and conditions')
            .required('Required')
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

                                            <div className="content-spacing">
                                                <Textbox value={inputValue.affiliateCode} fieldName='affiliateCode' onChange={handleInputChange} />
                                                <ErrorMessage name="Affiliate Code" component="div" />
                                            </div>

                                            <div className="content-spacing">
                                                <Textbox value={inputValue.Username} fieldName='Username' onChange={handleInputChange} />
                                                <ErrorMessage name="Username" component="div" />
                                            </div>
                                            
                                            <div className="content-spacing">
                                                <Textbox value={inputValue.Password} fieldName='Password' onChange={handleInputChange} />
                                                <ErrorMessage name="Password" component="div" />
                                            </div>

                                            <div className="content-spacing">
                                                <Textbox value={inputValue.City} fieldName='City' onChange={handleInputChange} />
                                                <ErrorMessage name="City" component="div" />
                                            </div>

                                            <div className="content-spacing">
                                                <Textbox value={inputValue.MobileNumber} fieldName='Mobile Number' onChange={handleInputChange} />
                                                <ErrorMessage name="Mobile Number" component="div" />
                                            </div>
                                            
                                        </div>

                                        <div className='flex-placeholder'></div>

                                        <div className="create-account-content-left">

                                            <div className="content-spacing">
                                                <Textbox value={inputValue.FullName} fieldName='Full Name' onChange={handleInputChange} />
                                                <ErrorMessage name="Full Name" component="div" />
                                            </div>

                                            <div className="content-spacing">
                                                <Textbox value={inputValue.Email} fieldName='Email' onChange={handleInputChange} />
                                                <ErrorMessage name="Email" component="div" />
                                            </div>
                                            
                                            <div className="content-spacing">
                                                <Textbox value={inputValue.ConfirmPassword} fieldName='Confirm Password' onChange={handleInputChange} />
                                                <ErrorMessage name="Confirm Password" component="div" />
                                            </div>

                                            <div className="content-spacing">
                                                <Textbox value={inputValue.Country} fieldName='Country' onChange={handleInputChange} />
                                                <ErrorMessage name="Country" component="div" />
                                            </div>

                                            <div className="content-spacing">
                                                <Textbox value={inputValue.Nationality} fieldName='Nationality' onChange={handleInputChange} />
                                                <ErrorMessage name="Nationality" component="div" />
                                            </div>
                                            
                                        </div>

                                    </div>

                                    <label>
                                        <p>
                                            <input 
                                                type="checkbox" 
                                                name={inputValue.ResponsibilityCheckbox} 
                                                checked ={inputValue.ResponsibilityCheckbox} 
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
                                                name={inputValue.ResponsibilityCheckbox} 
                                                checked ={inputValue.ResponsibilityCheckbox} 
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