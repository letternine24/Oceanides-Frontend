import React, { useState, ChangeEvent } from "react";
import "@styles/Components/PageBody.css";
import "@styles/Authentication/SignUp.css";
import PageBody from "@components/Pages/PageBody";
import Textbox from "@components/TextBox/TextBox";
import CountrySelectionForm from "@components/TextBox/CountrySelectionForm";
import MobileNumberWithCountryCodeTextbox from "@components/TextBox/MobileNumberWithCountryCodeTextBox";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useCreateClient } from "@composables/user/useCreateClient";
import { ICreateClient } from "@interface/user/ICreateClient";

interface SignUpFormValues {
  affiliateCode: string;
  username: string;
  password: string;
  city: string;
  mobileNumber: string;
  fullName: string;
  email: string;
  confirmPassword: string;
  countryId: number;
  nationality: string;
  responsibilityCheckbox: boolean;
  awareCheckbox: boolean;
}

const SignUp: React.FC = () => {
  const imgBg = "/assets/images/sign-up.png";
  const registerIC = "/assets/icons/register-icon.png";

  const { loading, error, createClient } = useCreateClient(); // Use your create client hook

  const [inputValue, setInputValue] = useState<SignUpFormValues>({
    affiliateCode: "",
    username: "",
    password: "",
    city: "",
    mobileNumber: "",
    fullName: "",
    email: "",
    confirmPassword: "",
    countryId: 0,
    nationality: "",
    responsibilityCheckbox: false,
    awareCheckbox: false,
  });

  const [countryCode, setCountryCode] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    setInputValue((prevValue) => ({
      ...prevValue,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCountryChange = (selectedCountry: number, selectedCountryCode: string) => {
    setInputValue((prevValue) => ({
      ...prevValue,
      countryId: selectedCountry,
    }));
    setCountryCode(selectedCountryCode);
  };

  const handleMobileNumberChange = (mobileNumber: string) => {
    setInputValue((prevValue) => ({
      ...prevValue,
      mobileNumber: mobileNumber,
    }));
  };

  const handleSubmit = (values: SignUpFormValues) => {
    const clientRequest: ICreateClient = {
      companyId: 1,
      fullname: values.fullName,
      username: values.username,
      email: values.email,
      contactNumber: `${countryCode}${values.mobileNumber}`,
      password: values.password,
      countryId: values.countryId,
      referralCode: values.affiliateCode,
    };

    console.log(clientRequest);

    createClient(clientRequest);
  };

  // Validation schema
  const SignupSchema = Yup.object().shape({
    affiliateCode: Yup.string()
      .min(2, "Affiliate Code is too Short!")
      .max(50, "Affiliate Code is too Long!")
      .required("Affiliate Code is Required"),
    username: Yup.string()
      .min(2, "Username is too Short!")
      .max(20, "Username is too Long!")
      .required("Username is Required"),
    password: Yup.string()
      .min(2, "Password is too short!")
      .max(20, "Password is too Long!")
      .required("Password is Required"),
    city: Yup.string().required("City is Required"),
    // mobileNumber: Yup.number().required("Mobile Number is Required"),
    fullName: Yup.string()
      .min(2, "Full Name is too Short!")
      .max(100, "Full Name is too Long!")
      .required("Full Name is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Password must match")
      .required("Field cannot be empty!"),
    countryId: Yup.number().required("Country is Required"),
    nationality: Yup.string()
      .min(2, "Nationality is too Short!")
      .max(100, "Nationality is too Long!")
      .required("Nationality is Required"),
    responsibilityCheckbox: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required("You must accept the terms and conditions"),
    awareCheckbox: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required("You must accept the terms and conditions"),
  });

  return (
    <main>
      <PageBody pageBgImg={imgBg}>
        <div className="container signup-container">
          <div className="signup-content-container">
            <div className="signup-content-left">
              <h1>Open an Account</h1>
              <p>
                <i>Just a simple step to create an account</i>
              </p>

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
                enableReinitialize
              >
                {({ values }) => (
                  <Form>
                    <div className="create-account-container content-spacing">
                      <div className="create-account-content-left">
                        <Textbox
                          value={values.affiliateCode}
                          labelName="Affiliate Code"
                          fieldName="affiliateCode"
                          fieldType="text"
                          onChange={handleInputChange}
                          required="required"
                        />
                        <ErrorMessage name="affiliateCode" component="div" />

                        <Textbox
                          value={values.username}
                          labelName="Username"
                          fieldName="username"
                          fieldType="text"
                          onChange={handleInputChange}
                          required="required"
                        />
                        <ErrorMessage name="username" component="div" />

                        <Textbox
                          value={values.password}
                          labelName="Password"
                          fieldName="password"
                          fieldType="password"
                          onChange={handleInputChange}
                          required="required"
                        />
                        <ErrorMessage name="password" component="div" />

                        <Textbox
                          value={values.city}
                          labelName="City"
                          fieldName="city"
                          fieldType="text"
                          onChange={handleInputChange}
                          required="required"
                        />
                        <ErrorMessage name="city" component="div" />

                        <MobileNumberWithCountryCodeTextbox
                          countryCode={countryCode}
                          mobileNumber={values.mobileNumber}
                          onMobileNumberChange={handleMobileNumberChange}
                        />
                        <ErrorMessage name="mobileNumber" component="div" />
                      </div>

                      <div className="create-account-content-left">
                        <Textbox
                          value={values.fullName}
                          labelName="Full Name"
                          fieldName="fullName"
                          fieldType="text"
                          onChange={handleInputChange}
                          required="required"
                        />
                        <ErrorMessage name="fullName" component="div" />

                        <Textbox
                          value={values.email}
                          labelName="Email"
                          fieldName="email"
                          fieldType="text"
                          onChange={handleInputChange}
                          required="required"
                        />
                        <ErrorMessage name="email" component="div" />

                        <Textbox
                          value={values.confirmPassword}
                          labelName="Confirm Password"
                          fieldName="confirmPassword"
                          fieldType="password"
                          onChange={handleInputChange}
                          required="required"
                        />
                        <ErrorMessage name="confirmPassword" component="div" />

                        {/* Country selection form */}
                        <CountrySelectionForm
                          labelName="Country"
                          fieldName="Country"
                          required="required"
                          selectedCountry={values.countryId}
                          onCountrySelect={handleCountryChange}
                        />
                        <ErrorMessage name="countryId" component="div" />

                        <Textbox
                          value={values.nationality}
                          labelName="Nationality"
                          fieldName="nationality"
                          fieldType="text"
                          onChange={handleInputChange}
                          required="required"
                        />
                        <ErrorMessage name="nationality" component="div" />
                      </div>
                    </div>

                    <label>
                      <p>
                        <input
                          type="checkbox"
                          name="responsibilityCheckbox"
                          checked={values.responsibilityCheckbox}
                          onChange={handleInputChange}
                        />
                        I understand and accept that as a customer, it is my
                        responsibility to review all Terms of Business, Risk
                        Disclosure, and Order Execution Policy.
                      </p>
                    </label>

                    <label>
                      <p>
                        <input
                          type="checkbox"
                          name="awareCheckbox"
                          checked={values.awareCheckbox}
                          onChange={handleInputChange}
                        />
                        I understand and accept that I must abide by the laws of
                        my local country.
                      </p>
                    </label>

                    <div className="content-spacing">
                      <button className="register-button" type="submit" disabled={loading}>
                        <img src={registerIC} alt="Register Icon" />
                        {loading ? "Registering..." : "Register"}
                      </button>
                      {error && <p>Error creating account. Please try again.</p>}
                    </div>

                    <p>
                      By continuing, you agree to the Privacy Policy and Terms
                      of Service.
                    </p>
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

export default SignUp;
