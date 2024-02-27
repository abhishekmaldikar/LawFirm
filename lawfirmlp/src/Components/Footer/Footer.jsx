import React from "react";
import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import { Box, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Footer = () => {
  return (
    <div className={styles.FooterMainDiv}>
      <div className={styles.FooterSectionOne}>
        <Logo />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            color : "white",
            gap : "4rem"
          }}
        >
          <Typography variant="h6">Home</Typography>
          <Typography variant="h6">Attorneys</Typography>
          <Typography variant="h6">Practice Areas</Typography>
          <Typography variant="h6">About Us</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            gap : "1rem"
          }}
        >
            <FacebookIcon variant="large" sx={{backgroundColor : "#E3B748"}} />
            <InstagramIcon sx={{backgroundColor : "#E3B748"}} />
            <XIcon sx={{backgroundColor : "#E3B748"}} />
            <PinterestIcon sx={{backgroundColor : "#E3B748"}} />
        </Box>
      </div>
      <div className={styles.FooterSectionSec}>
        <p >© 2020 Acme. All right reserved.</p>
        <p >Privacy Policy</p>
        <p >Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
