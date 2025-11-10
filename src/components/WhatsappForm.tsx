// src/components/WhatsappForm.tsx
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';

// Define la estructura de los datos que se van a recolectar
interface Field {
  name: string;
  label: string;
  placeholder: string;
  type: 'text' | 'select';
  options?: string[];
}

// Define las props que el componente va a recibir
interface WhatsappFormProps {
  title: string;
  description: string;
  fields: Field[];
  whatsappNumber: string;
  messageTemplate: (data: Record<string, string>) => string;
}

const WhatsappForm: React.FC<WhatsappFormProps> = ({
  title,
  description,
  fields,
  whatsappNumber,
  messageTemplate,
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleSendMessage = () => {
    const message = messageTemplate(formData);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    setFormData({});
  };

  return (
    <section className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="p-4 border shadow-sm">
              <Card.Body>
                <Card.Title className="text-center fw-bold mb-3 h3 text-primary">
                  {title}
                </Card.Title>
                <Card.Text className="text-center lead">
                  {description}
                </Card.Text>
                <Form>
                  <Row className="mt-4">
                    {fields.map((field) => (
                      <Col md={6} key={field.name}>
                        <Form.Group className="mb-3">
                          <Form.Label>{field.label}</Form.Label>
                          {field.type === 'text' ? (
                            <Form.Control
                              type="text"
                              placeholder={field.placeholder}
                              name={field.name}
                              value={formData[field.name] || ''}
                              onChange={(e) => {
                                const target = e.target as HTMLInputElement;
                                setFormData((prevData) => ({ ...prevData, [target.name]: target.value }));
                              }}
                            />
                          ) : (
                            <Form.Select
                              name={field.name}
                              value={formData[field.name] || ''}
                              onChange={(e) => {
                                const target = e.target as HTMLSelectElement;
                                setFormData((prevData) => ({ ...prevData, [target.name]: target.value }));
                              }}
                            >
                              <option>{field.placeholder}</option>
                              {field.options?.map((option) => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </Form.Select>
                          )}
                        </Form.Group>
                      </Col>
                    ))}
                  </Row>
                  <div className="text-center mt-4">
                    <Button
                      variant="success"
                      onClick={handleSendMessage}
                      className="fw-bold p-3"
                    >
                      <FaWhatsapp className="me-2" />
                      Generar mensaje de cotización
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatsappForm;