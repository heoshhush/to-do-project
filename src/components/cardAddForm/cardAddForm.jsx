import React from 'react';
import Styles from './cardAddForm.module.css'

const CardAddForm = (props) => {
    return(
        <div className={Styles.container}>
             <h1 className={Styles.cardAddFormTitle}>What Will You Do?</h1>
            <div className={Styles.cardAddForm}>
                <input className={Styles.cardAddInput} type="text"/>
                <button className={Styles.cardAddBtn}>
                    <i className={`fas fa-plus ${Styles.addIcon}`}></i> 
                </button>
            </div>
        </div>
    )
}

export default CardAddForm;