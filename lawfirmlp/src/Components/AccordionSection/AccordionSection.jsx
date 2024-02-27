import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { Data } from "../../Data/AccordionData";
import AddIcon from "@mui/icons-material/Add";
const AccordionSection = () => {
  return (
    <div>
      {Data.map((data, idx) => (
        <Accordion sx={{backgroundColor : "inherit" , color : "white"}} defaultExpanded={idx === 0}>
          <AccordionSummary expandIcon={<AddIcon sx={{backgroundColor : "#E3B748" , borderRadius : "20px"}}/>}>
            <Typography variant="h6">{data.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="grey">{data.summary}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionSection;
