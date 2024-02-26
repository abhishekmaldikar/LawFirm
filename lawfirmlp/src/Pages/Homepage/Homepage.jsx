import React from 'react';
import styles from './Homepage.module.css';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Intro from '../../Components/Introduction/Intro';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import {Container} from '@mui/material'

const Homepage = () => {
  return (
    <div className={styles.Home}>
        <Header />
        <Hero />
        <Intro />
        <WhyChooseUs/>
    </div>
  )
}

export default Homepage