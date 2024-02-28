import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import Prev from '../../Assests/Prev.svg';
import styles from './NavButtons.module.css';
import {Button} from '@mui/material'

export const PrevButton = () =>{
    return(
        <div className={styles.MainDiv}>
        <Button sx={{
            backgroundColor : 'white',
            borderRadius : '25px'
        }}>
        <ArrowBackIcon  />
        </Button>
        </div>
    )
}

export const NextButton = () =>{
    return(
        <div className={styles.MainDiv}>
        <img src={Prev} className={styles.PrevButtonImg} />
        <KeyboardTabIcon fontSize={'large'}className={styles.arrowIcon} />
        </div>
    )
}