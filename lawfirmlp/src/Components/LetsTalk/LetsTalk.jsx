import React from "react";
import { TextField, Button, InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const LetsTalk = () => {
  return (
    <>
      <TextField
        label="Enter to email address"
        variant="outlined"
        sx={{
          borderRadius: "43px",
          backgroundColor: "#2E2E2E",
          maxWidth: "450px",
        }}
        InputProps={{
          // startAdornment: (
          //   <InputAdornment position="start">
          //     <EmailIcon />
          //   </InputAdornment>
          // ),
          endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "43px",
                    backgroundColor: "#E3B748",
                    color : "black"
                  }}
                >
                  Let's Talk
                </Button>
              </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default LetsTalk;
