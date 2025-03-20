import React from "react";
import '../assets/css/style.css';

const Footer: React.FC = () => {
  return (
    <footer className="fixed-bottom">
      <div className="container">
        
        <div className="d-block d-md-none">
          <div className="d-flex justify-content-center align-items-center">
            <span>
              &copy; 2025 -&nbsp;
              <a href="https://github.com/gpereira86" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>&nbsp; Glauco Pereira
              </a>
            </span>
          </div>
        </div>

        <div className="d-none d-md-block">
          <div className="container text-center my-3">
            <div className="row">
              <div className="col text-start">
                <span>&copy; 2025 - Teste Técnico MaxiProd</span>
              </div>

              <div className="col text-end">
                <a href="https://github.com/gpereira86" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github "></i>&nbsp; Glauco Pereira
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <script src="./assets/js/dropdown"></script>
    </footer>
  );
};

export default Footer;
