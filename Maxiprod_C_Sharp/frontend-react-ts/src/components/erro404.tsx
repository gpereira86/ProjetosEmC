import React from "react";
import '../assets/css/style.css';


const Erro404: React.FC = () => {
    const primaryStyle = { color: "#1783a4" };
    const secondaryStyle = { color: "#343a40" };
    const minSize = { minHeight: "65vh" };


  return (
    <div className="container position-absolute top-50 start-50 translate-middle">
        <div className="p-4">


            <main id="page-content" className="d-flex justify-content-center align-items-center" style={minSize}>
                <div className="text-center">
                    <h1 className="fw-bold" style={primaryStyle}>Página não encontrada</h1>
                    <h1 className="error-404">404</h1>
                    <p className="mt-3" style={secondaryStyle}>O link que você seguiu deve estar quebrado ou a página pode ter sido removida.</p>
                </div>
            </main>            

        </div>
    </div>
  )
};

export default Erro404;