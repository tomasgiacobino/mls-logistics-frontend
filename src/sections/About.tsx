import { Container, Row, Col } from "react-bootstrap";
import imgAbout from '../assets/images/camion1.jpg';

const About = () => {
    return(
        <section className="py-5" id="about">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md={6}>
              <img
              src={imgAbout}
              alt="Camion"
              className="img-fluid">
              </img>
              {/* <img src={manuImage} alt="Manu Muñoz" className="img-fluid rounded-circle" /> */}
            </Col>
            <Col md={6} className="p-4">
              <h2 className="mb-4 text-primary">Sobre Nosotros</h2>
              <p className="lead">
                Con más de 10 años de experiencia en el comercio internacional, nos especializamos en ofrecer soluciones de logística y asesoramiento aduanero personalizadas.
              </p>
              <p>
                Nuestra misión es simplificar tus proyectos de importación y exportación, proporcionando un servicio transparente y eficiente que te permita concentrarte en el crecimiento de tu negocio.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    );
};

export default About;