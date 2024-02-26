import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import Gift from "../../Assests/Gift.svg";

const Cards = () => {
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          width: "320px",
          height: "377px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "2rem",
          paddingTop: "0.5rem",
          backgroundColor: "inherit",
          borderColor: "#333333"
        }}
      >
        <img src={Gift} alt="Gift-Icon" height="101px" style={{paddingLeft : "1rem"}}/>

        <CardContent
          sx={{
            color: "white",
          }}
        >
          <Typography variant="h5" component="div">
            100% Success Rate
          </Typography>
          <Typography color="grey">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" borderRadius="10px" sx={{backgroundColor : "#E3B748", borderColor : "#E3B748" , color : "black"}}>
            Read More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Cards;
