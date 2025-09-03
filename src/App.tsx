import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

// Carga diferida de las páginas para optimizar el rendimiento
const Home = React.lazy(() => import('./pages/Home'));
const Curso = React.lazy(() => import('./pages/Curso'));
const Aerea = React.lazy(() => import('./pages/Aerea'));
const Maritima = React.lazy(() => import('./pages/Maritima'));    
const Importador = React.lazy(() => import('./pages/Importador'));
const Exportacion = React.lazy(() => import('./pages/Exportacion'));
// ... y las otras páginas que creaste

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
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;