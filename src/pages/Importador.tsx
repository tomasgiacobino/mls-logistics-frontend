import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaArrowUp, FaUser, FaFileContract, FaWhatsapp } from 'react-icons/fa';
import { FaFile, FaCheckCircle, FaRocket, FaCubes } from 'react-icons/fa';
import fondoImportador from '../assets/images/Fondos/camion3.jpg';
import { TbPackageImport } from 'react-icons/tb';
import { PiCertificateFill } from 'react-icons/pi';
import { BsCurrencyExchange } from 'react-icons/bs';

const whatsappNumber = '+5493492213436';
const whatsappMessage = 'Quiero tramitar mi alta como IMPO/EXPO';

const Importador = () => {

  const handleWhatsapp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      {/* Hero */}
      <section
        className="py-5 text-white hero-importador d-flex justify-content-center align-items-center"
        style={{ backgroundImage: `url(${fondoImportador})` }}
      >
        <div className='importador-content d-flex align-items-center'>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={10}>
                <h1 className="fw-bold display-4">
                  Inscripción como <span className="text-primary">Importador/Exportador</span> para Empresas y Responsables Inscriptos
                </h1>
                <p className="lead mt-3 fs-5">
                  Gestionamos tu alta ante ARCA para que tu empresa pueda operar en comercio exterior de forma legal, optimizar su estructura de costos y escalar su operación.
                </p>
                <Button
                  variant="primary"
                  className="fw-bold mt-3 px-4 py-3"
                  onClick={handleWhatsapp}
                >
                  <FaWhatsapp className="me-2 fs-5" />
                  Hablar con un asesor
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Accedés a + Beneficios + Video */}
      <section className="py-5 bg-light text-dark">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              {/* Accedés a */}
              <h4 className="fw-bold mb-4">
                <FaCheckCircle className="me-2 text-primary" /> Accedés a:
              </h4>
              <Row className="g-3 mb-5">
                <Col md={6}>
                  <Card className="h-100 text-center p-3 border shadow-sm">
                    <TbPackageImport className="fs-1 text-primary mx-auto mb-2" />
                    <Card.Title className="fw-bold fs-6">Canal oficial de importación</Card.Title>
                    <Card.Text className="small">Podés traer productos de manera legal y segura.</Card.Text>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 text-center p-3 border shadow-sm">
                    <FaFile className="fs-1 text-primary mx-auto mb-2" />
                    <Card.Title className="fw-bold fs-6">Registro en AFIP</Card.Title>
                    <Card.Text className="small">Quedás habilitado para operar con proveedores internacionales y despachantes de aduana.</Card.Text>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 text-center p-3 border shadow-sm">
                    <BsCurrencyExchange className="fs-1 text-primary mx-auto mb-2" />
                    <Card.Title className="fw-bold fs-6">Acceso a divisas y regímenes</Card.Title>
                    <Card.Text className="small">Posibilidad de pagar al exterior con respaldo oficial y utilizar beneficios impositivos disponibles.</Card.Text>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 text-center p-3 border shadow-sm">
                    <PiCertificateFill className="fs-1 text-primary mx-auto mb-2" />
                    <Card.Title className="fw-bold fs-6">Homologaciones y certificaciones</Card.Title>
                    <Card.Text className="small">Tramitás los permisos necesarios para productos específicos.</Card.Text>
                  </Card>
                </Col>
              </Row>

              {/* Beneficios principales */}
              <h4 className="fw-bold mb-4">
                <FaRocket className="me-2 text-primary" /> Beneficios principales:
              </h4>
              <Row className="g-3">
                <Col md={6}>
                  <Card className="h-100 p-3 border shadow-sm">
                    <FaArrowUp className="fs-1 text-primary mx-auto mb-2" />
                    <Card.Title className="fw-bold text-center fs-6">Ampliás tu negocio</Card.Title>
                    <Card.Text className="small">Accedés a productos que no se fabrican en el país o que tienen mejores precios en el exterior.</Card.Text>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 p-3 border shadow-sm">
                    <FaUser className="fs-1 text-primary mx-auto mb-2" />
                    <Card.Title className="fw-bold text-center fs-6">Competitividad</Card.Title>
                    <Card.Text className="small">Ofrecés variedad, calidad y costos más bajos frente a tu competencia.</Card.Text>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 p-3 border shadow-sm">
                    <FaCubes className="fs-1 text-primary mx-auto mb-2" />
                    <Card.Title className="fw-bold text-center fs-6">Escalabilidad</Card.Title>
                    <Card.Text className="small">Una vez inscripto, no tenés límites para seguir creciendo.</Card.Text>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 p-3 border shadow-sm">
                    <FaFileContract className="fs-1 text-primary mx-auto mb-2" />
                    <Card.Title className="fw-bold text-center fs-6">Legalidad y Respaldo</Card.Title>
                    <Card.Text className="small">Operás dentro del marco normativo, evitando sanciones y problemas aduaneros.</Card.Text>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col lg={6} className="d-flex align-items-center justify-content-center">
              {/* PENDIENTE: reemplazar por video explicativo */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  background: '#1a1a2e',
                  borderRadius: '12px',
                  border: '2px dashed #0d6efd',
                  color: '#0d6efd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  textAlign: 'center',
                  padding: '2rem'
                }}
                className="mt-4 mt-lg-0"
              >
                VIDEO EXPLICATIVO — PENDIENTE
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Importador;