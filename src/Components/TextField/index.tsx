import { Controller, Control, RegisterOptions } from "react-hook-form";
import { TextField as MTextField, TextFieldVariants } from "@mui/material";

export interface ITextFieldProps {
  fieldName: string;
  control: Control<any, any>;
  label?: string;
  defaultValue?: string;
  variant?: TextFieldVariants;
  rules?: Omit<
    RegisterOptions<any, any>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

export default function TextField({
  control,
  fieldName,
  label = "",
  variant = "standard",
  rules,
  defaultValue = "",
}: ITextFieldProps) {
  return (
    <Controller
      defaultValue={defaultValue}
      rules={rules}
      name={fieldName}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <MTextField
            label={label}
            variant={variant}
            value={value}
            onChange={onChange}
          />
        );
      }}
    />
  );
}
