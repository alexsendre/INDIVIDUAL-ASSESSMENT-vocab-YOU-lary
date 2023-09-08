import { createTerm, getCards, updateTerm } from '../api/cardData';
import { showCards } from '../pages/vocabCards';

const formEvents = (user) => {
  document.querySelector('#main-content').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-entry')) {
      const payload = {
        title: document.querySelector('#vocabTitle').value,
        languageOrTech: document.querySelector('#langOrTech').value,
        category: document.querySelector('#term-category').value,
        description: document.querySelector('#description').value,
        favorite: document.querySelector('#favorite').checked,
        uid: user.uid
      };

      createTerm(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateTerm(patchPayload).then(() => {
          getCards(user.uid).then((cards) => showCards(cards));
        });
      });
    }

    if (e.target.id.includes('edit-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#vocabTitle').value,
        languageOrTech: document.querySelector('#langOrTech').value,
        category: document.querySelector('#term-category').value,
        description: document.querySelector('#description').value,
        favorite: document.querySelector('#favorite').checked,
        uid: user.uid,
        firebaseKey,
      };

      updateTerm(payload).then(() => {
        getCards(user.uid).then(showCards);
      });
    }
  });
};

export default formEvents;
