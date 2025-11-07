// src/pages/Importador.tsx
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaArrowUp, FaUser, FaFileContract } from 'react-icons/fa';
import { FaFile, FaCheckCircle, FaRocket, FaCubes } from 'react-icons/fa';
import fondoImportador from '../assets/images/camion3.jpg';
import { TbPackageImport } from 'react-icons/tb';
import { PiCertificateFill } from 'react-icons/pi';
import { BsCurrencyExchange } from 'react-icons/bs';

const Importador = () => {
  return (
    <>
      {/* Sección de Introducción */}
      <section 
        className="py-5 text-white hero-importador d-flex justify-content-center align-items-center" 
        style={{ backgroundImage: `url(${fondoImportador})` }}
      >
        <div className='importador-content d-flex align-items-center'>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={10}>
                <h1 className="fw-bold display-4">
                  ¿Por qué <span className="text-info">inscribirte como importador</span> en Argentina?
                </h1>
                <p className="lead mt-3 fs-5">
                  Dar el paso de inscribirte como importador es la llave de entrada al comercio internacional. Ya seas una empresa o un emprendedor, obtener tu inscripción te abre un mundo de oportunidades para hacer crecer tu negocio.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Sección de Acceso y Beneficios */}
      <section className="py-5 bg-light text-dark">
        <Container>
          <h2 className="text-center fw-bold mb-5">
            <FaCheckCircle className="me-2 text-info" /> Accedés a:
          </h2>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="h-100 text-center p-4 border shadow-sm">
                <TbPackageImport className="h1 text-info mx-auto mb-3" />
                <Card.Title className="fw-bold">Canal oficial de importación</Card.Title>
                <Card.Text>
                  Podés traer productos de manera legal y segura.
                </Card.Text>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 text-center p-4 border shadow-sm">
                <FaFile className="h1 text-info mx-auto mb-3" />
                <Card.Title className="fw-bold">Registro en AFIP</Card.Title>
                <Card.Text>
                  Quedás habilitado para operar con proveedores internacionales y despachantes de aduana.
                </Card.Text>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 text-center p-4 border shadow-sm">
                <BsCurrencyExchange className="h1 text-info mx-auto mb-3" />
                <Card.Title className="fw-bold">Acceso a divisas y regímenes</Card.Title>
                <Card.Text>
                  Posibilidad de pagar al exterior con respaldo oficial y utilizar beneficios impositivos disponibles.
                </Card.Text>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 text-center p-4 border shadow-sm">
                <PiCertificateFill className="h1 text-info mx-auto mb-3" />
                <Card.Title className="fw-bold">Homologaciones y certificaciones</Card.Title>
                <Card.Text>
                  Tramitás los permisos necesarios para productos específicos (electrónicos, textiles, alimentos, etc.).
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección de Beneficios Principales */}
      <section className="py-5 text-dark">
        <Container>
          <h2 className="text-center fw-bold mb-5">
            <FaRocket className="me-2 text-info" /> Beneficios principales:
          </h2>
          <Row className="g-4 justify-content-center">
            <Col md={6} lg={4}>
              <Card className="h-100 p-4 border shadow-sm">
                <FaArrowUp className="h1 text-info mx-auto mb-3" />
                <Card.Title className="fw-bold text-center">Ampliás tu negocio</Card.Title>
                <Card.Text>
                  Accedés a productos que no se fabrican en el país o que tienen mejores precios en el exterior.
                </Card.Text>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 p-4 border shadow-sm">
                <FaUser className="h1 text-info mx-auto mb-3" />
                <Card.Title className="fw-bold text-center">Competitividad</Card.Title>
                <Card.Text>
                  Ofrecés variedad, calidad y costos más bajos frente a tu competencia.
                </Card.Text>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 p-4 border shadow-sm">
                <FaCubes className="h1 text-info mx-auto mb-3" />
                <Card.Title className="fw-bold text-center">Escalabilidad</Card.Title>
                <Card.Text>
                  Una vez inscripto, no tenés límites para seguir creciendo con más productos, rubros y proveedores.
                </Card.Text>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 p-4 border shadow-sm">
                <FaFileContract className="h1 text-info mx-auto mb-3" />
                <Card.Title className="fw-bold text-center">Legalidad y Respaldo</Card.Title>
                <Card.Text>
                Operás dentro del marco normativo, evitando sanciones y problemas aduaneros.
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección de Beneficios Fiscales */}
      <section className="py-5 bg-info text-white">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <h2 className="fw-bold mb-4">Beneficios fiscales e impositivos <span className="h1">💰</span></h2>
              <p className="lead fw-bold mb-4">
                Al realizar una importación, gran parte de los impuestos que abonás (IVA, Ganancias, Ingresos Brutos, entre otros) no se pierden:
              </p>
              <ul className="fs-5 text-start mx-auto">
                <li>Se generan <span className='fw-bold'>créditos fiscales</span> que podés aplicar después al momento de pagar tus impuestos nacionales y provinciales.</li>
                <li>Esto significa que muchos de los tributos de la importación <span className='fw-bold'>quedan como saldo a favor</span> para compensar futuras obligaciones fiscales.</li>
                <li>En la práctica, terminás transformando un gasto en una <span className='fw-bold'>herramienta financiera</span> que mejora la rentabilidad de tu negocio.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>  

      {/* Sección de Resumen y Conclusión */}
      <section className="py-5 text-dark">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <h3 className="fw-bold">👉 En resumen:</h3>
              <p className="lead mt-3">
                Inscribirte como importador es dejar de depender de terceros, importar con seguridad, y aprovechar los beneficios fiscales que transforman la importación en una inversión estratégica.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Importador;