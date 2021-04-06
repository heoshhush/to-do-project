import React from 'react';
import Card from '../card/card';
import Styles from './viewCards.module.css'

const ViewCards = ({cards, addOrUpdateCard, deleteCard}) => {
    return(
        <ul className={Styles.list}>
            {Object.keys(cards).map(key => (
                <Card 
                    key={key}
                    card={cards[key]}
                    addOrUpdateCard={addOrUpdateCard}
                    deleteCard={deleteCard}
                />
            ))}
            
        </ul>
    )
}

export default ViewCards;