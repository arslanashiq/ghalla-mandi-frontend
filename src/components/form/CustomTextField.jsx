import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import { Email, Lock, Password } from "@mui/icons-material";

function CustomTextField({
  label = "",
  type = "text",
  placeholder = "",
  register = null,
  required = false,
  error = false,
  helperText = "",
  slotProps = {},
  size = "small",
  color = "primary",
}) {
  return (
    <TextField
      color={color}
      type={type}
      label={label}
      size={size}
      error={error}
      required={required}
      placeholder={placeholder}
      helperText={helperText}
      slotProps={slotProps}
    />
  );
}

export default CustomTextField;
