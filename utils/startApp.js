import { getCards } from '../api/cardData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';
import { showCards } from '../pages/vocabCards';

const startApp = (user) => {
  domBuilder(user); // BUILDS DOM
  domEvents(user); // ADDS EVENT LISTENERS TO DOM
  formEvents(user); // CAPTURES VALUES FROM FORM
  navBar(); // DYNAMICALLY CREATES NAVBAR
  navEvents(user); // ADDS LOGOUT COMPONENT
  logoutButton(); // DYNAMICALLY RENDERS LOGOUT BUTTON IF LOGGED IN

  getCards(user.uid).then((cards) => showCards(cards));
};

export default startApp;
