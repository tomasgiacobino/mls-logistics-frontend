import { Container, Row, Col, Button } from 'react-bootstrap';
// import { useSearchParams } from 'react-router-dom';

const FailurePage = () => {
  // const [searchParams] = useSearchParams();
  // console.log('Pago fallido:', { 
  //   paymentId: searchParams.get('payment_id'),
  //   status: searchParams.get('status')
  // });

  return (
    <Container className="py-5 text-center">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <div className="mb-4">
            <i className="bi bi-x-circle-fill text-danger" style={{ fontSize: '4rem' }}></i>
          </div>
          <h1 className="display-5 fw-bold">Oops... algo salió mal</h1>
          <p className="lead mt-3">
            No pudimos procesar tu pago. No te preocupes, no se ha cobrado ningún monto.
          </p>
          <p>
            Puedes intentar nuevamente o contactarnos si necesitas ayuda.
          </p>
          <div className="mt-4">
            <Button variant="outline-primary" href="/curso" className="me-2">
              Intentar de nuevo
            </Button>
            <Button variant="secondary" href="/" className="ms-2">
              Volver al inicio
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FailurePage;