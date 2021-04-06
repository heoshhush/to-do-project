import React from 'react';
import Card from '../card/card';
import Styles from './viewCards.module.css'

const ViewCards = ({cards}) => {
    return(
        <ul>
            {Object.keys(cards).map(key => (
                <Card 
                    key={key}
                    card={cards[key]}
                />
            ))}
            
        </ul>
    )
}

export default ViewCards;