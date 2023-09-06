import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const emptyCards = () => {
  const domString = '<h2>Nothing has been defined yet!</h2>';
  renderToDom('#store', domString);
};

const showCards = (array) => {
  clearDom();

  const btn = '<button class="btn btn-success btn-lg" id="add-term-btn">Add a Term</button>';

  renderToDom('#add-btn', btn);

  let domString = '';
  if (array.length < 1) {
    emptyCards();
  } else {
    array.forEach((card) => {
      domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${card.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Language/Tech: ${card.languageOrTech}</h6>
          <p class="card-text">${card.description}</p>
          <i class="btn btn-warning bi bi-pencil-square" id="edit-card--${card.firebaseKey}"></i>
          <i class="btn btn-danger bi bi-trash" id="delete-card--${card.firebaseKey}"></i>
        </div>
      </div>
      `;
    });
  }
  renderToDom('#store', domString);
};

export { showCards, emptyCards };
