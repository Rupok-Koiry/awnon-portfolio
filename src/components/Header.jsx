import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
      /* Header Start */
      <header id="header">
        <div class="d-flex flex-column">
          <div class="profile">
            <img
              src="assets/img/profile-img.jpg"
              alt=""
              class="img-fluid rounded-circle"
            />
            <h1 class="text-light">
              <a href="index.html">Awnon Bhowmik</a>
            </h1>
            <div class="social-links mt-3 text-center">
              <div class="social-links">
                <a href="https://github.com/awnonbhowmik" class="github">
                  <i class="bi bi-github"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/awnon-bhowmik/"
                  class="linkedin"
                >
                  <i class="bi bi-linkedin"></i>
                </a>
                <a
                  href="https://www.quora.com/profile/%E0%A6%85%E0%A6%A8%E0%A6%A8-%E0%A6%AD%E0%A7%8C%E0%A6%AE%E0%A6%BF%E0%A6%95-Awnon-Bhowmik"
                  class="quora"
                >
                  <i class="bx bxl-quora"></i>
                </a>
                <a
                  href="https://scholar.google.com/citations?user=nEdZAFkAAAAJ&hl=en"
                  class="googlescholar"
                >
                  <i class="ai ai-google-scholar-square ai"></i>
                </a>
                <a
                  href="https://www.researchgate.net/profile/Awnon-Bhowmik"
                  class="researchgate"
                >
                  <i class="lab la-researchgate"></i>
                </a>
                <a href="https://orcid.org/0000-0001-5858-5417" class="orcid">
                  <i class="lab la-orcid"></i>
                </a>
                <a href="mailto:awnonbhowmik256@gmail.com" class="gmail">
                  <i class="ri ri-mail-line"></i>
                </a>
              </div>
            </div>
          </div>
          <nav id="navbar" class="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" class="nav-link scrollto active">
                  <i class="bx bx-home"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" class="nav-link scrollto">
                  <i class="bx bx-user"></i>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#Activity" class="nav-link scrollto">
                  <i class="bx bx-bar-chart-alt"></i>
                  <span>Activity</span>
                </a>
              </li>
              <li>
                <a href="#skills" class="nav-link scrollto">
                  <i class="fas fa-tools"></i>
                  <span>Skill</span>
                </a>
              </li>
              <li>
                <a href="#resume" class="nav-link scrollto">
                  <i class="bx bx-file-blank"></i>
                  <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#interest" class="nav-link scrollto">
                  <i class="bx bx-server"></i>
                  <span>Interests</span>
                </a>
              </li>
              <li>
                <a href="#contact" class="nav-link scrollto">
                  <i class="bx bx-envelope"></i>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
