const formEvents = () => {
  document.querySelector('#main-content').addEventListener('submit', (e) => {
    e.preventDefault();
    console.warn('clicked');
  });
};

export default formEvents;
