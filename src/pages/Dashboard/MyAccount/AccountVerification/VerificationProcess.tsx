import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./VerificationProcess.css";

interface VerificationProcessProps {
  onSubmit: (data: VerificationProcessFormValues) => void;
}

interface VerificationProcessFormValues {
  selectedID: string;
  frontFile: File | null;
  backFile: File | null;
  isInfoCorrect: boolean;
}

const VerificationProcess: React.FC<VerificationProcessProps> = ({
  onSubmit,
}) => {
  const [isInfoCorrect, setIsInfoCorrect] = useState(false);

  const validationSchema = Yup.object({
    selectedID: Yup.string().required("ID type is required"),
    frontFile: Yup.mixed().required("Front side of ID is required"),
    backFile: Yup.mixed().required("Back side of ID is required"),
  });

  const formik = useFormik<VerificationProcessFormValues>({
    initialValues: {
      selectedID: "",
      frontFile: null,
      backFile: null,
      isInfoCorrect: false,
    },
    validationSchema,
    onSubmit: (values) => {
      const combinedData = {
        ...values,
        isInfoCorrect,
      };

      if (!isInfoCorrect) {
        alert("Please confirm that all the information is correct.");
        return;
      }

      onSubmit(combinedData); // Pass verification details to the parent component
    },
  });

  const handleIDSelection = (idType: string) => {
    formik.setFieldValue("selectedID", idType);
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    side: "front" | "back"
  ) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (side === "front") {
      formik.setFieldValue("frontFile", file);
    } else {
      formik.setFieldValue("backFile", file);
    }
  };

  return (
    <div className="verification-process">
      <div className="document-verification">
        <h2>Document Verification</h2>
        <p>
          Please complete the process below to verify your proof of identity.
        </p>
        <p>
          As part of our verification process, you will need to take a photo of
          your identity document and a photo of your face (selfie).
        </p>
      </div>
      <div className="start-verification">
        <h2>Start Verification</h2>
        <p>
          This process is designed to verify your identity and protect you from
          identity theft.
        </p>
        <p>Please have your ID ready and complete the steps below:</p>
        <div className="id-types">
          <div
            className={`id-type ${
              formik.values.selectedID === "passport" ? "selected" : ""
            }`}
            onClick={() => handleIDSelection("passport")}
          >
            <img src="/icons/passport-icon.png" alt="International Passport" />
            <p>International Passport</p>
          </div>
          <div
            className={`id-type ${
              formik.values.selectedID === "national-id" ? "selected" : ""
            }`}
            onClick={() => handleIDSelection("national-id")}
          >
            <img src="/icons/national-id-icon.png" alt="National ID" />
            <p>National ID</p>
          </div>
          <div
            className={`id-type ${
              formik.values.selectedID === "driver-id" ? "selected" : ""
            }`}
            onClick={() => handleIDSelection("driver-id")}
          >
            <img src="/icons/driver-id-icon.png" alt="Driver ID" />
            <p>Driver ID</p>
          </div>
        </div>
        <div className="verification-instructions">
          <p>
            To avoid delays when verifying your account, please make sure your
            document meets the criteria below:
          </p>
          <ul>
            <li>Chosen credential must not have expired.</li>
            <li>Document should be in good condition and clearly visible.</li>
            <li>Make sure that there is no light glare on the document.</li>
          </ul>
        </div>

        <div className="document-upload">
          <label>Upload Front Side</label>
          <input type="file" onChange={(e) => handleFileChange(e, "front")} />
          {formik.touched.frontFile && formik.errors.frontFile ? (
            <p className="error">{formik.errors.frontFile}</p>
          ) : null}
          <label>Upload Back Side</label>
          <input type="file" onChange={(e) => handleFileChange(e, "back")} />
          {formik.touched.backFile && formik.errors.backFile ? (
            <p className="error">{formik.errors.backFile}</p>
          ) : null}
        </div>

        <div className="confirmation">
          <label>
            <input
              type="checkbox"
              checked={isInfoCorrect}
              onChange={(e) => {
                setIsInfoCorrect(e.target.checked);
                formik.setFieldValue("isInfoCorrect", e.target.checked);
              }}
            />
            All The Information I Have Entered Is Correct.
          </label>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default VerificationProcess;
