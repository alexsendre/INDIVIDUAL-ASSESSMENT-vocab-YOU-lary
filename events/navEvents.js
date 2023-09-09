import { getCards, getLangTerms, getTechTerms } from '../api/cardData';
import addCardForm from '../components/forms/addCardForm';
import { showCards } from '../pages/vocabCards';
import { signOut } from '../utils/auth';

const navEvents = (user) => {
  // ON CLICK, SIGNS USER OUT
  document.querySelector('#logout-btn-nav').addEventListener('click', signOut);

  // ON CLICK, SHOWS ALL CARDS
  document.querySelector('#view-all').addEventListener('click', () => {
    getCards(user.uid).then((cards) => showCards(cards));
  });

  // ON CLICK, DISPLAYS ENTRY FORM
  document.querySelector('#create-entry').addEventListener('click', () => {
    addCardForm(user.uid);
  });

  // ON CLICK, DISPLAYS LANGUAGE TERMS ONLY
  document.querySelector('#lang-filter').addEventListener('click', () => {
    getLangTerms().then(showCards);
  });

  // ON CLICK, DISPLAYS TECH TERMS ONLY
  document.querySelector('#tech-filter').addEventListener('click', () => {
    getTechTerms().then(showCards);
  });
};

export default navEvents;
