import React from 'react';
import styles from './Homepage.module.css';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Intro from '../../Components/Introduction/Intro';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import AreaofPractices from '../../Components/AreaofPractices/AreaofPractices';
import TeamPreview from '../../Components/TeamPreview/TeamPreview';
import FAQ from '../../Components/FAQ/FAQ';
import SubscribeSection from '../../Components/SubscribeSection/SubscribeSection';
import Footer from '../../Components/Footer/Footer';
import Carousel from '../../Components/Carousel/Carousel';

const Homepage = () => {
  return (
    <div className={styles.Home}>
        <Header />
        <Hero />
        <Intro />
        <WhyChooseUs/>
        <AreaofPractices />
        <Carousel />
        <TeamPreview />
        <FAQ />
        <SubscribeSection />
        <Footer />
    </div>
  )
}

export default Homepage