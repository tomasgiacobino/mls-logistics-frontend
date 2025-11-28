import { Container, Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import { FaDownload, FaShoppingCart, FaPlay, FaComments, FaBook, FaFile, FaCalculator, FaShip, FaQuestionCircle, FaArrowUp, FaClipboard, FaMapSigns, FaExclamationTriangle, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';
import CourseLearningCard from '../components/CourseLearningCard';
import BenefitItem from '../components/BenefitItem';
import guiaCurso from '../assets/pdfs/guiaCurso.pdf';
import fondo from '../assets/images/Fondos/f1.jpg';

const Curso = () => {

  const whatsappNumber = '+5493492213436';
  const whatsappMessage = "Hola! Estoy interesado en la asesoría y la guía para importar 2025.";

  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  
  // DEJO COMENTADA LA FUNCION QUE VA AL BACKEND PARA CREAR UN PAGO DE MERCADO PAGO, ES UNA FUNCION A FUTURO
  // const handleBuyClick = async () => {
  //   try{
  //     const response = await axios.post<{ sandbox_init_point: string }>('https://mls-logistics-backend.onrender.com/create-order');
  //     const sandboxUrl = response.data.sandbox_init_point;
  //       window.location.href = sandboxUrl;
  //   }catch (error){
  //     console.error('Error al iniciar el proceso de pago:', error);
  //     alert('Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo.');
  //   }
  // }

  return (
    <>
      <section className="py-5 curso-section"
      style={{backgroundImage: `url(${fondo})`}}>
        <div className='curso-content'>
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6}>
              <h1 className="text-primary fw-bold">Aprende a importar con nosotros!</h1>
              <h2 className="text-secondary mb-3">Tu puerta de entrada al Comercio Internacional</h2>
              <p className="lead fs-4 text-white">
                ¿Querés dar el salto y aprender a importar de manera clara, práctica y sin vueltas? Nuestra Guía de Importaciones es el recurso ideal para quienes buscan empezar a traer productos desde el exterior, evitando errores comunes y entendiendo cada paso del proceso.
              </p>
            </Col>
            <Col lg={6} className="mt-4 mt-lg-0">
            <div className="d-flex justify-content-center align-items-center mt-4">
            <a 
              href="https://www.youtube.com/shorts/WxQDqdYdO3A" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-decoration-none"
              style={{
                display: 'block',
                width: '100%',
                maxWidth: '360px',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
              }}
            >
              <img 
                src="https://img.youtube.com/vi/WxQDqdYdO3A/mqdefault.jpg"
                alt="Ver video en YouTube"
                className="w-100"
                style={{ borderRadius: '12px 12px 0 0', objectFit: 'cover' }}
              />
              <div className="p-3 text-center">
                <p className="mb-0 text-primary fw-bold fs-5" style={{ fontSize: '0.9rem' }}>
                  🎥 Ver video en YouTube
                </p>
              </div>
            </a>
          </div>
            </Col>
          </Row>
        </Container>
        </div>
      </section>

      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center mb-5">
          <h3 className="text-primary fw-bold mb-5 text-center">🎥 Más que una guía: videos + asesoramiento personalizado</h3>
            <Col lg={6}>
              
              <ListGroup as="ul" className="mb-4">
                <ListGroup.Item as="li" className="d-flex align-items-start border-0 bg-white p-0 mb-3">
                  <FaPlay className="fs-4 text-primary me-3" />
                  <div>
                    <h5 className="fw-bold">Videos explicativos</h5>
                    <p>Incluye videos que acompañan la guía para que lo entiendas de forma visual y práctica.</p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="d-flex align-items-start border-0 bg-white p-0">
                  <FaComments className="fs-1 text-primary me-3" />
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
                  {/* <Button variant="primary" className="fw-bold" onClick={handleBuyClick}>
                    <FaShoppingCart className="me-2" />
                    Comprar Asesoramiento
                  </Button> */}
                  <Button
                    variant="success"
                    onClick={handleSendMessage}
                    className="fw-bold fs-6"
                  >
                    <FaWhatsapp className="me-2" />
                      Envía un mensaje de consulta
                  </Button>
                    <a
                    href={guiaCurso}
                    download='Guia_Curso_Importaciones.pdf'
                    className='btn btn-outline-primary fw-bold'>
                      <FaDownload className="me-2" />
                      Temario Guía
                    </a>
                </div>
              </Card>
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
                    icon={FaFile}
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
                    icon={FaArrowUp}
                    title="Estrategias de Negocio"
                    description="Estrategias para reducir riesgos, ahorrar costos y garantizar que tu operación sea exitosa."
                  />
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className="py-3">
        <Container>
          <Row className="mb-2">
            <Col>
              <h3 className="text-center text-primary fw-bold mb-5">💡 ¿Qué vas a poder hacer?</h3>
              <Row className="justify-content-center">
                <BenefitItem
                  icon={FaClipboard}
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
                  icon={FaCheckCircle}
                  description="Tomar decisiones con seguridad para escalar tu negocio y aumentar tu rentabilidad."
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
};

export default Curso;