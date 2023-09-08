import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';
// import selectCategory from './selectCategory';

const addCardForm = (obj = {}) => {
  clearDom();

  const domString = `
    <div id="create-form">
      <form id="${obj.firebaseKey ? `edit-card--${obj.firebaseKey}` : 'submit-entry'}" class="mt-4">
        <div class="form-group mb-2">
          <label for="image" class="mb-2">Title</label>
          <input type="text" class="form-control" id="vocabTitle" placeholder="Async Programming" value="${obj.title || ''}" required>
        </div>
        <div class="form-group mb-2">
          <label for="image" class="mb-2">Language/Tech</label>
          <input type="text" class="form-control" id="langOrTech" placeholder="JavaScript" value="${obj.languageOrTech || ''}" required>
        </div>
        <div class="form-group mb-2">
          <label for="category" class="mb-2">Select Category</label>
          <select class="form-control text-center" id="term-category">
            <option for="select">-- Select --</option>
            <option for="language">Language</option>
            <option for="tech">Tech</option>
          </select>
        </div>
        <div class="form-group mb-2">
          <label for="title" class="mb-2">Description</label>
          <input type="text" class="form-control" id="description" aria-describedby="description" placeholder="What does this term mean?" value="${obj.description || ''}" required>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="favorite" ${obj.isFavorite ? 'checked' : ''}>
          <label class="form-check-label" for="favorite">Favorite?</label>
        </div>
        <button type="submit" class="btn btn-success mt-3" id="submit-entry">Submit Term</button>
      </form>
    </div>`;

  renderToDom('#form-display', domString);
};

export default addCardForm;
