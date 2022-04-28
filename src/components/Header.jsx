import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="/assets/img/profile-img.jpg"
              alt="Awnon Bhowmik"
              className="img-fluid rounded-circle profile-img"
            />
            <h1 className="text-light">
              <a href="index.html">Awnon Bhowmik</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <div className="social-links">
                <a
                  href="https://github.com/awnonbhowmik"
                  className="github"
                  style={{ color: "#171515" }}
                >
                  <img src="/assets/img/icons/github.png" alt="github" />
                </a>
                <a
                  href="https://stackexchange.com/users/11038541/awnon-bhowmik"
                  className="stackexchange"
                  style={{ color: "#1e5397" }}
                >
                  <img
                    src="/assets/img/icons/exchange.png"
                    alt="stackexchange"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/awnon-bhowmik/"
                  className="linkedin"
                >
                  <img src="/assets/img/icons/linkedin.png" alt="linkedin" />
                </a>
                <a
                  href="https://www.quora.com/profile/%E0%A6%85%E0%A6%A8%E0%A6%A8-%E0%A6%AD%E0%A7%8C%E0%A6%AE%E0%A6%BF%E0%A6%95-Awnon-Bhowmik"
                  className="quora"
                >
                  <img src="/assets/img/icons/quora.png" alt="quora" />
                </a>
                <a
                  href="https://scholar.google.com/citations?user=nEdZAFkAAAAJ&hl=en"
                  className="googlescholar"
                >
                  <img src="/assets/img/icons/scholar.png" alt="scholar" />
                </a>
                <a
                  href="https://www.researchgate.net/profile/Awnon-Bhowmik"
                  className="researchgate"
                >
                  <img
                    src="/assets/img/icons/researchgate.png"
                    alt="researchgate"
                  />
                </a>
                <a
                  href="https://orcid.org/0000-0001-5858-5417"
                  className="orcid"
                >
                  <img src="/assets/img/icons/orcid.png" alt="orcid" />
                </a>
                <a href="mailto:awnonbhowmik256@gmail.com" className="gmail">
                  <img src="/assets/img/icons/gmail.png" alt="gmail" />
                </a>
              </div>
            </div>
          </div>
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <i className="bx bx-home"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bx bx-user"></i>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#Activity" className="nav-link scrollto">
                  <i className="bx bx-bar-chart-alt"></i>
                  <span>Activity</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="nav-link scrollto">
                  <i className="fas fa-tools"></i>
                  <span>Skill</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank"></i>

                  <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#interest" className="nav-link scrollto">
                  <i className="bx bx-server"></i>
                  <span>Interests</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <i className="bx bx-envelope"></i>
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
