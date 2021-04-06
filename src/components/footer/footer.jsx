import React from 'react';
import Styles from './footer.module.css';

const Footer = (props) => {
    return(
        <footer className={Styles.footer}>
            <div className={Styles.copyRight}>Copyright 2021. Heo. All rights reserved.</div>

        </footer>
    )
}

export default Footer;