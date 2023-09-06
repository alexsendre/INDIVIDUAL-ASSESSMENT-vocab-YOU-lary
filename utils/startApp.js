import getCards from '../api/cardData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import navEvents from '../events/navEvents';
import { showCards } from '../pages/vocabCards';

const startApp = (user) => {
  domBuilder(); // BUILDS DOM
  navBar(); // DYNAMICALLY CREATES NAVBAR
  logoutButton();
  navEvents(user); // ADDS LOGOUT COMPONENT

  getCards(user.uid).then((cards) => showCards(cards));
};

export default startApp;
