import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import fondoAgente from '../assets/images/Fondos/paisaje2.jpg';

const whatsappNumber = '+5493492213436';
const whatsappMessage = 'Estoy interesado en el servicio de Agente de Compras';

const AgenteDeCompras = () => {

  const handleWhatsapp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      {/* Hero */}
      <section className="py-5 hero-agente text-white d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${fondoAgente})` }}>
        <div className='agente-content w-100'>
          <Container>
            <Row className="align-items-center g-4">
              <Col lg={6}>
                <h1 className="fw-bold display-4 mb-3">Agentes de Compras</h1>
                <h2 className="text-primary mb-4">Tu equipo de compras en China, EE.UU. y Europa</h2>
                <p className="lead">
                  Investigamos el mercado por vos, verificamos proveedores confiables y gestionamos el proceso de cotización completo. Vos recibís un informe consolidado y tomás la decisión con información real.
                </p>
              </Col>
              <Col lg={6}>
                <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/gnu8ezYcd4Y"
                    title="Video Agente de Compras"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Lo que hacemos */}
      <section className="py-5 bg-light text-dark">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h3 className="fw-bold text-primary mb-4">Lo que hacemos por vos:</h3>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Investigación de mercado internacional para tu producto o rubro específico.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Búsqueda y verificación de proveedores en China, Estados Unidos y Europa.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Solicitud de cotizaciones y análisis comparativo con criterios claros.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Informe ejecutivo con precios, tiempos, condiciones y recomendaciones.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Asesoramiento sobre qué proveedor conviene según tu objetivo (precio, calidad, rapidez).</span>
                </li>
              </ul>
              <p className="fw-bold fst-italic mt-4">Vos decidís con información real. Nosotros hacemos el trabajo de campo.</p>
              <Button
                variant="success"
                className="mt-3 px-4 py-3"
                onClick={handleWhatsapp}
                style={{ fontWeight: 900, fontSize: '1.1rem' }}
              >
                <FaWhatsapp className="me-2 fs-3 mb-1" />
                Quiero el informe para mi producto
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AgenteDeCompras;