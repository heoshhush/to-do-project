import React, { useRef } from 'react';
import Styles from './cardAddForm.module.css'

const CardAddForm = ({ addOrUpdateCard }) => {
    const inputRef = useRef();
    const addBtnRef = useRef();
    const onAddClick = () => {
        const toAdd = {
            id : Date.now(),
            todo : inputRef.current.value,
        }
        addOrUpdateCard(toAdd)
        inputRef.current.value='';
    }
    const onPressEnter = (event) => {
        if(event.key === 'Enter'){
            addBtnRef.current.click();
        }
    }

    return(
        <div className={Styles.container}>
             <h1 className={Styles.cardAddFormTitle}>What Will You Do?</h1>
            <div className={Styles.cardAddForm}>
                <input ref={inputRef} className={Styles.cardAddInput} onKeyPress={onPressEnter} type="text"/>
                <button ref={addBtnRef} className={Styles.cardAddBtn} onClick={onAddClick}>
                    <i className={`fas fa-plus ${Styles.addIcon}`}></i> 
                </button>
            </div>
        </div>
    )
}

export default CardAddForm;