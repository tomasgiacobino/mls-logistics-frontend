import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import fondoGestion from '../assets/images/Fondos/fondBarco.jpg';

const whatsappNumber = '+5493492213436';
const whatsappMessage = 'Quiero más información sobre Gestión Comex para mi empresa';

const GestionComex = () => {

  const handleWhatsapp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      {/* Hero */}
      <section className="py-5 hero-gestion text-white d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${fondoGestion})` }}>
        <div className='gestion-content w-100'>
          <Container>
            <Row className="align-items-center g-4">
              <Col lg={6}>
                <h1 className="fw-bold display-4 mb-3">Tu departamento de <span className="fw-bold display-4 text-primary">comercio exterior</span></h1>
                <p className="lead">
                  No todas las empresas tienen un área de comex propia. Y no deberían necesitarla para operar de forma profesional. Nos integramos como tu equipo: gestionamos importaciones y exportaciones, coordinamos con todos los actores del proceso y te mantenemos informado en cada etapa.
                </p>
              </Col>
              <Col lg={6}>
                <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/JoEKtFNh0_E"
                    title="Video Gestión Comex"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Lo que gestionamos */}
      <section className="py-5 bg-light text-dark">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h3 className="fw-bold text-primary mb-4">Lo que gestionamos por vos:</h3>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Gestión integral de operaciones de importación y exportación.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Coordinación con despachantes de aduana y operadores logísticos.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Seguimiento y tracking de la carga en tiempo real.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Optimización de costos y tiempos en cada operación.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Comunicación clara y reporte de avance en cada etapa.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Resolución de imprevistos y toma de decisiones operativas.</span>
                </li>
              </ul>
              <p className="fw-bold fst-italic mt-4">Tenés todo el músculo de un departamento de comercio exterior. Sin tener que armarlo.</p>
              <Button
                variant="success"
                className="mt-3 px-4 py-3"
                onClick={handleWhatsapp}
                style={{ fontWeight: 900, fontSize: '1.1rem' }}
              >
                <FaWhatsapp className="me-2 fs-3 mb-1" />
                Conocé el plan para tu empresa
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default GestionComex;