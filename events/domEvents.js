import addCardForm from '../components/forms/addCardForm';

const domEvents = (user) => {
  document.querySelector('#main-content').addEventListener('click', (e) => {
    if (e.target.id.includes('add-term-btn')) {
      // console.warn('clicked');
      addCardForm(user.uid);
    }
  });
};

export default domEvents;
