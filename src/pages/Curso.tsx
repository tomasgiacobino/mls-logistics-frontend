import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import fondo from '../assets/images/Fondos/f1.jpg';
import ReactGA from 'react-ga4';

const whatsappNumber = '+5493492213436';

const handleBuyClick = async () => {
  ReactGA.event('checkout_programa_click');
  try {
    const response = await fetch('https://mls-logistics-backend.onrender.com/create-order', {
      method: 'POST',
    });
    const data = await response.json();
    window.open(data.init_point, '_blank');
  } catch (error) {
    console.error('Error al iniciar el proceso de pago:', error);
    alert('Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo.');
  }
};

const Curso = () => {
  return (
    <>
      {/* 3.9.1 Hero */}
      <section className="py-5 curso-section" style={{ backgroundImage: `url(${fondo})` }}>
        <div className='curso-content'>
          <Container>
            <Row className="align-items-center">
              <Col lg={12} className="text-white text-center">
                <h1 className="fw-bold display-4 mb-4">Aprendé a importar con claridad, estrategia y sin errores</h1>
                <p className="lead mb-3">
                  Te acompañamos con herramientas reales y asesoramiento profesional para que puedas importar de forma segura, rentable y con un camino claro desde el primer paso.
                </p>
                <p className="mb-3">
                  Importar no es complicado cuando sabés cómo hacerlo.
                </p>
                <p>
                  Después de años trabajando en comercio internacional, armamos un programa que reúne toda la información, las herramientas y el acompañamiento necesarios para que puedas avanzar sin tropezar con los errores que todos cometen al empezar.
                </p>
                <p className="fst-italic">Desde aprender lo básico hasta avanzar con tu proyecto con acompañamiento directo.</p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* 3.9.2 ¿Te pasa esto? */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold text-primary text-center mb-4">¿Te pasa esto?</h2>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>No sabés por dónde empezar a importar.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Tenés miedo de perder plata por errores que hoy no podés anticipar.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>No entendés los costos reales ni cuánto impacta cada variable.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>No sabés cómo saber si un proveedor es confiable.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Sentís que es todo más complicado de lo que debería ser.</span>
                </li>
              </ul>
              <p className="fw-bold text-center mt-4 fs-5">No estás solo. Y tiene solución.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3.9.3 Qué incluye el programa */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="fw-bold text-primary mb-4">¿Qué incluye el programa?</h2>
              <p className="mb-4">El programa se organiza en tres etapas complementarias. No se contrata de a una: el valor está en el combo.</p>
              <div className="mb-4">
                <h5 className="fw-bold">Etapa 1 — Guía del Importador 2026</h5>
                <p>Un paso a paso claro y práctico para que aprendas a importar desde cero. Incluye proveedores, negociación, costos, documentación y los errores más frecuentes que hacen perder dinero.</p>
              </div>
              <div className="mb-4">
                <h5 className="fw-bold">Etapa 2 — Reunión de asesoramiento personalizado</h5>
                <p>Una reunión 1 a 1 con nuestro especialista. Analizamos tu proyecto o idea de importación, respondemos todas tus dudas y te ayudamos a tomar decisiones estratégicas desde el primer momento.</p>
              </div>
              <div className="mb-4">
                <h5 className="fw-bold">Etapa 3 — Acompañamiento hasta recibir la mercadería</h5>
                <p>Seguimiento de cada etapa: compra, logística, aduana y entrega. Soporte permanente para resolver imprevistos y coordinar con todos los actores. No te dejamos solo hasta que el producto está en tus manos.</p>
              </div>
            </Col>
            <Col lg={6}>
              {/* PENDIENTE: reemplazar por video de Leo en formato 16:9 */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  background: '#1a1a2e',
                  borderRadius: '12px',
                  border: '2px dashed #0d6efd',
                  color: '#0d6efd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  textAlign: 'center',
                  padding: '2rem'
                }}
              >
                VIDEO LEO — PENDIENTE
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3.9.4 Diferencial */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold text-primary text-center mb-4">Por qué el Programa Integral es distinto</h2>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Acompañamiento real durante tu proceso de importación, no solo teoría.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Seguimiento durante tus primeros pasos, donde se cometen el 80% de los errores.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Soporte para validar decisiones clave antes de invertir.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Respaldo en los momentos críticos de la operación.</span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3.9.5 Beneficios estratégicos */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold text-primary text-center mb-4">Lo que vas a lograr</h2>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Aprendés y aplicás en simultáneo: no te quedás solo en la teoría.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Reducís al mínimo el margen de error.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Tenés claridad antes de invertir, no después.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Avanzás más rápido y con más seguridad.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Tomás cada decisión con respaldo profesional.</span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3.9.6 ¿Por qué elegirnos? */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold text-primary text-center mb-4">¿Por qué elegirnos?</h2>
              <p className="text-center fst-italic mb-4">Porque no solo vendemos información, acompañamos decisiones.</p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Experiencia real y verificable en comercio internacional.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Explicaciones simples y aplicables, no teoría de manual.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Acompañamiento personalizado en cada caso.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Enfoque en rentabilidad, no solo en "saber operar".</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Cientos de clientes que ya arrancaron con nosotros.</span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3.9.7 Lo que podés lograr */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="justify-content-center g-4">
            <Col lg={8}>
              <h2 className="fw-bold text-primary text-center mb-4">Lo que podés lograr</h2>
              <Row className="g-4">
                <Col md={6}>
                  <Card className="h-100 p-4 border shadow-sm text-center">
                    <FaCheckCircle className="text-primary fs-3 mx-auto mb-3" />
                    <Card.Text>Importar con seguridad desde la primera operación.</Card.Text>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 p-4 border shadow-sm text-center">
                    <FaCheckCircle className="text-primary fs-3 mx-auto mb-3" />
                    <Card.Text>Reducir costos comprando en el exterior.</Card.Text>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 p-4 border shadow-sm text-center">
                    <FaCheckCircle className="text-primary fs-3 mx-auto mb-3" />
                    <Card.Text>Crear nuevas oportunidades de negocio.</Card.Text>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 p-4 border shadow-sm text-center">
                    <FaCheckCircle className="text-primary fs-3 mx-auto mb-3" />
                    <Card.Text>Escalar tu empresa con operaciones internacionales sostenidas.</Card.Text>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3.9.8 Cierre y CTA */}
      <section className="py-5 bg-primary text-white text-center">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold display-5 mb-4">El momento de empezar es ahora</h2>
              <p className="lead mb-5">
                Podés seguir dudando o podés empezar con la información y el acompañamiento correcto.
              </p>
              <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                {/* PENDIENTE: confirmar precio real con el cliente antes de pasar a producción */}
                <button
                  className="btn btn-light text-primary fw-bold px-4 py-3"
                  onClick={handleBuyClick}
                >
                  <span className="d-none d-sm-inline">QUIERO MI PROGRAMA INTEGRAL DE ASESORAMIENTO PARA IMPORTADORES</span>
                  <span className="d-inline d-sm-none">QUIERO MI PROGRAMA INTEGRAL</span>
                </button>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, quiero más información sobre el Programa Integral de Capacitación en Importaciones.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light fw-bold px-4 py-3"
                >
                  <FaWhatsapp className="me-2" />
                  Consultar por WhatsApp
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Curso;