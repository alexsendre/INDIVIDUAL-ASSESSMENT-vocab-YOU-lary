import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
  <div id="navBar-custom">
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid text-white">
      <a class="navbar-brand" href="#">TERMinal</a>
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
          <li class="nav-item">
            <a class="nav-link" href="#" id="lang-filter">Language Terms</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="tech-filter">Tech Terms</a>
          </li>
        </ul>
        <span class="navbar-text float-end">
          <div id="logout-btn-nav"></div>
        </span>
      </div>
    </div>
  </nav>
  </div>`;

  renderToDom('#navBar', domString);
};

export default navBar;
