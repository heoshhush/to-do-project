import { firebaseDatabase } from './firebase';

class Database {
    saveCard = (userId, card) => {
        firebaseDatabase.ref(`${userId}/todos/${card.id}`).set(
            card
        )
    }

    loadCards = (userId, myFunction) => {
        firebaseDatabase.ref(`${userId}/todos`).on('value', snapshot =>{
            snapshot.val() && myFunction(snapshot.val())
        })
    }

    deleteCards = (userId, card) => {
        firebaseDatabase.ref(`${userId}/todos/${card.id}`).remove();
    }
}

export default Database;