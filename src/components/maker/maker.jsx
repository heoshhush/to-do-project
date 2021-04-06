import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CardAddForm from '../cardAddForm/cardAddForm';
import Footer from '../footer/footer';
import Header from '../header/header';
import ViewCards from '../viewCards/viewCards';
import Styles from './maker.module.css'

const Maker = ({ authService }) => {
    const [cards, setCards] = useState({
        1: {
            id: 1,
            todo: 'go to shopping mall and buy egg'
        },
        2: {
            id: 2,
            todo: 'back to the home'
        },
        3: {
            id: 3,
            todo: 'i got 99problems'
        }
    })


    const history = useHistory();

    useEffect(() => {
        authService.onAuthChange((user) => {
            if(!user){
                history.push('/')
            }
        })
    })


    return(
        <section>
            <Header 
                authService={authService}
            />
            <main className={Styles.mainContents}>
                <CardAddForm />
                <ViewCards 
                    cards={cards}
                />

            </main>
            <Footer />
        </section>
    )
}

export default Maker;