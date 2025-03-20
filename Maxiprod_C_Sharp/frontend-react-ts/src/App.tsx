import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
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
          <Route path="/" element={<Home />} />
          <Route path="/pessoas" element={<Pessoas />} />
          <Route path="/transacoes" element={<Transacoes />} />
          <Route path="*" element={<Erro404 />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
