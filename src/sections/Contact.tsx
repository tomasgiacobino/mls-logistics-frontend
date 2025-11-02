// src/components/Contact.tsx
import  { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaWhatsapp, FaEnvelope, FaCopy } from 'react-icons/fa';

const Contact = () => {
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const whatsappMessage = encodeURIComponent('Hola, me contacto para pedirte más información sobre MLS International Logistics');
  const whatsappNumber = 'tunumerodewhatsapp';
  const emailAddress = 'tumail@ejemplo.com';

  const handleWhatsappClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setShowCopyMessage(true);
    setTimeout(() => {
      setShowCopyMessage(false);
    }, 2000); // El mensaje se oculta después de 2 segundos
  };

  return (
    <section className="py-5" id="contact">
      <style type="text/css">
        {`
          .email-copy-container {
            position: relative;
          }
          .copy-message {
            position: absolute;
            bottom: -25px; /* Ajusta la distancia del mensaje */
            left: 50%;
            transform: translateX(-50%);
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            white-space: nowrap;
          }
          .copy-message.show {
            opacity: 1;
          }
        `}
      </style>
      <Container>
        <Row className="justify-content-center">
          <Col md={10} className="text-center">
            <h2 className="fw-bold mb-4">Cotiza tu proyecto</h2>
            <p className="text-muted mb-5">
              ¿Listo para empezar? Contáctanos y obtén una cotización en menos de 24 horas.
            </p>
            <Row className="justify-content-center">
              <Col xs={12} sm={6} md={5} lg={4} className="mb-3 mb-sm-0">
                <Button
                  variant="success"
                  size="lg"
                  className="w-100"
                  onClick={handleWhatsappClick}
                >
                  <FaWhatsapp className="me-2" /> Contáctanos por WhatsApp
                </Button>
              </Col>
              <Col xs={12} sm={6} md={5} lg={4}>
                <div className="email-copy-container">
                  <InputGroup size="lg" className="w-100">
                    <InputGroup.Text className="bg-primary text-white border-primary">
                      <FaEnvelope />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      value={emailAddress}
                      readOnly
                      className="bg-white text-dark border-primary"
                    />
                    <Button variant="outline-primary" onClick={copyEmailToClipboard}>
                      <FaCopy />
                    </Button>
                  </InputGroup>
                  <small className={`text-success fw-bold copy-message ${showCopyMessage ? 'show' : ''}`}>
                    ¡Email copiado!
                  </small>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;