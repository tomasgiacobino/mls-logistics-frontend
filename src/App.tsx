import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import SuccessPage from './pages/MP/SuccessPage';
import FailurePage from './pages/MP/FailurePage';
import PendingPage from './pages/MP/PendingPage';

import ReactGA from 'react-ga4';
import { FaWhatsapp } from 'react-icons/fa6';

// PENDIENTE: reemplazar 'G-XXXXXXXXXX' con el ID real del cliente
ReactGA.initialize('G-XXXXXXXXXX');

// Carga diferida de las páginas para optimizar el rendimiento
const Home = React.lazy(() => import('./pages/Home'));
const Curso = React.lazy(() => import('./pages/Curso'));
const Aerea = React.lazy(() => import('./pages/Aerea'));
const Maritima = React.lazy(() => import('./pages/Maritima'));    
const Importador = React.lazy(() => import('./pages/Importador'));
const Exportacion = React.lazy(() => import('./pages/Exportacion'));
const AgenteDeCompras = React.lazy(() => import('./pages/AgenteDeCompras'));
const GestionComex = React.lazy(() => import('./pages/GestionComex'));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curso" element={<Curso />} />
          <Route path='/importacionAerea' element={<Aerea />} />
          <Route path='/importacionMaritima' element={<Maritima />} />
          <Route path='/importador' element={<Importador />} />
          <Route path='/exportacion' element={<Exportacion />} />
          <Route path='/agenteDeCompras' element={<AgenteDeCompras />} />
          <Route path='/gestionComex' element={<GestionComex />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/failure" element={<FailurePage />} />
          <Route path="/pending" element={<PendingPage />} />
        </Routes>
      </Suspense>
      <a
        href="https://wa.me/5493492213436"
        target="_blank"
        rel="noreferrer"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: '#25D366',
          color: 'white',
          borderRadius: '50%',
          width: '56px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.8rem',
          zIndex: 9999,
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
        }}
      >
        <FaWhatsapp />
      </a>
      <Footer />
    </>
  );
}

export default App;