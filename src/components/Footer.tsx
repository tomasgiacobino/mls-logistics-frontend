import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/logos/Recurso 15.png';
import logoMM from '../assets/images/logos/Recurso 5.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="align-items-center mb-3">
          <Col xs="12" className="d-flex justify-content-between align-items-center">

            <div>
              <img
                src={logo}
                alt="Logo MLS International Logistics"
                height="90"
              />
            </div>

            <div className="text-center flex-grow-1 mx-3">
              <p className="lead mb-0">
                Tu aliado estratégico en soluciones logísticas y de comercio exterior.
              </p>
            </div>


            <div>
              <img
                src={logoMM}
                alt="Logo MM Importaciones"
                height="90"
              />
            </div>
          </Col>
        </Row>


        <hr className="my-3 bg-secondary" />


        <Row>
          <Col className="text-center">
            <p className="mb-0 text-white-50">
              &copy; {new Date().getFullYear()} MLS Comercio Internacional. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;