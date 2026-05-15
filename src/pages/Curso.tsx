import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import fondo from '../assets/images/Fondos/f1.jpg';
import ReactGA from 'react-ga4';
import CursoTabs from '../components/CursoTabs';
import mp from '../assets/images/MP/mp1.png';

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
      {/* Hero */}
      <section className="py-5 curso-section" style={{ backgroundImage: `url(${fondo})` }}>
        <div className='curso-content'>
          <Container>
            <Row className="align-items-center g-4">
              <Col lg={6} className="text-white">
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
              <Col lg={6}>
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    borderRadius: '12px',
                    overflow: 'hidden'
                  }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/bboyQinRNz4"
                    title="Programa Integral de Importaciones"
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

      {/* ¿Te pasa esto? + ¿Qué incluye el programa? */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <h2 className="fw-bold text-primary mb-4">¿Te pasa esto?</h2>
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
              <p className="fw-bold mt-4 fs-5">No estás solo. Y tiene solución.</p>
            </Col>

            <Col lg={6} className="col-border-start">
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
          </Row>
        </Container>
      </section>

      <CursoTabs />

      {/* Cierre y CTA */}
      <section className="py-5 bg-primary text-white text-center">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold display-5 mb-4">El momento de empezar es ahora</h2>
              <p className="lead mb-5">
                Podés seguir dudando o podés empezar con la información y el acompañamiento correcto.
              </p>
              <div className="d-flex flex-column flex-md-row justify-content-center gap-4 mt-2">
                <button
                  className="btn px-4 py-3 d-flex align-items-center justify-content-center gap-3 btn-mp-hover"
                  onClick={handleBuyClick}
                  style={{ background: 'white', borderRadius: '12px', minWidth: '280px' }}
                >
                  <img
                    src={mp}
                    alt="MercadoPago"
                    style={{ height: '50px' }}
                  />
                  <span className="text-black" style={{ fontWeight: 900, fontSize: '1.25rem' }}>
                    Quiero mi programa integral
                  </span>
                </button>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, quiero más información sobre el Programa Integral de Capacitación en Importaciones.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn px-4 py-3 d-flex align-items-center justify-content-center gap-2 text-white btn-wpp-hover"
                  style={{ background: '#25D366', borderRadius: '12px', minWidth: '220px', fontWeight: 900, fontSize: '1.25rem' }}
                >
                  <FaWhatsapp style={{ fontSize: '1.4rem' }} />
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