import {Container, Row, Col} from 'react-bootstrap'
 import backgroundImage1 from '../assets/images/fondoHero.jpg'
// import heroImage1 from '../assets/images/camion4.jpg'


const Hero = () => {
    return (
      <section className="hero-section bg-dark text-white py-5" id="home"
      style={{backgroundImage: `url(${backgroundImage1})`}}>
        <div className='hero-content'>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-4 fw-bold mb-3 text-primary">Manu Muñoz Importaciones</h1>
  
              <h3 className="mb-3">👋 Bienvenido/a</h3>
              <p className="lead mb-4">
                Hola, soy Manu Muñoz, especialista en comercio internacional y logística con más de 20 años de experiencia.
              </p>
  
              <p className="fw-bold">A lo largo de mi trayectoria trabajé en:</p>
              <ul className="list-unstyled">
                <li>✅ Importaciones y exportaciones</li>
                <li>✅ Registros de marcas y patentes</li>
                <li>✅ Representación de marcas nacionales e internacionales</li>
                <li>✅ Marketing digital & e-commerce</li>
                <li>✅ Asesoramiento a pymes, retailers y emprendedores</li>
              </ul>

              <p className="fst-italic fw-medium text-white mb-4" style={{ fontSize: '1.2rem' }}>
                Hoy acompaño a empresas y emprendedores a aprovechar las mejores oportunidades del mercado global y crecer sin fronteras.
              </p>
  
  
            </Col>
  
            <Col md={6}>
            <div className="d-flex justify-content-center align-items-center mt-4">
            <a 
              href="https://www.youtube.com/shorts/OEZ0GegIo-M" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-decoration-none"
              style={{
                display: 'block',
                width: '100%',
                maxWidth: '500px',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
              }}
            >
              <img 
                src="https://img.youtube.com/vi/OEZ0GegIo-M/mqdefault.jpg" 
                alt="Ver video en YouTube"
                className="w-100"
                style={{ borderRadius: '12px 12px 0 0', objectFit: 'cover' }}
              />
              <div className="p-3 text-center">
                <p className="mb-0 text-primary fw-bold fs-5" style={{ fontSize: '0.9rem' }}>
                  🎥 Ver video en YouTube
                </p>
              </div>
            </a>
          </div>
            </Col>
          </Row>
        </Container>
          </ div>
      </section>
    );
  };
export default Hero;