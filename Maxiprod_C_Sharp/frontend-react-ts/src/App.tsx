import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importando o Router e as rotas
import Home from './components/home'; // Importe seus componentes
import Pessoas from './components/pessoas';
import Header from './components/header';
import Footer from './components/footer';
import Transacoes from './components/transacoes';
import Erro404 from './components/erro404';


const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Rota para a página inicial */}
          <Route path="/pessoas" element={<Pessoas />} /> {/* Rota para a página pessoas */}
          <Route path="/transacoes" element={<Transacoes />} /> {/* Rota para a página transações */}
          <Route path="*" element={<Erro404 />} /> {/* Rota para qualquer rota inexistente */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
