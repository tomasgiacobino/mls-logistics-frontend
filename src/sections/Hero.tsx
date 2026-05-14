import { Container, Row, Col } from 'react-bootstrap'
import heroBarco from '../assets/videos/fondohero.mp4'

const Hero = () => {
    return (
      <section className="hero-section text-white py-5" id="home">
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 80%',
            zIndex: 0
          }}
        >
          <source src={heroBarco} type="video/mp4" />
        </video>
        <div className='hero-content'>
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
                <div style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: '12px',
                  padding: '1.5rem'
                }}>
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
                </div>
              </Col>
              <Col md={6}>
                <div
                  className="d-flex justify-content-center align-items-center mt-4"
                  style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    background: 'rgba(26,26,46,0.8)',
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