import React from 'react';
import Logoname from "../../Assests/logoname.svg";
import Logovector from "../../Assests/Logovector.svg"
import styles from "./Logo.module.css"

const Logo = () => {
  return (
    <div className={styles.LogoName}>
        <img src={Logovector} alt="logo-vector" style={{width : "30px" , height : "30px"}}/>
        <img src={Logoname} alt="logo" style={{width : "143px" , height : "30px"}}/>
    </div>
  )
}

export default Logo