import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./VerificationProcess.css";

interface VerificationProcessProps {
  onChange: (data: VerificationProcessFormValues) => void;
}

interface VerificationProcessFormValues {
  selectedID: string;
  frontFile: File | null;
  backFile: File | null;
  isInfoCorrect: boolean;
}

const VerificationProcess: React.FC<VerificationProcessProps> = ({
  onChange,
}) => {
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
    onSubmit: () => {
      // No need to submit separately as "Submit All" will handle it
    },
  });

  useEffect(() => {
    // Update parent state whenever formik values change
    onChange(formik.values);
  }, [formik.values, onChange]);

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
            <p>International Passport</p>
          </div>
          <div
            className={`id-type ${
              formik.values.selectedID === "national-id" ? "selected" : ""
            }`}
            onClick={() => handleIDSelection("national-id")}
          >
            <p>National ID</p>
          </div>
          <div
            className={`id-type ${
              formik.values.selectedID === "driver-id" ? "selected" : ""
            }`}
            onClick={() => handleIDSelection("driver-id")}
          >
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
              checked={formik.values.isInfoCorrect}
              onChange={(e) => {
                const checked = e.target.checked;
                formik.setFieldValue("isInfoCorrect", checked);
              }}
            />
            All The Information I Have Entered Is Correct.
          </label>
        </div>
      </div>
    </div>
  );
};

export default VerificationProcess;
