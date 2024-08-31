import { ChangeEvent } from "react";

export interface ITextBox {
  fieldName: string;
  labelName: string;
  fieldType: string;
  required?: "required" | "optional";
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  leftIcon?: React.ReactNode;
}
