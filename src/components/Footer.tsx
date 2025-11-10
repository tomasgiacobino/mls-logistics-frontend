// src/components/Footer.tsx
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logos/Recurso 15.png'; // 👈 Importa tu logo aquí

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavLinkClick = (hash: string) => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(() => {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
  <footer className="bg-dark text-white py-5">
    <Container>
      <Row className="d-flex justify-content-between">
        {/* Columna 1: Logo y descripción */}
        <Col md={6} className="mb-4 d-flex align-items-start">
            <div className="d-flex align-items-center me-3">
              <img
                src={logo}
                alt="Logo MLS International Logistics"
                height="80"
                className="me-2"
              />
              <h5 className="mb-0">
                <span className="text-primary fw-bold me-2">MLS</span>
                <span className="text-light">COMERCIO INTERNACIONAL</span>
              </h5>
            </div>
            <p className="text-white ms-3 fs-5 mt-2" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
              Tu aliado estratégico en soluciones logísticas y de comercio exterior.
            </p>
          </Col>

        {/* Columna 2: Enlaces de navegación */}
        <Col md={3} className="mb-4 text-md-end">
        <h5>Navegación</h5>
          <Nav className="flex-column">
            <Nav.Link onClick={() => handleNavLinkClick('#home')} className="text-white-50">
              Inicio
            </Nav.Link>
            <Nav.Link onClick={() => handleNavLinkClick('#services')} className="text-white-50">
              Servicios
            </Nav.Link>
            <Nav.Link onClick={() => handleNavLinkClick('#blog')} className="text-white-50">
              Blog
            </Nav.Link>
          </Nav>   
        </Col>
      </Row>

      <hr className="bg-secondary" />
      <Row>
        <Col className="text-center">
          <p className="mb-0 text-white-50">&copy; {new Date().getFullYear()} MLS Comercio Internacional. Todos los derechos reservados.</p>
        </Col>
      </Row>
    </Container>
  </footer>
  );
};

export default Footer;