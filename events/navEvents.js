import { getCards, getLangTerms, getTechTerms } from '../api/cardData';
import addCardForm from '../components/forms/addCardForm';
import { showCards } from '../pages/vocabCards';

import { signOut } from '../utils/auth';

const navEvents = (user) => { // ADD USER IN PARENTHESES
  document.querySelector('#logout-btn-nav').addEventListener('click', signOut);

  document.querySelector('#view-all').addEventListener('click', () => {
    getCards(user.uid).then((cards) => showCards(cards));
  });

  document.querySelector('#create-entry').addEventListener('click', () => {
    addCardForm(user.uid);
  });

  document.querySelector('#lang-filter').addEventListener('click', () => {
    getLangTerms().then(showCards);
  });

  document.querySelector('#tech-filter').addEventListener('click', () => {
    getTechTerms().then(showCards);
  });
};

export default navEvents;
