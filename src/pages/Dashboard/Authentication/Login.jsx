import React, { useState } from 'react';
import "@styles/Components/PageBody.css";
import '@styles/Authentication/Login.css';
import PageBody from "@components/Pages/PageBody";
import Textbox from '@components/TextBox/TextBox.jsx';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {

    const imgBg = "/assets/images/sign-up.png";
    const corsaLogo = "/assets/images/corsa-logo-transparent.png";

    // obj to pass after submit
    const [inputValue, setInputValue] = useState({
        loginName: '',
        password: '',
        rememberMe: false
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
        loginName: Yup.string()
            .min(1, 'Field cannot be empty'),
        password: Yup.string()
            .min(1, 'Field cannot be empty')
    });

    return (
        <>
          <main>
    
            <PageBody pageBgImg={imgBg}>

                <div className="container login-container">
                    
                    <Formik
                        initialValues={inputValue}
                        validationSchema={SignupSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <div className="login-content-container">
                                <div className="login-content-field-container">
                                    <div className="login-content-textbox-container">

                                        <h1><img src={corsaLogo} /></h1>

                                        <div className="login-content-textbox">
                                            <Textbox 
                                                value={inputValue.loginName} 
                                                labelName="Username/Email"
                                                fieldName="loginName"
                                                fieldType="text"
                                                onChange={handleInputChange} 
                                                required="required"
                                            />
                                            <ErrorMessage name="loginName" component="div" />
                                        </div>

                                        <div className="login-content-textbox">
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
                                        
                                        <label>
                                            <p>
                                                <input 
                                                    type="checkbox" 
                                                    name="rememberMe"
                                                    checked ={inputValue.rememberMe} 
                                                    onChange={handleInputChange}
                                                />
                                                Remember Me
                                            </p>
                                        </label>

                                        <button className="login-button" type="submit">
                                            Login
                                        </button>
                                        
                                        <div className="login-content-link">
                                            <p>Dont have an account?
                                                <a href='/sign-up'>
                                                    <b> Sign up now</b>
                                                </a>
                                            </p>

                                            <p>Forgot Password?
                                                <a href='/sign-up'>
                                                    <b> Click Here!</b>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Formik>
                </div>

            </PageBody>
    
          </main>
        </>
    );
}

export default Login;