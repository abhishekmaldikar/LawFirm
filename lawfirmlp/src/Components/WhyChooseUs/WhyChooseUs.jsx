import React from 'react'
import styles from "./WhyChooseUs.module.css"
import Cards from '../Cards/Cards'
import { Typography } from '@mui/material'
const WhyChooseUs = () => {
  return (
    <div className={styles.ChooseUs}>
        <Typography variant='h3' color="white"> Why Choose us?</Typography>
        <div className={styles.Cards}>
            <Cards />
            <Cards />
            <Cards />
        </div>
    </div>
  )
}

export default WhyChooseUs