import renderToDom from '../../utils/renderToDom';

const filterButtons = () => {
  const domString = `
      <button type="button" class="btn btn-outline-light" id="filterLang">Language</button>
      <button type="button" class="btn btn-outline-light" id="filterTech">Tech</button>
  `;

  renderToDom('#filter-buttons', domString);
};

export default filterButtons;
