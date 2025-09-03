// src/pages/Exportacion.tsx
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaGlobe, FaChartLine, FaCheckCircle, FaWhatsapp, FaShieldAlt } from 'react-icons/fa';
import fondoExportacion from '../assets/images/camion2.jpg';

const Exportacion = () => {
  const whatsappNumber = 543492419489;
  const whatsappMessage = "Hola, me gustaría recibir más información sobre los servicios de exportación.";

  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Sección de Introducción */}
      <section 
        className="py-5 text-white hero-exportacion d-flex justify-content-center align-items-center" 
        style={{ backgroundImage: `url(${fondoExportacion})` }}
      >
        <div className='exportacion-content d-flex align-items-center'>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={10}>
                <h1 className="fw-bold display-4">
                  🌍 <span className="text-info">Exportá</span> con nosotros
                </h1>
                <p className="lead mt-3 fs-5">
                  El mercado internacional está lleno de oportunidades y tu producto puede ser parte de él. Vender al mundo no solo significa aumentar tus ingresos, sino también hacer crecer tu marca de manera exponencial.
                </p>
                <p className="lead mt-3 fs-5">
                  En MM Importaciones te acompañamos a transformar tu emprendimiento o empresa en un jugador global, conectándote con clientes de distintos países y guiándote en cada paso del proceso exportador.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Sección de Beneficios */}
      <section className="py-5 bg-light text-dark">
        <Container>
          <h2 className="text-center fw-bold mb-5">
            <FaCheckCircle className="me-2 text-info" /> ¿Por qué exportar?
          </h2>
          <Row className="g-4 justify-content-center">
            <Col md={6} lg={4}>
              <Card className="h-100 text-center p-4 border shadow-sm">
                <FaGlobe className="h1 text-info mx-auto mb-3" />
                <Card.Title className="fw-bold">Multiplicás tu alcance</Card.Title>
                <Card.Text>
                  Llegás a nuevos consumidores fuera de Argentina.
                </Card.Text>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 text-center p-4 border shadow-sm">
                <FaChartLine className="h1 text-info mx-auto mb-3" />
                <Card.Title className="fw-bold">Diversificás riesgos</Card.Title>
                <Card.Text>
                  No dependés solo del mercado local y te protegés de la volatilidad.
                </Card.Text>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 text-center p-4 border shadow-sm">
                <FaShieldAlt className="h1 text-info mx-auto mb-3" />
                <Card.Title className="fw-bold">Potenciás tu rentabilidad</Card.Title>
                <Card.Text>
                  Aprovechás ventajas competitivas en precios y demanda global.
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección de Llamada a la Acción (CTA) */}
      <section className="py-5 text-dark">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <p className="lead fw-bold mt-3">
                Con nuestra experiencia en comercio exterior, vas a poder conquistar mercados internacionales de forma segura, legal y estratégica.
              </p>
              <h3 className="fw-bold text-info mt-4">
                👉 Animate a dar el salto: el mundo está listo para tus productos.
              </h3>
              <div className="mt-4">
                <Button
                  variant="success"
                  onClick={handleSendMessage}
                  className="fw-bold p-3"
                >
                  <FaWhatsapp className="me-2" />
                  Envía un mensaje de consulta
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Exportacion;