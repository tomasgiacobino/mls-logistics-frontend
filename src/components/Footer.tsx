import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/logos/Recurso 15.png';
import { FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const gmapsLink = "https://www.google.com/maps?q=MLS+COMERCIO+INTERNACIONAL+SAS,+Garibaldi+3660,+Rafaela,+Santa+Fe&fid=0x95caaf54fec45bb3:0xe0444b939cc48b45&entry=gps&shh=CAE&lucs=94297699,94284493,94231188,94280568,47071704,94218641,94282134,94286869&_ep=CAISEjI2LjE1LjEuODk1MzA4MDUxMBgAIIgnKkgsOTQyOTc2OTksOTQyODQ0OTMsOTQyMzExODgs0OTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkFS&skid=d21f2360-0831-44c3-93ec-86ab4d8e01cd&q_st=ic";

  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="align-items-start g-4 mb-3">

          {/* Logo + tagline */}
          <Col md={4} className="d-flex flex-column align-items-center align-items-md-start">
            <div className="d-flex flex-row flex-md-column align-items-center align-items-md-start gap-3 gap-md-0">
              <img
                src={logo}
                alt="Logo MLS Comercio Internacional"
                height="90"
              />
              <p className="text-white-50 mt-md-2 mb-0 small footer-tagline" style={{ maxWidth: '250px' }}>
                Tu aliado estratégico en soluciones logísticas y de comercio exterior.
              </p>
            </div>
          </Col>

          {/* Contacto */}
          <Col md={4} className="d-flex flex-column gap-2">
            <p className="fw-bold mb-2">Contacto</p>
            <a
              href={gmapsLink}
              target="_blank"
              rel="noreferrer"
              className="text-white-50 text-decoration-none d-flex align-items-center gap-2 small"
            >
              <FaMapMarkerAlt className="text-primary" />
              Garibaldi 3660, Rafaela, Santa Fe
            </a>
            <a
              href="https://wa.me/5493492213436"
              target="_blank"
              rel="noreferrer"
              className="text-white-50 text-decoration-none d-flex align-items-center gap-2 small"
            >
              <FaWhatsapp className="text-primary" />
              +54 9 3492 21-3436
            </a>
            <a
              href="https://wa.me/5493492220137"
              target="_blank"
              rel="noreferrer"
              className="text-white-50 text-decoration-none d-flex align-items-center gap-2 small"
            >
              <FaWhatsapp className="text-primary" />
              +54 9 3492 22-0137
            </a>
            <a
              href="mailto:info@mlscomex.com"
              className="text-white-50 text-decoration-none d-flex align-items-center gap-2 small"
            >
              <FaEnvelope className="text-primary" />
              info@mlscomex.com
            </a>
          </Col>

          {/* Redes */}
          <Col md={4} className="d-flex flex-column align-items-center align-items-md-start">
            <p className="fw-bold mb-3">Seguinos</p>
            <div className="d-flex gap-3">
              <a
                href="https://www.instagram.com/mlscomex/"
                target="_blank"
                rel="noreferrer"
                className="text-white-50 fs-4"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/channel/UCS5Y_w6qBh9EloAokn-OxrQ"
                target="_blank"
                rel="noreferrer"
                className="text-white-50 fs-4"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/company/mls-comercio-internacional/?viewAsMember=true"
                target="_blank"
                rel="noreferrer"
                className="text-white-50 fs-4"
              >
                <FaLinkedin />
              </a>
            </div>
          </Col>

        </Row>

        <hr className="my-3 bg-secondary" />

        <Row>
          <Col className="text-center">
            <p className="mb-0 text-white-50 small">
              &copy; {new Date().getFullYear()} MLS Comercio Internacional. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;