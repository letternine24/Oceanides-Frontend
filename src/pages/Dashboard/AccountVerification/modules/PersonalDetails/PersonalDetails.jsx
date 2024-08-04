import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./PersonalDetails.css";

const PersonalDetails = ({ nextStep }) => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    dob: Yup.date().required("Date of birth is required").nullable(),
  });

  // Set up Formik for form management and validation
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      dob: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form is valid, moving to the next step", values);
      nextStep(); // Move to the next step on successful validation
    },
  });

  return (
    <div className="personal-details">
      <div className="form-box">
        <h2 className="title">Personal Details</h2>
        <p className="subtitle">
          Your simple personal information required for identification. Please
          type carefully and fill out the form with your personal details. You
          can’t edit these details once you submit the form.
        </p>

        <form onSubmit={formik.handleSubmit}>
          <div className="form-row">
            <div className="form-column">
              <input
                type="text"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="First Name"
                className="input-field"
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <p className="error">{formik.errors.firstName}</p>
              ) : null}
              <input
                type="text"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Last Name"
                className="input-field"
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <p className="error">{formik.errors.lastName}</p>
              ) : null}
            </div>
            <div className="form-column">
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Email"
                className="input-field"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="error">{formik.errors.email}</p>
              ) : null}
              <input
                type="tel"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Phone Number"
                className="input-field"
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <p className="error">{formik.errors.phoneNumber}</p>
              ) : null}
              <input
                type="date"
                name="dob"
                value={formik.values.dob}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Date of Birth"
                className="input-field"
              />
              {formik.touched.dob && formik.errors.dob ? (
                <p className="error">{formik.errors.dob}</p>
              ) : null}
            </div>
          </div>

          <div className="button-row">
            <button type="submit" className="button">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
