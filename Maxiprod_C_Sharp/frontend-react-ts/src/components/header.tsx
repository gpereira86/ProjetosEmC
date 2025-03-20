import React from "react";
import '../assets/css/style.css';



const Header: React.FC = () => {
    const currentUrl = window.location.href;
    
  return (
    <header className="pt-1">
        <div className="container">
            <div className="d-flex justify-content-between justify-content-md-start align-items-center mx-1 mx-md-0 pe-auto">

                    <h4 className="pt-2" role="button" onClick={() => window.location.href = '/'}>
                    <img
                        className="img-fluid pe-1 pb-2 logo"
                        src="https://maxiprod.com.br/wp-content/uploads/2023/05/Icone-p-Wordpress-512-%C3%97-512-px-150x150.png"
                        alt=""
                    />
                        <span className="fw-lighter">MAXIPROD</span> <span className="fw-bold">GLAUCO PEREIRA</span>
                    </h4>
                    
                    <nav className="navbar navbar-expand-md">

                        <button className="navbar-toggler border-0"
                                id="menuDropdownButton"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Alternar navegação">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item mx-2">    
                                <a
                                    className={`nav-link ${currentUrl.includes('home') ? 'custom-active' : ''}`}
                                    href="/home"
                                    >
                                    Home
                                    </a>
                                </li>

                                <li className="nav-item mx-2">
                                    <a
                                    className={`nav-link ${currentUrl.includes('pessoas') ? 'custom-active' : ''}`}
                                    href="/pessoas"
                                    >
                                    Pessoas
                                    </a>
                                </li>

                                <li className="nav-item mx-2">
                                    <a
                                    className={`nav-link ${currentUrl.includes('transacoes') ? 'custom-active' : ''}`}
                                    href="/transacoes"
                                    >
                                    Transações
                                    </a>
                                </li>                              
                                
                            </ul>
                        </div>
                    </nav>

            </div>
        </div>
    </header>
  );
};

export default Header;