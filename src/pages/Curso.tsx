import { Container, Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import { FaDownload, FaShoppingCart, FaVideo, FaComments, FaBook, FaFileAlt, FaCalculator, FaShip, FaQuestionCircle, FaChartLine, FaClipboardList, FaMapSigns, FaExclamationTriangle, FaDollarSign } from 'react-icons/fa';
import CourseLearningCard from '../components/CourseLearningCard';
import BenefitItem from '../components/BenefitItem';
import guiaCurso from '../assets/pdfs/guiaCurso.pdf';

const Curso = () => {
  return (
    <>
      <section className="py-5">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6}>
              <h1 className="text-primary fw-bold">Aprende a importar con nosotros!</h1>
              <h2 className="text-secondary mb-3">Tu puerta de entrada al Comercio Internacional</h2>
              <p className="lead">
                ¿Querés dar el salto y aprender a importar de manera clara, práctica y sin vueltas? Nuestra Guía de Importaciones es el recurso ideal para quienes buscan empezar a traer productos desde el exterior, evitando errores comunes y entendiendo cada paso del proceso.
              </p>
            </Col>
            <Col lg={6} className="mt-4 mt-lg-0">
              <div className="ratio ratio-16x9 shadow-lg">
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video de presentación" allowFullScreen></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <div className="my-5">
            <Row>
              <Col>
                <h3 className="text-center text-primary fw-bold mb-5">📚 ¿Qué vas a aprender?</h3>
                <Row className="justify-content-center g-4">
                  <CourseLearningCard
                    icon={FaBook}
                    title="Negociación con Proveedores"
                    description="Cómo contactar y negociar con proveedores internacionales."
                  />
                  <CourseLearningCard
                    icon={FaFileAlt}
                    title="Documentación Clave"
                    description="Qué son y cómo usar documentos claves como la Proforma Invoice y el Packing List."
                  />
                  <CourseLearningCard
                    icon={FaCalculator}
                    title="Cálculo de Costos"
                    description="Cómo calcular correctamente los costos de tu importación (producto, flete, impuestos, etc.)."
                  />
                  <CourseLearningCard
                    icon={FaShip}
                    title="Diferencias de Envíos"
                    description="Diferencias entre envíos marítimos, aéreos y courier, y cuál elegir según tu caso."
                  />
                  <CourseLearningCard
                    icon={FaQuestionCircle}
                    title="Incoterms"
                    description="Definiciones y uso de los Incoterms."
                  />
                  <CourseLearningCard
                    icon={FaChartLine}
                    title="Estrategias de Negocio"
                    description="Estrategias para reducir riesgos, ahorrar costos y garantizar que tu operación sea exitosa."
                  />
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col>
              <h3 className="text-center text-primary fw-bold mb-5">💡 ¿Qué vas a poder hacer?</h3>
              <Row className="justify-content-center">
                <BenefitItem
                  icon={FaClipboardList}
                  description="Cotizar tus envíos de forma profesional."
                />
                <BenefitItem
                  icon={FaMapSigns}
                  description="Planificar tus importaciones paso a paso sin depender de terceros."
                />
                <BenefitItem
                  icon={FaExclamationTriangle}
                  description="Evitar los errores más comunes de los primeros importadores."
                />
                <BenefitItem
                  icon={FaDollarSign}
                  description="Tomar decisiones con seguridad para escalar tu negocio y aumentar tu rentabilidad."
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center mb-5">
          <h3 className="text-primary fw-bold mb-5 text-center">🎥 Más que una guía: videos + asesoramiento personalizado</h3>
            <Col lg={6}>
              
              <ListGroup as="ul" className="mb-4">
                <ListGroup.Item as="li" className="d-flex align-items-start border-0 bg-light p-0 mb-3">
                  <FaVideo className="h4 text-info me-3" />
                  <div>
                    <h5 className="fw-bold">Videos explicativos</h5>
                    <p>Incluye videos que acompañan la guía para que lo entiendas de forma visual y práctica.</p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="d-flex align-items-start border-0 bg-light p-0">
                  <FaComments className="h4 text-info me-3" />
                  <div>
                    <h5 className="fw-bold">Asesoramiento personalizado</h5>
                    <p>Tendrás un asesoramiento mano a mano con Manu Muñoz, una sesión exclusiva de 1 hora por Google Meet donde vas a poder resolver todas tus dudas y recibir consejos personalizados según tu proyecto.</p>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col lg={6} className="ps-lg-5 mt-4 mt-lg-0">
              <Card className="p-4 text-center shadow">
                <h4 className="fw-bold mb-3">Empieza hoy tu camino en el comercio internacional</h4>
                <p>Hacé crecer tu negocio con conocimiento real, práctico y aplicado.</p>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  <Button variant="info" className="fw-bold">
                    <FaShoppingCart className="me-2" />
                    Comprar Asesoramiento
                  </Button>
                    <a
                    href={guiaCurso}
                    download='Guia_Curso_Importaciones.pdf'
                    className='btn btn-outline-primary fw-bold'>
                      <FaDownload className="me-2" />
                      Descargar PDF
                    </a>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Curso;