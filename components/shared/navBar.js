import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">VOCAB-YOU</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#" id="view-all">View Terms</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="create-entry">Create Entry</a>
          </li>
        </ul>
        <span class="navbar-text">
          <div id="logout-btn-nav"></div>
        </span>
      </div>
    </div>
  </nav>`;

  renderToDom('#navBar', domString);
};

export default navBar;
