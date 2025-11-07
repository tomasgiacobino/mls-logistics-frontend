import { Container, Row } from 'react-bootstrap';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <section className="py-5" id="services">
      <Container>
        <h2 className="text-center mb-2 text-primary">Servicios</h2>
        <h4 className="text-center mb-5 text-secondary">Soluciones integrales para tu crecimiento internacional</h4>
        <Row className="g-4 justify-content-center">
          <ServiceCard
            icon="bi-mortarboard"
            title="Aprende a importar con nosotros"
            description="Guía Paso a Paso “Cómo Importar en Argentina 2025”. Incluye todo lo necesario para iniciar tu camino en el comercio internacional."
            buttonText="Conocer más"
            to="/curso"
          />
          <ServiceCard
            icon="bi-airplane-fill"
            title="Cotizá tu importación Aérea"
            description="Tarifas preferenciales, servicios de Pick up puerta a puerta y consolidación de mercadería."
            buttonText="Cotizar"
            to="/importacionAerea"
          />
          <ServiceCard
            icon="bi-water"
            title="Cotizá tu importación Marítima"
            description="Contenedores Completos (FCL), Contenedores Compartidos (LCL)."
            buttonText="Cotizar"
            to="/importacionMaritima"
          />
          <ServiceCard
            icon="bi-clipboard-fill"
            title="Inscripción como importador"
            description="Registrate como importador y obenté los beneficios impositivos para mejorar tus rentabilidad."
            buttonText="Conocer más"
            to="/importador"
          />
          <ServiceCard
            icon="bi-globe-americas"
            title="Exportá con nosotros"
            description="Conecta tus productos con el Mercado Global."
            buttonText="Conectar ahora"
            to="/exportacion"
          />
        </Row>
      </Container>
    </section>
  );
};

export default Services;