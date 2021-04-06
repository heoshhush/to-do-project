import React from 'react';
import Styles from './header.module.css';

const Header = ({ authService }) => {
    const onClick= () => {
        authService.logout();
    }

    return(
        <>
            <header className={Styles.header}>
                <div className={Styles.title}>
                     To-Do-List 
                </div> 
                <div className={Styles.logoutDiv}>
                    <button className={Styles.logoutBtn} onClick={onClick}>Logout</button>
                </div>
                
            </header>
           
        </>
    )
}

export default Header;