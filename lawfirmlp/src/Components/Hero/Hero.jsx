import React from "react";
import styles from "./Hero.module.css";
import { Typography } from "@mui/material";
import Shape from "../../Assests/Shape.svg"
import Image from "../../Assests/Image.svg"
import LetsTalk from "../LetsTalk/LetsTalk";

const Hero = () => {
  return (
    <div className={styles.HeroMain}>
      <div className={styles.HeroText}>
        <Typography variant="h1" >You don't have to Fight them Alone.</Typography>
        <Typography variant="h6" sx={{color : "gray"}}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </Typography>
        <LetsTalk />
      </div>
      
      <div className={styles.ImgContainer}>
        <img src={Shape} alt="hero-img" className={styles.HeroImg} />
        <img src={Image} alt="hero-img-2" className={styles.HeroImg2}/>
      </div>

    </div>
  );
};

export default Hero;
