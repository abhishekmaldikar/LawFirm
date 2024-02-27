import React from 'react'
import SectionHeading from "../SectionHeading/SectionHeading";
import { TextField, Button } from "@mui/material";
import styles from "./SubscribeSection.module.css"

const SubscribeSection = () => {
  return (
    <div className={styles.SubscribeSectionMainDiv}>
        <SectionHeading text="Subscribe Our Newsletter" color="white"/>
        <div className={styles.InputFields}>
        <TextField
        label="Name"
        variant="outlined"
        sx={{backgroundColor : "white"}}
        />
        <TextField
        label="Enter Your Email"
        variant="outlined"
        sx={{backgroundColor : "white"}}
        />
        <Button sx={{backgroundColor : "#E3B748" ,height : "58px", width :"116px" , color : "black"}}>SEND</Button>
        </div>
    </div>
  )
}

export default SubscribeSection