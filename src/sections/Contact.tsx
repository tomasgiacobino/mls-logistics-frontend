import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import type { FormEvent } from 'react';

const Contact = () => {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const name = (document.getElementById('formBasicName') as HTMLInputElement).value;
        const email = (document.getElementById('formBasicEmail') as HTMLInputElement).value;
        const phone = (document.getElementById('formBasicPhone') as HTMLInputElement).value;
        const message = (document.getElementById('formBasicMessage') as HTMLTextAreaElement).value;


        const whatsappMessage = `¡Hola!%20Mi%20nombre%20es%20${name},%20mi%20email%20es%20${email}%20y%20mi%20teléfono%20es%20${phone}.%20Te%20quiero%20consultar%20por:%20${message}`;

        const whatsappLink = `https://wa.me/543874069341?text=${whatsappMessage}`;

        window.open(whatsappLink, '_blank');
    }

  return (
    <section className="py-5" id="contact">
      <Container>
        <h2 className="text-center mb-5 text-primary">Cotiza tu proyecto</h2>
        <Row className="justify-content-center">
          <Col lg={6} md={12}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="tel" placeholder="Ingresa tu teléfono" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Cuéntanos sobre tu proyecto (ej: tipo de carga, origen, destino)" />
              </Form.Group>

              <Button variant="success" type="submit" className="w-100">
                Enviar Consulta
              </Button>
            </Form>
          </Col>
          {/* <Col md={6} className="text-center">
            <h3 className="text-primary mb-4">Información de Contacto</h3>
            <p>
              <i className="bi bi-geo-alt-fill text-info me-2"></i>
              Tu Dirección aquí
            </p>
            <p>
              <i className="bi bi-envelope-fill text-info me-2"></i>
              info@mlslogistics.com
            </p>
            <p>
              <i className="bi bi-telephone-fill text-info me-2"></i>
              +54 9 11 1234-5678
            </p>
            <p>
              <i className="bi bi-whatsapp text-info me-2"></i>
              <a href="" target="_blank" rel="noopener noreferrer">Envía un WhatsApp</a>
            </p>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Contact;