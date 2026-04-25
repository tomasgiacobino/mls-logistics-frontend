import { Container, Row } from 'react-bootstrap';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <section className="py-5" id="services">
      <Container>
        <h2 className="text-center mb-2 text-primary">Servicios</h2>
        <h4 className="text-center mb-5 text-secondary">Soluciones integrales para tu crecimiento internacional</h4>
        <p className="text-center mb-5">
          Tener un departamento de comercio exterior propio puede marcar la diferencia entre crecer o quedarse atrás. Nosotros cumplimos ese rol por vos. Nos integramos a tu empresa como tu equipo de comex: importamos, exportamos y abrimos oportunidades en el mercado internacional, con estrategia, experiencia y acompañamiento real en cada operación.
        </p>
        <Row className="g-4 justify-content-center">
          <ServiceCard
            icon="bi-mortarboard"
            title="Aprende a importar con nosotros"
            description="Capacitación, guía práctica y asesoramiento para aprender a importar desde cero, con herramientas reales y explicaciones claras. Ideal para quienes quieren iniciar en el comercio internacional, reducir costos comprando en el exterior o lanzar su propio negocio."
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
            title="Inscripción como Importador/Exportador para Empresas y Responsables Inscriptos"
            description="Gestionamos tu alta ante ARCA para que tu empresa pueda operar en comercio exterior de forma legal, eficiente y a escala."
            buttonText="Iniciar proceso"
            to="/importador"
          />
          <ServiceCard
            icon="bi-globe-americas"
            title="Exportá con nosotros"
            description="Conecta tus productos con el Mercado Global."
            buttonText="Conectar ahora"
            to="/exportacion"
          />
          <ServiceCard
            icon="bi-search"
            title="Agente de Compras"
            description="Investigamos el mercado por vos, verificamos proveedores confiables y gestionamos el proceso de cotización completo. Vos recibís un informe consolidado y tomás la decisión con información real."
            buttonText="Conocer más"
            to="/agenteDeCompras"
          />
          <ServiceCard
            icon="bi-building"
            title="Gestión Comex para tu empresa"
            description="Tu departamento de comercio exterior. Nos integramos como tu equipo: gestionamos importaciones y exportaciones, coordinamos con todos los actores del proceso y te mantenemos informado en cada etapa."
            buttonText="Conocer más"
            to="/gestionComex"
          />
        </Row>
      </Container>
    </section>
  );
};

export default Services;