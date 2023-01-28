import "./header.css";
function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top border border-dark">
        <div class="container-fluid inter-font">
          <span class="navbar-brand">Portfolio</span>
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
                class="nav-link stact-nav-link nav-button active rounded"
                href="/"
              >
                Home
              </a>
              <a
                class="nav-link stact-nav-link nav-button active rounded"
                href="/about"
              >
                About
              </a>
              <a
                class="nav-link stact-nav-link nav-button active rounded"
                href="/experience"
              >
                Experience
              </a>
              <a
                class="nav-link stact-nav-link nav-button active rounded"
                href="/projects"
              >
                Projects
              </a>
              <a
                class="nav-link stact-nav-link nav-button active rounded"
                href="/contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
