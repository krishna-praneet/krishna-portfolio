import "./header.css";
function Header() {
  return (
    <>
      <nav class="navbar navbar-expand navbar-light  border border-dark">
        <div class="container-fluid inter-font">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse">
            <div class="navbar-nav mx-auto">
              <a
                class="nav-link stact-nav-link nav-button active rounded mx-2"
                href="/"
              >
                WELCOME TO MY WEBSITE!
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
