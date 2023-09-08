import { getCards } from '../api/cardData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';
import { emptyCards, showCards } from '../pages/vocabCards';

const startApp = (user) => {
  domBuilder(user); // BUILDS DOM
  navBar(user); // DYNAMICALLY CREATES NAVBAR
  domEvents(user); // ADDS EVENT LISTENERS TO DOM
  navEvents(user); // ADDS LOGOUT COMPONENT
  formEvents(user); // CAPTURES VALUES FROM FORM
  logoutButton(); // DYNAMICALLY RENDERS LOGOUT BUTTON IF LOGGED IN

  getCards(user.uid).then((arr) => {
    if (arr.length) {
      showCards(arr);
    } else {
      emptyCards();
    }
  });
};

export default startApp;
