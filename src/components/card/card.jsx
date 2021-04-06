import React from 'react';
import Styles from './card.module.css';

const Card = (props) => {
    return(
        <div>
            <input className={Styles.cardInput} type="text"/>
        </div>
)
    }

export default Card;