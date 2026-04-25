import { Container, Row, Col } from 'react-bootstrap'
import backgroundImage1 from '../assets/images/fondoHero.jpg'

const Hero = () => {
    return (
      <section className="hero-section bg-dark text-white py-5" id="home"
      style={{backgroundImage: `url(${backgroundImage1})`}}>
        <div className='hero-content'>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-4 fw-bold mb-3 text-primary">Tu socio estratégico en comercio exterior</h1>
              <p className="lead mb-4">
                En MLS Comercio Internacional acompañamos a empresas y emprendedores a proyectarse a nivel global.
              </p>
              <p className="mb-4">
                Brindamos soluciones integrales en comercio exterior: conectamos tu negocio con proveedores, clientes y aliados estratégicos en distintas partes del mundo, y gestionamos cada operación de punta a punta.
              </p>
              <p className="fst-italic fw-medium text-white mb-4" style={{ fontSize: '1.2rem' }}>
                Desde tu primera importación hasta la expansión de tu empresa a nuevos mercados, trabajamos para que cada operación sea más simple, segura y rentable.
              </p>
            </Col>
            <Col md={6}>
              <div
                className="d-flex justify-content-center align-items-center mt-4"
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  background: '#1a1a2e',
                  borderRadius: '12px',
                  border: '2px dashed #0d6efd',
                  color: '#0d6efd',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  padding: '2rem'
                }}
              >
                VIDEO PRESENTACIÓN — PENDIENTE
              </div>
            </Col>
          </Row>
        </Container>
        </div>
      </section>
    );
};

export default Hero;