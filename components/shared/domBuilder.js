import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navBar"></div>
  <div id="main-content">
    <div id="add-btn"></div>
    <div id="form-display"></div>
    <div id="filter-buttons"></div>
    <div id="store"></div>
    <div id="view"></div>
  </div>
  `;

  renderToDom('#app', domString);
};

export default domBuilder;
