import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pacientes from './pages/Pacientes';
import Assistencial from './pages/Assistencial';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

// Higher order component for scroll reset on navigation
function ScrollToTop() {
  const { pathname } = window.location;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/assistencial" element={<Assistencial />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Layout>
    </Router>
  );
}
