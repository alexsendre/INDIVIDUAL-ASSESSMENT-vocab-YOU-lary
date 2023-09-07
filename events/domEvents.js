import { deleteTerm, getCards, getSingleTerm } from '../api/cardData';
import addCardForm from '../components/forms/addCardForm';
import { showCards } from '../pages/vocabCards';

const domEvents = (user) => {
  document.querySelector('#main-content').addEventListener('click', (e) => {
    if (e.target.id.includes('add-term-btn')) {
      // console.warn('clicked');
      addCardForm(user.uid);
    }

    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteTerm(firebaseKey).then(getCards).then(showCards);
      }
    }

    if (e.target.id.includes('edit-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleTerm(firebaseKey).then((cardObj) => addCardForm(user.uid, cardObj));
    }
  });
};

export default domEvents;
