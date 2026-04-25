import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPlane, FaFile, FaClipboard, FaDownload, FaCheckCircle } from 'react-icons/fa';
import GuiaImportacionAereaPDF from '../assets/pdfs/guiaAerea.pdf';
import fondoAvion from '../assets/images/avion4.jpg'
import WhatsappForm from '../components/WhatsappForm';
import { AiOutlineQrcode } from 'react-icons/ai';
import { RiBillFill } from 'react-icons/ri';

const CotizacionAerea = () => {

  const aereoFields = [
    { name: 'origen', label: 'Origen', placeholder: 'Ej. China', type: 'text' as 'text' },
    { name: 'destino', label: 'Destino', placeholder: 'Ej. Buenos Aires, Argentina', type: 'text' as 'text' },
    { name: 'peso', label: 'Peso (Kg)', placeholder: 'Ej. 50', type: 'text' as 'text' },
    { name: 'tipoMercaderia', label: 'Tipo de Mercadería', placeholder: 'Ej. Ropa y calzado', type: 'text' as 'text' },
    { name: 'packingList', label: 'Packing List', placeholder: 'Se debe adjuntar archivo por Whatsapp', type: 'static' as 'static'},
    { name: 'invoiceProforma', label: 'Invoice Proforma', placeholder: 'Se debe adjuntar archivo por Whatsapp', type: 'static' as 'static' },
    { name: 'hsCode', label: 'HS Code', placeholder: 'Código de clasificación', type: 'text' as 'text' },
  ];

  const aereoMessage = (data: Record<string, string>) => {
    return `
¡Hola! Necesito una cotización de flete aéreo con la siguiente información:

- Origen: ${data.origen || 'No especificado.'}
- Destino: ${data.destino || 'No especificado.'}
- Peso (Kg): ${data.peso || 'No especificado.'}
- Packing List: Se debe adjuntar archivo por WhatsApp.
- Invoice Proforma: Se debe adjuntar archivo por WhatsApp.
- HS Code: ${data.hsCode || 'No especificado.'}
    `;
  };

  return (
    <>
      {/* Sección 1: Hero */}
      <section className="py-5 text-white hero-aereo d-flex justify-content-center align-items-center"
          style={{backgroundImage: `url(${fondoAvion})`}}>
          <div className='aereo-content w-100'>
              <Container>
                  <Row className="justify-content-center text-center mb-4">
                      <Col lg={10}>
                          <h1 className="fw-bold">
                              Cotizá tu <span className='text-primary'>importación Aérea</span> ✈️
                          </h1>
                          <p className="lead mt-3">
                              Cotiza tu envío aéreo con nosotros, contamos con depósito en China, EE. UU. y somos partners oficiales de DHL y FedEx. ¡Obtené tu cotización en menos de 24 horas!
                          </p>
                          <div className="d-flex flex-wrap gap-5 justify-content-center mt-4 text-info">
                              <FaFile className="h1" />
                              <FaClipboard className="h1" />
                              <FaPlane className="h1" />
                          </div>
                      </Col>
                  </Row>
                  <Row className="g-4 justify-content-center">
                      <Col lg={4} md={6}>
                          <div className="p-4 rounded shadow-lg bg-white text-dark h-100">
                              <h4 className="fw-bold mb-3">Servicios de Courier Aéreo</h4>
                              <p>HASTA 3000 USD por factura. Kilos ilimitados en paquetes de hasta 50 kg.</p>
                              <p className="fw-bold">Tarifas preferenciales y precios competitivos.</p>
                              <p className="fst-italic text-secondary mb-0">Servicio Apto para Monotributistas, Importadores, Responsables inscriptos y Empresas.</p>
                          </div>
                      </Col>
                      <Col lg={4} md={6}>
                          <div className="p-4 rounded shadow-lg bg-white text-dark h-100">
                              <h4 className="fw-bold mb-3">Despacho Aéreo Formal</h4>
                              <p>Sin límite de valor ($) ni kilos.</p>
                              <p className="fw-bold mb-0">Servicio para Importadores, Responsables Inscriptos y Empresas.</p>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>
      </section>

      {/* Sección: Video Despacho Aéreo Formal */}
      <section className="py-5">
          <Container>
              <Row className="align-items-center">
                  <Col lg={6} className="mb-4 mb-lg-0">
                      <h2 className="fw-bold text-primary mb-3">¿Cómo funciona el Despacho Aéreo Formal?</h2>
                      <p className="lead">Mirá el video y entendé cómo podemos ayudarte a operar sin límites.</p>
                  </Col>
                  <Col lg={6}>
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
                      >
                          VIDEO DESPACHO AÉREO FORMAL — PENDIENTE
                      </div>
                  </Col>
              </Row>
          </Container>
      </section>

      {/* Sección 2: Proceso para obtener la cotización */}
      <section className="py-5 bg-light text-dark">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="text-center fw-bold mb-4">
                ¿Cómo obtengo mi cotización de flete aéreo?
              </h2>
              <p className="text-center lead">
                Es un proceso simple. Solo tienes que contactar a tu proveedor y pedirle la siguiente información:
              </p>
              <Row className="g-4 mt-4">
                <Col md={4}>
                  <Card className="h-100 p-4 text-center">
                    <RiBillFill className="h1 text-primary mx-auto mb-3" />
                    <Card.Title className="fw-bold">Invoice Proforma</Card.Title>
                    <Card.Text>(Modelo de factura)</Card.Text>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100 p-4 text-center">
                    <FaClipboard className="h1 text-primary mx-auto mb-3" />
                    <Card.Title className="fw-bold">Packing List</Card.Title>
                    <Card.Text>El detalle completo de tu carga.</Card.Text>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100 p-4 text-center">
                    <AiOutlineQrcode className="h1 text-primary mx-auto mb-3" />
                    <Card.Title className="fw-bold">HS Code</Card.Title>
                    <Card.Text>Código de clasificación aduanera.</Card.Text>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección: Mini Guía Gratuita */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h4 className="fw-bold mb-4">
                A continuación te adjuntamos una <span className='text-primary'> MINI GUÍA GRATUITA </span>
              </h4>
              <p className="lead">
                Para que entiendas el paso a paso del proceso de importación aérea y estés preparado.
              </p>
              <div className="mt-4">
                <a
                  href={GuiaImportacionAereaPDF}
                  download="Mini_Guia_Importacion_Aerea_MLS.pdf"
                  className="btn btn-outline-primary fw-bold p-3"
                >
                  <FaDownload className="me-2" />
                  Descargar Mini Guía de Importación Aérea
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección: Cálculo de Costos e Impuestos */}
      <section className="py-5 bg-light text-dark">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold text-primary mb-3">Sabé exactamente cuánto te va a costar antes de invertir</h2>
              <p className="lead mb-4">
                Antes de que pongas un peso, te entregamos el costo real de tu importación puesta en Argentina. Sin sorpresas, sin costos ocultos, con todos los números sobre la mesa.
              </p>
              <h5 className="fw-bold mb-3">Lo que calculamos:</h5>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Costo del producto en origen (FOB o EXW según tu operación).</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Flete internacional según la modalidad elegida.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Derechos de importación, IVA, percepciones y tasas estadísticas aplicables.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Gastos operativos, honorarios de despachante y servicios logísticos locales.</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <FaCheckCircle className="text-primary fs-5 mt-1 flex-shrink-0" />
                  <span>Costo final puesto en tu depósito, listo para definir tu precio de venta.</span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección: WhatsApp */}
      <section>
        <div className="py-5 bg-white text-dark">
          <Container>
            <h2 className="text-center fw-bold mb-4">
              Completa y cotiza
            </h2>
          </Container>
          <WhatsappForm
            title="Generá tu mensaje para WhatsApp"
            description="Completa los siguientes datos para armar el mensaje de forma automática y enviarlo a nuestro equipo."
            fields={aereoFields}
            whatsappNumber="+5493492213436"
            messageTemplate={aereoMessage}
          />
        </div>
      </section>
    </>
  );
};

export default CotizacionAerea;