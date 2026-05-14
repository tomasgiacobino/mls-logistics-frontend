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
        <div className='importador-content d-flex align-items-center w-100'>
          <Container>
            <Row className="align-items-center g-4">
              <Col lg={6} className="text-center text-lg-start">
                <h1 className="fw-bold display-4">
                  Inscripción como <span className="text-primary">Importador/Exportador</span> para Empresas y Responsables Inscriptos
                </h1>
                <p className="lead mt-3 fs-5">
                  Gestionamos tu alta ante ARCA para que tu empresa pueda operar en comercio exterior de forma legal, optimizar su estructura de costos y escalar su operación.
                </p>
                <div className="d-flex justify-content-center mt-3">
                  <Button
                    variant="primary"
                    className="fw-bold px-4 py-3"
                    onClick={handleWhatsapp}
                  >
                    <FaWhatsapp className="me-2 fs-5" />
                    Hablar con un asesor
                  </Button>
                </div>
              </Col>
              <Col lg={6}>
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    background: 'rgba(26,26,46,0.8)',
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
                >
                  VIDEO EXPLICATIVO — PENDIENTE
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Accedés a + Beneficios principales */}
      <section className="py-5 bg-light text-dark">
        <Container>
          <Row className="g-4">
            <Col lg={6} className="col-divisor">
              <h4 className="fw-bold mb-4">
                <FaCheckCircle className="me-2 text-primary" /> Accedés a:
              </h4>
              <Row className="g-3">
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
            </Col>

            <Col lg={6}>
              <h4 className="fw-bold mb-4">
                <FaRocket className="me-2 text-primary" /> Beneficios principales:
              </h4>
              <Row className="g-3">
                <Col md={6}>
                  <Card className="h-100 text-center p-3 border shadow-sm">
                    <FaArrowUp className="fs-1 text-primary mx-auto mb-2" />
                    <Card.Title className="fw-bold text-center fs-6">Ampliás tu negocio</Card.Title>
                    <Card.Text className="small">Accedés a productos que no se fabrican en el país o que tienen mejores precios en el exterior.</Card.Text>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 text-center p-3 border shadow-sm">
                    <FaUser className="fs-1 text-primary mx-auto mb-2" />
                    <Card.Title className="fw-bold text-center fs-6">Competitividad</Card.Title>
                    <Card.Text className="small">Ofrecés variedad, calidad y costos más bajos frente a tu competencia.</Card.Text>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 text-center p-3 border shadow-sm">
                    <FaCubes className="fs-1 text-primary mx-auto mb-2" />
                    <Card.Title className="fw-bold text-center fs-6">Escalabilidad</Card.Title>
                    <Card.Text className="small">Una vez inscripto, no tenés límites para seguir creciendo.</Card.Text>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 text-center p-3 border shadow-sm">
                    <FaFileContract className="fs-1 text-primary mx-auto mb-2" />
                    <Card.Title className="fw-bold text-center fs-6">Legalidad y Respaldo</Card.Title>
                    <Card.Text className="small">Operás dentro del marco normativo, evitando sanciones y problemas aduaneros.</Card.Text>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Importador;