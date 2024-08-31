import React, { useState, ChangeEvent } from "react";
import "@styles/Components/PageBody.css";
import "@styles/Authentication/Login.css";
import Textbox from "@components/TextBox/TextBox";
import PageBody from "@components/Pages/PageBody";
import { Formik, Form, ErrorMessage } from "formik";
import useAuth from "../../../composables/useAuth";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

interface LoginFormValues {
  loginName: string;
  password: string;
  rememberMe: boolean;
}

const Login: React.FC = () => {
  const { isAuthenticated, toggleAuth } = useAuth();
  const navigate = useNavigate();

  const imgBg = "/assets/images/sign-up.png";
  const corsaLogo = "/assets/images/corsa-logo-transparent.png";

  const [inputValue, setInputValue] = useState<LoginFormValues>({
    loginName: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    setInputValue((prevValue) => ({
      ...prevValue,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (values: LoginFormValues) => {
    setInputValue(values);
    toggleAuth();
    if (isAuthenticated) {
      navigate("/dashboard");
      window.location.reload();
    }
  };

  // schema for validation
  const SignupSchema = Yup.object().shape({
    loginName: Yup.string().min(1, "Field cannot be empty"),
    password: Yup.string().min(1, "Field cannot be empty"),
  });

  return (
    <main>
      <PageBody pageBgImg={imgBg}>
        <div className="container login-container">
          <Formik
            initialValues={inputValue}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="login-content-container">
                <div className="login-content-field-container">
                  <div className="login-content-textbox-container">
                    <h1>
                      <img src={corsaLogo} alt="Corsa Logo" />
                    </h1>
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
                          checked={inputValue.rememberMe}
                          onChange={handleInputChange}
                        />
                        Remember Me
                      </p>
                    </label>
                    <button className="login-button" type="submit">
                      Login
                    </button>
                    <div className="login-content-link">
                      <p>
                        Don't have an account?
                        <a href="/sign-up">
                          <b> Sign up now</b>
                        </a>
                      </p>
                      <p>
                        Forgot Password?
                        <a href="/sign-up">
                          <b> Click Here!</b>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </PageBody>
    </main>
  );
};

export default Login;
