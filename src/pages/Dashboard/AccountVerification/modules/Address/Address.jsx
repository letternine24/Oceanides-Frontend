import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Address.css"; // Import CSS file for styles

const Address = ({ nextStep, prevStep }) => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    addressLine: Yup.string().required("Address line is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    nationality: Yup.string().required("Nationality is required"),
    postalCode: Yup.string().required("Postal code is required"),
  });

  // Set up Formik for form management and validation
  const formik = useFormik({
    initialValues: {
      addressLine: "",
      city: "",
      state: "",
      nationality: "",
      postalCode: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Address form is valid, moving to the next step", values);
      nextStep(); // Move to the next step on successful validation
    },
  });

  return (
    <div className="address-form">
      <div className="form-box">
        <h2 className="title">Address Details</h2>

        <form onSubmit={formik.handleSubmit}>
          <div className="form-row">
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
            </div>
            <div className="form-column">
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

          <div className="button-row">
            <button type="button" className="button" onClick={prevStep}>
              Prev
            </button>
            <button type="submit" className="button">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Address;
