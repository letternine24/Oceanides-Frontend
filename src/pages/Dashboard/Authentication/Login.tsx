import React, { useState, ChangeEvent, useEffect } from "react";
import "@styles/Components/PageBody.css";
import "@styles/Authentication/Login.css";
import Textbox from "@components/TextBox/TextBox";
import PageBody from "@components/Pages/PageBody";
import { Formik, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useLogin } from "@composables/user/useLogin";
import CryptoJS from "crypto-js";
import { useAuthStore } from "@/store/useAuthStore";

interface LoginFormValues {
  loginName: string;
  password: string;
  rememberMe: boolean;
}

const Login: React.FC = () => {
  const { login: authenticate } = useAuthStore();
  const { login, loading, error, data } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.data) {
      navigate("/dashboard");
    }
  }, [data]);

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

  const handleSubmit = async (values: LoginFormValues) => {
    try {
      const hashedPassword = CryptoJS.MD5(values.password).toString();

      const loginRequest = {
        email: values.loginName,
        password: hashedPassword,
        companyId: 2,
        loginMode: 2,
      };

      const response = await login(loginRequest);

      if (response != null) {
        authenticate();
      }
    } catch (e) {
      console.error("Error Logging in", e);
    }
  };

  const SignupSchema = Yup.object().shape({
    loginName: Yup.string().min(1, "Field cannot be empty"),
    password: Yup.string().min(1, "Field cannot be empty"),
  });

  return (
    <main className="bg-light">
      <PageBody pageBgImg={imgBg}>
        <div className="container login-container d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="login-content-field-container">
              <Formik
                initialValues={inputValue}
                validationSchema={SignupSchema}
                onSubmit={handleSubmit}
                enableReinitialize
              >
                {({ values }) => (
                  <Form className="login-content-container">
                    <div className="login-content-textbox-container">
                      <h1 className="text-center">
                        <img
                          src={corsaLogo}
                          alt="Corsa Logo"
                          className="img-fluid"
                        />
                      </h1>
                      <div className="login-content-textbox">
                        <Textbox
                          value={values.loginName}
                          labelName="Username/Email"
                          fieldName="loginName"
                          fieldType="text"
                          onChange={handleInputChange}
                          required="required"
                        />
                        <ErrorMessage
                          name="loginName"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="login-content-textbox">
                        <Textbox
                          value={values.password}
                          labelName="Password"
                          fieldName="password"
                          fieldType="password"
                          onChange={handleInputChange}
                          required="required"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <label className="form-check mb-3">
                        <input
                          type="checkbox"
                          name="rememberMe"
                          checked={values.rememberMe}
                          onChange={handleInputChange}
                          className="form-check-input"
                        />
                        Remember Me
                      </label>
                      <button
                        className="btn w-100 login-button"
                        type="submit"
                        style={{
                          backgroundColor: "var(--corsa-dashboard-yellow)",
                          color: "darkblue",
                        }}
                        disabled={loading}
                      >
                        {loading ? "Logging in..." : "Login"}
                      </button>
                      {error && (
                        <p className="text-danger">
                          Login failed. Please try again.
                        </p>
                      )}
                      <div className="text-center mt-3 login-content-link">
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
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </PageBody>
    </main>
  );
};

export default Login;
