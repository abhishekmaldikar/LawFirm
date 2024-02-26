import React from 'react'
import styles from './AreaofPractices.module.css'
import { Typography,Grid } from '@mui/material'
import Business from '../../Assests/Business1.svg'
import Partnership from '../../Assests/Partnership.svg'
import Realestate from '../../Assests/Realestate.svg'
import Business2 from '../../Assests/Business2.svg'
import Landlord from '../../Assests/Landlord.svg'
import Pic from '../../Assests/Pic.svg'

const AreaofPractices = () => {
  return (
    <div className={styles.AreaofPracMainDiv}>
        <Typography variant='h3' color="white">Area of Practices</Typography>
        <Grid container spacing={1} sx={{display : 'flex' ,justifyContent : 'center' ,alignItems : 'center'}}>
          <Grid item xs={12} md={7} className={styles.MainCard}>
            <img src={Business} alt="grid-img" />
            <p className={styles.ImgTitle}>BUSINESS LAW</p>
          </Grid>
          <Grid item xs={12} md={4} className={styles.MainCard}>
            <img src={Partnership} alt="grid-img" />
            <p className={styles.ImgTitle}>PARTNERSHIP LAW</p>
          </Grid>
          <Grid item xs={12} md={4} className={styles.MainCard}>
            <img src={Realestate} alt="grid-img" />
            <p className={styles.ImgTitle}>REAL ESTATE LAW</p>
          </Grid>
          <Grid item xs={12} md={7} className={styles.MainCard}>
            <img src={Business2} alt="grid-img" />
            <p className={styles.ImgTitle}>BUSINESS LAW</p>
          </Grid>
          <Grid item xs={12} md={7} className={styles.MainCard}>
            <img src={Landlord} alt="grid-img" />
            <p className={styles.ImgTitle}>LANDLORD DISPUTES</p>
          </Grid>
          <Grid item xs={12} md={4} className={styles.MainCard}>
            <img src={Pic} alt="grid-img" />
            <p className={styles.ImgTitle}>ELDER ABUSE</p>
          </Grid>

          
        </Grid>
    </div>
  )
}

export default AreaofPractices