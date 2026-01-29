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
}) {
  return (
    <TextField
      type={type}
      label={label}
      required={required}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      slotProps={slotProps}
    />
  );
}

export default CustomTextField;
