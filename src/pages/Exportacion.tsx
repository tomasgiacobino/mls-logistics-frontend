// src/pages/Exportacion.tsx
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaGlobe, FaArrowUp, FaCheckCircle, FaWhatsapp, FaShieldAlt } from 'react-icons/fa';
import fondoExportacion from '../assets/images/Fondos/camion2.jpg';

const Exportacion = () => {
  const whatsappNumber = '+5493492213436';
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
                  🌍 <span className="text-primary">Exportá</span> con nosotros
                </h1>
                <p className="lead mt-3 fs-4">
                  El mercado internacional está lleno de oportunidades y <span className='fw-bold'>tu producto puede ser parte de él.</span> Vender al mundo no solo significa aumentar tus ingresos, sino también hacer crecer tu marca de manera exponencial y posicionarla en nuevos mercados.
                </p>
                <p className="lead mt-3 fs-4">
                  En MM Importaciones te acompañamos a transformar tu emprendimiento o empresa en un <span className='fw-bold'>jugador global</span>,
                   conectándote con clientes de distintos países y guiándote en cada paso del proceso exportador.
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
            <FaCheckCircle className="me-2 text-primary" /> ¿Por qué exportar?
          </h2>
          <Row className="g-4 justify-content-center">
            <Col md={6} lg={4}>
              <Card className="h-100 text-center p-4 border shadow-sm">
                <FaGlobe className="h1 text-primary mx-auto mb-3" />
                <Card.Title className="fw-bold">Multiplicás tu alcance</Card.Title>
                <Card.Text>
                  Llegás a nuevos consumidores fuera de Argentina.
                </Card.Text>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 text-center p-4 border shadow-sm">
                <FaArrowUp className="h1 text-primary mx-auto mb-3" />
                <Card.Title className="fw-bold">Diversificás riesgos</Card.Title>
                <Card.Text>
                  No dependés solo del mercado local.
                </Card.Text>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 text-center p-4 border shadow-sm">
                <FaShieldAlt className="h1 text-primary mx-auto mb-3" />
                <Card.Title className="fw-bold">Potenciás tu rentabilidad</Card.Title>
                <Card.Text>
                  Aprovechás ventajas competitivas en precios y demanda global.
                </Card.Text>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 text-center p-4 border shadow-sm">
                <FaShieldAlt className="h1 text-primary mx-auto mb-3" />
                <Card.Title className="fw-bold">Construís marca internacional</Card.Title>
                <Card.Text>
                  Tu empresa gana prestigio y valor.
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
              <p className="lead mt-3 fs-4">
                Con nuestra experiencia en comercio exterior, vas a poder <span className='fw-bold'>conquistar mercados internacionales</span>  de forma segura, legal y estratégica.
              </p>
              <h3 className="text-primary mt-4">
                👉 Animate a dar el salto: <span className='fw-bold'>El mundo está listo para tus productos.</span>
              </h3>
              <div className="mt-4">
                <Button
                  variant="success"
                  onClick={handleSendMessage}
                  className="fw-bold p-3"
                >
                  <FaWhatsapp className="me-2 fs-3" />
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