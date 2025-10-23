
import { Container } from 'react-bootstrap';

const FailurePage = () => {
  return (
    <Container className="text-center my-5">
      <h2>¡Pago Fallado!</h2>
      <p>Disculpa, vuelva a intentarlo mas tarde.</p>
    </Container>
  );
};

export default FailurePage;