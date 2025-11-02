import { Container, Row, Col, Button } from 'react-bootstrap';
// import { useSearchParams } from 'react-router-dom';

const PendingPage = () => {
  // const [searchParams] = useSearchParams();
  // console.log('Pago pendiente:', { 
  //   paymentId: searchParams.get('payment_id'),
  //   status: searchParams.get('status')
  // });

  return (
    <Container className="py-5 text-center">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <div className="mb-4">
            <i className="bi bi-hourglass-split text-warning" style={{ fontSize: '4rem' }}></i>
          </div>
          <h1 className="display-5 fw-bold">Pago en proceso</h1>
          <p className="lead mt-3">
            Tu pago está siendo procesado. Esto puede tardar unos minutos.
          </p>
          <div className="mt-4">
            <Button variant="outline-secondary" href="/">
              Volver al inicio
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PendingPage;