import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.IntroSection}>
      <Typography variant="h3" textAlign="start">
        Let's Introduce Ourself
      </Typography>
      <Divider orientation="vertical" sx={{backgroundColor : "grey", marginLeft : "15vw"}} fullWidth/>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography variant="h4">Criminal Lawyer</Typography>
        <Typography variant="p" textAlign="start" color="grey">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </Typography>
      </Box>
    </div>
  );
};

export default Intro;
