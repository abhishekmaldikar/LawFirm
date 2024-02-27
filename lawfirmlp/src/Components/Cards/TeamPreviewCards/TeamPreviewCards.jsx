import React from "react";
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import styles from "./TeamPreviewCards.module.css";

const TeamPreviewCards = ({ img, name, cases }) => {
  return (
    <Card className={styles.TeamPreviewCardsMainDiv} sx={{marginLeft : "4vw"}}>
      <img
        src={img}
        alt="ProfilePic"
        style={{ width: "68px", height: "68px", paddingLeft: "1rem" }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <Typography variant="h6">{name}</Typography>
        <Typography variant="p" >
          {cases} Cases
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamPreviewCards;
