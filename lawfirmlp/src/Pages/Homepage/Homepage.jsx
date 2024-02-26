import React from 'react';
import styles from './Homepage.module.css';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';

const Homepage = () => {
  return (
    <div className={styles.Home}>
        <Header />
        <Hero />
    </div>
  )
}

export default Homepage