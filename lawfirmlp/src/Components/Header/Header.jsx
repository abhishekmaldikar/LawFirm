import React from 'react';
import styles from "./Header.module.css";
import Logo from '../Logo/Logo';
import {Button} from '@mui/material';

const Header = () => {
  return (
    <div className={styles.Navbar}>
        <Logo />
        <div className={styles.navLinks}>
            <h3>Home</h3>
            <h3>Attorneys</h3>
            <h3>Practice Areas</h3>
            <h3>About Us</h3>
        </div>
        <Button variant="outlined" className={styles.navButton}>Contact Now</Button>
    </div>
  )
}

export default Header