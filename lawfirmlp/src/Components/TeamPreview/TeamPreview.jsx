import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import styles from "./TeamPreview.module.css"
import {Data} from "../../Data/LawyersData.js"
import { Grid } from "@mui/material";
import TeamPreviewCards from '../Cards/TeamPreviewCards/TeamPreviewCards.jsx';

const TeamPreview = () => {
  return (
    <div className={styles.TeamPreviewMainDiv}>
        <SectionHeading text="Our Team" color="white"/>
        <Grid container spacing={1} >
            {Data.map((data) => (
                <Grid item xs={12} md={4}>
                    <TeamPreviewCards img={data.img} name={data.name} cases={data.cases}/>
                </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default TeamPreview