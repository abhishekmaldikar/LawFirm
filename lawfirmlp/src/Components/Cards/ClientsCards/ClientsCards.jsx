import React from "react";
import styles from "./ClientsCards.module.css";
import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const ClientsCards = ({img,name,description}) => {
  return (
    <Box>
      <Card variant="outlined" className={styles.customContainer}>
        <img
          src={img}
          alt="Gift-Icon"
          height="101px"
          style={{ paddingLeft: "1rem" }}
        />

        <CardContent
          sx={{
            color: "white",
          }}
        >
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography color="grey">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ClientsCards;
