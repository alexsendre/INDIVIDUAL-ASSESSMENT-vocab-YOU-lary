import {
  deleteTerm, getCards, getSingleTerm
} from '../api/cardData';
import addCardForm from '../components/forms/addCardForm';
import { emptyCards, showCards } from '../pages/vocabCards';

const domEvents = (user) => {
  document.querySelector('#main-content').addEventListener('click', (e) => {
    if (e.target.id.includes('add-term-btn')) {
      // console.warn('clicked');
      addCardForm(user.uid);
    }

    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Delete Term?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteTerm(firebaseKey).then(() => {
          getCards(user.uid).then((cardArr) => {
            if (cardArr.length) {
              showCards(cardArr);
            } else {
              emptyCards();
            }
          });
        });
      }
    }

    if (e.target.id.includes('edit-card')) {
      console.warn('clicked');
      const [, firebaseKey] = e.target.id.split('--');
      getSingleTerm(firebaseKey).then((cardObj) => addCardForm(user.uid, cardObj));
    }
  });
};

export default domEvents;
