import { Container, Row, Col } from 'react-bootstrap';

// Importa las imágenes de los logos de tus assets
import dhlLogo from '../assets/images/dhl.png';
import fedexLogo from '../assets/images/fedex.png';
import ups from '../assets/images/ups2.png';

const Partners = () => {
  return (
    <section className="bg-light py-5" style={{maxHeight: '290px'}}>
      <Container>
        <h2 className="text-center mb-1 text-primary">Partners Estratégicos</h2>
        <Row className="d-flex flew-nowrap justify-content-center align-items-center" style={{ gap: '30px' }}>
          
          <Col xs={4} md={4} lg={2} className="text-center mb-4">
            <img src={dhlLogo} alt="DHL Logo" className="img-fluid" style={{ maxHeight: '200px' }} />
          </Col>

          
          <Col xs={4} md={4} lg={2} className="text-center">
            <img src={fedexLogo} alt="FedEx Logo" className="img-fluid" style={{ maxHeight: '200px' }} />
          </Col>

          <Col xs={4} md={4} lg={2} className="text-center">
            <img src={ups} alt="Ups Logo" className="img-fluid" style={{ maxHeight: '120px' }} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Partners;