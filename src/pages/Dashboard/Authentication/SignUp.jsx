import React, { useState } from 'react';
import "@styles/Components/PageBody.css";
import '@styles/Authentication/SignUp.css';
import PageBody from "@components/Pages/PageBody";
import Textbox from '@components/TextBox/TextBox.jsx';

const SignUp = () => {

    const imgBg = "/assets/images/sign-up.png";

    const [inputValue, setInputValue] = useState({
        AffiliateCode: '',
        Username: '',
        Password: '',
        City: '',
        MobileNumber: '',
        FullName: '',
        Email: '',
        ConfirmPassword: ''
        
    });

    const handleFirstName = (event) => {
        console.log(event);
        const {name, value} = event.target;
        
        setInputValue(prevValue => 
        ({
            ...prevValue,
            [name]: value
        }));

        console.log(inputValue);
      };

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

                            <div className="create-account-container" >
                                
                                <div className="create-account-content-left">

                                    <div className="textbox-spacing">
                                        <p> 
                                            <span className="required-marker">*</span>
                                            Affiliate Code
                                        </p>
                                        <Textbox value={inputValue.firstName} fieldName='firstName' onChange={handleFirstName} />
                                    </div>

                                    <div className="textbox-spacing">
                                        <p> 
                                            <span className="required-marker">*</span>
                                            Affiliate Code
                                        </p>
                                        <Textbox value={inputValue.lastname} fieldName='lastname' onChange={handleFirstName} />
                                    </div>
                                    
                                    
                                    {/* <div className="textbox-spacing">
                                        <p> 
                                            <span className="required-marker">*</span>
                                            Username
                                        </p>
                                        <Textbox  fieldName='username'/>
                                    </div> */}
                                    
                                    {/* <div className="textbox-spacing">
                                        <p> 
                                            <span className="required-marker">*</span>
                                            Password
                                        </p>
                                        <Textbox  id='password'  regexType='5' isRequired='true'/>
                                    </div>
                                    
                                    <div className="textbox-spacing">
                                        <p> 
                                            <span className="required-marker">*</span>
                                            City
                                        </p>
                                        <Textbox  id='city' regexType='2' isRequired='true'/>
                                    </div>
                                    
                                    <div className="textbox-spacing">
                                        <p> 
                                            <span className="required-marker">*</span>
                                            Mobile Number
                                        </p>
                                        <Textbox  id='mobile-number' regexType='3' isRequired='true'/>
                                    </div>
                                </div>

                                <div className="create-account-content-left">

                                    <div className="textbox-spacing">
                                        <p> 
                                            <span className="required-marker">*</span>
                                            Full Name
                                        </p>
                                        <Textbox  id='full-name' regexType='2' isRequired='true'/>
                                    </div>

                                    <div className="textbox-spacing">
                                        <p> 
                                            <span className="required-marker">*</span>
                                            Email 
                                        </p>
                                        <Textbox  id='email' regexType='4' isRequired='true'/>
                                    </div>
                                    
                                    <div className="textbox-spacing">
                                        <p> 
                                            <span className="required-marker">*</span>
                                            Confirm Password
                                        </p>
                                        <Textbox  id='confirm-password' regexType='5' isRequired='true'/>
                                    </div>
                                    
                                    <div className="textbox-spacing">
                                        <p> 
                                            <span className="required-marker">*</span>
                                            Country
                                        </p>
                                        <Textbox  id='country' regexType='2' isRequired='true'/>
                                    </div>
                                    
                                    <div className="textbox-spacing">
                                        <p> 
                                            <span className="required-marker">*</span>
                                            Nationality
                                        </p>
                                        <Textbox  id='nationality' regexType='2' isRequired='true'/>
                                    </div> */}
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>

            </PageBody>
    
          </main>
        </>
      );
}

export default SignUp;