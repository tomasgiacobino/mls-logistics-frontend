// src/components/Footer.tsx
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

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
        <Col md={6} className="mb-4">
          <h5>
            <span className="text-info fw-bold">MLS</span>{' '}
            <span className="text-light">INTERNATIONAL LOGISTICS</span>
          </h5>
          <p className="text-white">
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
          <p className="mb-0 text-white-50">&copy; {new Date().getFullYear()} MLS International Logistics. Todos los derechos reservados.</p>
        </Col>
      </Row>
    </Container>
  </footer>
  );
};

export default Footer;