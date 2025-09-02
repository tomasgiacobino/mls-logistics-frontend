import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row className="justify-content-center text-center text-md-start">
          {/* Columna de Información de la Empresa */}
          <Col md={6} className="mb-4 mb-md-0">
            <h5 className="text-info fw-bold">MLS INTERNATIONAL LOGISTICS</h5>
            <p>Soluciones logísticas integrales para tus proyectos de importación y exportación.</p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="#" className="text-light me-3">
                <i className="bi bi-linkedin h4"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="bi bi-facebook h4"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-instagram h4"></i>
              </a>
            </div>
          </Col>

          {/* Columna de Enlaces Rápidos */}
          <Col md={6} className="text-center text-md-end">
            <h5 className="text-info fw-bold">Navegación</h5>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="text-light">Inicio</Nav.Link>
              {/* <Nav.Link href="#about" className="text-light">Sobre Nosotros</Nav.Link> */}
              <Nav.Link href="#services" className="text-light">Servicios</Nav.Link>
              {/* <Nav.Link href="#contact" className="text-light">Contacto</Nav.Link> */}
            </Nav>
          </Col>
        </Row>

        <hr className="bg-light my-4" />

        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} MLS International Logistics. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;