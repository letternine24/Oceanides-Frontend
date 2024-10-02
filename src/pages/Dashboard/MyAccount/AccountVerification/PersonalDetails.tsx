import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./PersonalDetails.css";

interface PersonalDetailsProps {
  onChange: (values: PersonalDetailsFormValues) => void;
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

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ onChange }) => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^01\d-\d{7,8}$/, "Phone number must be in the format 01X-XXXXXXX or 01X-XXXXXXXX")
      .required("Phone number is required"),
    dob: Yup.date().required("Date of birth is required").nullable(),
    addressLine: Yup.string().required("Address line is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    nationality: Yup.string().required("Nationality is required"),
    postalCode: Yup.string()
      .matches(/^\d{5}$/, "Postal code must be exactly 5 digits")
      .required("Postal code is required"),
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
    onSubmit: () => {
      // No need to submit separately as "Submit All" will handle it
    },
  });

  useEffect(() => {
    onChange(formik.values);
  }, [formik.values, onChange]);

  return (
    <div className="personal-details">
      <div className="form-box">
        <h2 className="title">Personal Details</h2>
        <p className="subtitle">
          Your simple personal information required for identification. Please
          type carefully and fill out the form with your personal details. You
          can’t edit these details once you submit the form.
        </p>

        <form>
          <div className="form-row">
            <div className="form-column">
              {["firstName", "lastName", "email", "phoneNumber", "dob"].map(
                (field, index) => (
                  <div className="form-field" key={index}>
                    <input
                      type={field === "email" ? "email" : field === "dob" ? "date" : "text"}
                      name={field}
                      value={formik.values[field as keyof PersonalDetailsFormValues]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder={field.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
                      className={`input-field ${formik.touched[field as keyof PersonalDetailsFormValues] &&
                        formik.errors[field as keyof PersonalDetailsFormValues]
                        ? "error"
                        : ""
                      }`}
                    />
                    {formik.touched[field as keyof PersonalDetailsFormValues] &&
                      formik.errors[field as keyof PersonalDetailsFormValues] ? (
                      <p className="error">{formik.errors[field as keyof PersonalDetailsFormValues]}</p>
                    ) : null}
                  </div>
                )
              )}
            </div>
            <div className="form-column">
              {["addressLine", "city", "state", "nationality", "postalCode"].map(
                (field, index) => (
                  <div className="form-field" key={index}>
                    <input
                      type="text"
                      name={field}
                      value={formik.values[field as keyof PersonalDetailsFormValues]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder={field.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
                      className={`input-field ${formik.touched[field as keyof PersonalDetailsFormValues] &&
                        formik.errors[field as keyof PersonalDetailsFormValues]
                        ? "error"
                        : ""
                      }`}
                    />
                    {formik.touched[field as keyof PersonalDetailsFormValues] &&
                      formik.errors[field as keyof PersonalDetailsFormValues] ? (
                      <p className="error">{formik.errors[field as keyof PersonalDetailsFormValues]}</p>
                    ) : null}
                  </div>
                )
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
