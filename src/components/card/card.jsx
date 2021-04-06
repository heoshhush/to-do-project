import React, { useRef } from 'react';
import Styles from './card.module.css';

const Card = ({ card, addOrUpdateCard, deleteCard }) => {
    const inputRef = useRef();
    const onChange = () => {
        console.log(inputRef.current.value)
        const updated = {
            id: card.id,
            todo: inputRef.current.value
        }
        addOrUpdateCard(updated);
    }

    const onDeleteClick = () => {
        deleteCard(card);
    }

    return(
        <div className={Styles.card}>
            <input 
                ref={inputRef}
                className={Styles.cardInput} 
                type="text" 
                value={card.todo}
                onChange={onChange}
                />
            <button onClick={onDeleteClick} className={Styles.deleteBtn}>
                <i className={`far fa-trash-alt ${Styles.deleteIcon}`}></i>
            </button>
        </div>
)
    }

export default Card;