import {Container, Row, Col} from 'react-bootstrap'
 import backgroundImage1 from '../assets/images/fondoHero.jpg'
// import heroImage1 from '../assets/images/camion4.jpg'


const Hero = () => {
    return (
      <section className="hero-section bg-dark text-light py-5" id="home"
      style={{backgroundImage: `url(${backgroundImage1})`}}>
        <div className='hero-content'>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-4 fw-bold mb-3 text-info">Manu Muñoz Importaciones</h1>
  
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

              <p className="fst-italic fw-medium text-light mb-4" style={{ fontSize: '1.1rem' }}>
                Hoy acompaño a empresas y emprendedores a aprovechar las mejores oportunidades del mercado global y crecer sin fronteras.
              </p>
  
              {/* Espacio para la foto de Manu */}
              {/* Si tienes la imagen, puedes agregarla aquí */}
              {/* <img src={manuImage} alt="Manu Muñoz" className="img-fluid rounded-circle mt-4" style={{ maxWidth: '200px' }} /> */}
  
            </Col>
  
            <Col md={6}>
              <div className="ratio ratio-16x9 bg-secondary rounded" style={{ minHeight: '300px' }}>
                <p className="text-center text-light d-flex align-items-center justify-content-center">
                  Espacio para video de presentación
                </p>
              </div>
            </Col>
          </Row>
        </Container>
          </ div>
      </section>
    );
  };
export default Hero;