import React from "react";
import { TextField } from "@mui/material";

const CustomField = ({ text, user, setUser }) => {
  return (
    <TextField
      label={text}
      variant="outlined"
      fullWidth
      margin="normal"
      value={user}
      onChange={(e) => setUser(e.target.value)}
      type={"Contraseña" == text ? "password" : "text"}
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: "#7677ea",
          color: "#fffffd",
          borderRadius: "5px",

          "& .MuiSvgIcon-root": {
            color: "#fffffd",
          },
          "& fieldset": {
            border: "none",
          },
          "&:hover fieldset": {
            border: "none",
          },
          "&.Mui-focused fieldset": {
            border: "none",
          },

          "& input:-webkit-autofill": {
            height: "30px",
            WebkitBoxShadow: "0 0 0 100px #7677ea inset",
            WebkitTextFillColor: "#fffffd",
          },
          "& input:-webkit-autofill:hover": {
            WebkitBoxShadow: "0 0 0 100px #7677ea inset",
            WebkitTextFillColor: "#fffffd",
          },
          "& input:-webkit-autofill:focus": {
            height: "30px",
            WebkitBoxShadow: "0 0 0 100px #7677ea inset",
            WebkitTextFillColor: "#fffffd",
          },
        },
        "& .MuiInputLabel-root": {
          height: "30px",
          color: "#fffffd",
          "&.Mui-focused": {
            color: "#fffffd",
          },
        },
      }}
    />
  );
};

export default CustomField;