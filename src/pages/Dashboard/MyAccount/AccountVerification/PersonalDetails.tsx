import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./PersonalDetails.css";

interface PersonalDetailsProps {
  onSubmit: (values: PersonalDetailsFormValues) => void;
}

interface PersonalDetailsFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dob: string;
  addressLine: string;
  city: string;
  state: string;
  nationality: string;
  postalCode: string;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    dob: Yup.date().required("Date of birth is required").nullable(),
    addressLine: Yup.string().required("Address line is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    nationality: Yup.string().required("Nationality is required"),
    postalCode: Yup.string().required("Postal code is required"),
  });

  const formik = useFormik<PersonalDetailsFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      dob: "",
      addressLine: "",
      city: "",
      state: "",
      nationality: "",
      postalCode: "",
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values); // Pass personal details to the parent component
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
            <div className="form-column">
              <input
                type="text"
                name="addressLine"
                value={formik.values.addressLine}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Address Line"
                className="input-field"
              />
              {formik.touched.addressLine && formik.errors.addressLine ? (
                <p className="error">{formik.errors.addressLine}</p>
              ) : null}
              <input
                type="text"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="City"
                className="input-field"
              />
              {formik.touched.city && formik.errors.city ? (
                <p className="error">{formik.errors.city}</p>
              ) : null}
              <input
                type="text"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="State"
                className="input-field"
              />
              {formik.touched.state && formik.errors.state ? (
                <p className="error">{formik.errors.state}</p>
              ) : null}
              <input
                type="text"
                name="nationality"
                value={formik.values.nationality}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Nationality"
                className="input-field"
              />
              {formik.touched.nationality && formik.errors.nationality ? (
                <p className="error">{formik.errors.nationality}</p>
              ) : null}
              <input
                type="text"
                name="postalCode"
                value={formik.values.postalCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Postal Code"
                className="input-field"
              />
              {formik.touched.postalCode && formik.errors.postalCode ? (
                <p className="error">{formik.errors.postalCode}</p>
              ) : null}
            </div>
          </div>
          <button type="submit" className="hidden-button" />
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
