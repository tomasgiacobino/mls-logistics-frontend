import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

import dhlLogo from '../assets/images/partners/dhl.png';
import fedexLogo from '../assets/images/partners/fedex.png';
import ups from '../assets/images/partners/ups2.png';
import maersk from '../assets/images/partners/maersk.png';
import hapag from '../assets/images/partners/hapag.png';
import React from 'react';

const Partners = () => {
  return (
    <section className="py-5 partnersSection">
      <Container>
        <h2 className="text-center mb-3 text-primary">Red global de operadores logísticos</h2>
        <p className="text-center mb-5 lead">
          Trabajamos con una red internacional de operadores logísticos, navieras y aliados estratégicos que nos permite acompañar operaciones en distintas partes del mundo con seguridad y eficiencia.
        </p>
        <div className="partners-track-wrapper mb-5">
          <div className="partners-track">
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                <img src={dhlLogo} alt="DHL Logo" style={{ height: '100px', objectFit: 'contain', verticalAlign: 'middle' }} />
                <img src={fedexLogo} alt="FedEx Logo" style={{ height: '100px', objectFit: 'contain', }} />
                <img src={ups} alt="UPS Logo" style={{ height: '80px', objectFit: 'contain' }} />
                <img src={maersk} alt="Maersk Logo" style={{ height: '100px', maxWidth: '200px', objectFit: 'contain', marginTop: '20px' }} />
                <img src={hapag} alt="Hapag-Lloyd Logo" style={{ height: '150px', maxWidth: '200px', objectFit: 'contain' }} />
              </React.Fragment>
            ))}
          </div>
        </div>
        <h4 className="text-center fw-bold mb-4">¿Qué significa esto para tu empresa?</h4>
        <Row className="justify-content-center">
          <Col lg={8}>
            <ul className="list-unstyled">
              <li className="d-flex align-items-start gap-3 mb-3">
                <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                <span>Acceso a múltiples opciones logísticas según tu necesidad</span>
              </li>
              <li className="d-flex align-items-start gap-3 mb-3">
                <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                <span>Optimización de costos en cada operación</span>
              </li>
              <li className="d-flex align-items-start gap-3 mb-3">
                <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                <span>Mayor previsibilidad en tiempos de entrega</span>
              </li>
              <li className="d-flex align-items-start gap-3 mb-3">
                <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                <span>Reducción de riesgos en el proceso</span>
              </li>
              <li className="d-flex align-items-start gap-3 mb-3">
                <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                <span>Posibilidad de escalar tus importaciones o exportaciones</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Partners;