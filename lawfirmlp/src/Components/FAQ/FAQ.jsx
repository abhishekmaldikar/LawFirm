import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Box, Typography } from "@mui/material";
import styles from "./FAQ.module.css";
import AccordionSection from "../AccordionSection/AccordionSection";

const FAQ = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <SectionHeading text="FAQ" color="white"/>
      <div className={styles.FAQSubsection}>
        <Typography variant="p" color="grey" textAlign="start">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </Typography>
        <AccordionSection/>
      </div>
    </Box>
  );
};

export default FAQ;
