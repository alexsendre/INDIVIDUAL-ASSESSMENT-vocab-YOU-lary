import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const emptyCards = () => {
  const domString = '<h2>Nothing has been defined yet!</h2>';
  renderToDom('#store', domString);
};

const showCards = (array) => {
  clearDom();

  const btn = '<button class="btn btn-lg" id="add-term-btn">Add a Term</button>';

  renderToDom('#add-btn', btn);

  let domString = '';
  if (array.length < 1) {
    emptyCards();
  } else {
    array.forEach((card) => {
      domString += `
      <div class="card" id="customCard">
        <div class="card-body">
          <h5 class="card-title mb-2">${card.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted" id="card-category">${card.category}</h6>
          <span>
            <h6 class="card-subtitle mb-2 text-muted">// ${card.languageOrTech}</h6>
          </span>
          <p class="card-text">${card.description}</p>
          <i class="btn btn-edit bi bi-pencil-square" id="edit-card--${card.firebaseKey}">EDIT</i>
          <i class="btn btn-delete bi bi-trash" id="delete-card--${card.firebaseKey}">DELETE</i>
        </div>
      </div>
      `;
    });
  }
  renderToDom('#store', domString);
};

export { showCards, emptyCards };
