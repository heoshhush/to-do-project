import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CardAddForm from '../cardAddForm/cardAddForm';
import Footer from '../footer/footer';
import Header from '../header/header';
import ViewCards from '../viewCards/viewCards';
import Styles from './maker.module.css'

const Maker = ({ authService, database }) => {
    const history = useHistory();
    const historyState = history.location.state.id;
    
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(historyState);


    const addOrUpdateCard = (card) => {
        setCards(cards => {
            const added = {...cards};
            added[card.id] = card;
            return(added);
        })
        database.saveCard(userId, card)
    }

    const deleteCard = (card) => {
        setCards(cards => {
            const added = {...cards};
            delete(added[card.id]);
            return(added)
        })
        database.deleteCards(userId, card);
    }

    useEffect(() => {
        authService.onAuthChange((user) => {
            if(!user){
                history.push('/')
            }
        })
    })

    useEffect(() => {
        database.loadCards(userId, value => setCards(value))
    }, [userId])


    return(
        <section>
            <Header 
                authService={authService}
            />
            <main className={Styles.mainContents}>
                <CardAddForm 
                    addOrUpdateCard={addOrUpdateCard}
                />
                <ViewCards 
                    cards={cards}
                    addOrUpdateCard={addOrUpdateCard}
                    deleteCard={deleteCard}
                />

            </main>
            <Footer />
        </section>
    )
}

export default Maker;