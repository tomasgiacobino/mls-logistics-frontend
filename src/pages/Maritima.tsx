// src/pages/CotizacionMaritima.tsx
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaFile, FaClipboard, FaShip, FaCheckCircle } from 'react-icons/fa';
import fondoBarco from '../assets/images/Fondos/paisaje3.jpg';
import WhatsappForm from '../components/WhatsappForm';
import { TbListDetails } from 'react-icons/tb';
import { BsStack } from 'react-icons/bs';
import { LiaPalletSolid } from 'react-icons/lia';

const CotizacionMaritima = () => {

  const maritimoFields = [
    { name: 'origen', label: 'Origen', placeholder: 'Ej. China', type: 'text' as 'text' },
    { name: 'destino', label: 'Destino', placeholder: 'Ej. Buenos Aires, Argentina', type: 'text' as 'text' },
    { name: 'tipoMercaderia', label: 'Tipo de Mercadería', placeholder: 'Ej. Maquinaria, juguetes', type: 'text' as 'text' },
    { name: 'incoterm', label: 'Incoterm', placeholder: 'Selecciona un Incoterm', type: 'select' as 'select', options: ['FOB', 'EXW', 'CFR'] },
    { name: 'packingList', label: 'Packing List', placeholder: 'Se debe adjuntar archivo por Whatsapp', type: 'static' as 'static' },
    { name: 'invoiceProforma', label: 'Invoice Proforma', placeholder: 'Se debe adjuntar archivo por Whatsapp', type: 'static' as 'static' },
    { name: 'hsCode', label: 'HS Code', placeholder: 'Código de clasificación', type: 'text' as 'text' },
    { name: 'cargaApilable', label: 'Carga Apilable', placeholder: 'Selecciona una opción', type: 'select' as 'select', options: ['Sí', 'No'] },
    { name: 'palletTipo', label: 'Tipo de Palet', placeholder: 'Ej. Euro Pallet', type: 'text' as 'text' },
    { name: 'palletMedida', label: 'Medida del Palet', placeholder: 'Ej. 120cm x 80cm', type: 'text' as 'text' },
  ];

  const maritimoMessage = (data: Record<string, string>) => {
    return `
  ¡Hola! Necesito una cotización de flete marítimo con la siguiente información:
  
  - Origen: ${data.origen || 'No especificado.'}
  - Destino: ${data.destino || 'No especificado'}
  - Tipo de Mercadería: ${data.tipoMercaderia || 'No especificado.'}
  - Incoterm: ${data.incoterm || 'No especificado.'}
  - Packing List: Se debe adjuntar archivo por WhatsApp.
  - Invoice Proforma: Se debe adjuntar archivo por WhatsApp.
  - HS Code: ${data.hsCode || 'No especificado.'}
  - Carga Apilable: ${data.cargaApilable || 'No especificado.'}
  - Tipo de Palet: ${data.palletTipo || 'No especificado.'}
  - Medida del Palet: ${data.palletMedida || 'No especificado.'}
    `.trim();
  };

  return (
    <>
      {/* Sección 1: Introducción */}
      <section 
        className="py-5 text-white hero-maritimo d-flex justify-content-center align-items-center" 
        style={{ backgroundImage: `url(${fondoBarco})` }}
      >
        <div className='maritimo-content w-100'>
          <Container>
            <Row className="align-items-center g-4">
              <Col lg={6}>
                <h1 className="fw-bold">
                  Cotizá tu <span className="text-primary">importación Marítima</span> 🚢
                </h1>
                <p className="lead mt-3 fs-5">
                  Ideal para productos de gran peso y volumen, repuestos, maquinarias y rodados.
                </p>
                <div className="d-flex flex-wrap gap-5 mt-4 justify-content-center text-primary">
                  <FaFile className="h1" />
                  <FaClipboard className="h1" />
                  <FaShip className="h1" />
                </div>
                <div className="p-4 rounded shadow-lg bg-light text-dark mt-4">
                  <h4 className="fw-bold mb-3">Servicios de Transporte Marítimo</h4>
                  <p className="mb-0">
                    Podés importar <span className='fw-bold'>CONTENEDORES COMPLETOS (FCL)</span> o paletizar tu mercancía en un <span className='fw-bold'>CONTENEDOR COMPARTIDO (LCL)</span>.
                  </p>
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
                  VIDEO PRESENTACIÓN — PENDIENTE
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Sección 2: Proceso de cotización */}
      <section className="py-5 bg-light text-dark">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="text-center fw-bold mb-4">
                ¿Cómo obtengo mi cotización de flete marítimo?
              </h2>
              <p className="text-center lead">
                Es un proceso simple. Solo tienes que contactar a tu proveedor y pedirle la siguiente información:
              </p>
              <Row className="g-4 mt-4">
                <Col md={4}>
                  <Card className="h-100 p-4 text-center border shadow-sm">
                    <TbListDetails className="h1 text-primary mx-auto mb-3" />
                    <Card.Title className="fw-bold">Packing List & Invoice Proforma</Card.Title>
                    <Card.Text>El detalle completo de tu carga y el modelo de factura.</Card.Text>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100 p-4 text-center border shadow-sm">
                    <FaClipboard className="h1 text-primary mx-auto mb-3" />
                    <Card.Title className="fw-bold">HS Code & Incoterm</Card.Title>
                    <Card.Text>Clasificación aduanera del producto y el incoterm (Ideal FOB).</Card.Text>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100 p-4 text-center border shadow-sm">
                    <FaFile className="h1 text-primary mx-auto mb-3" />
                    <Card.Title className="fw-bold">Origen / Destino & Tipo de mercadería</Card.Title>
                    <Card.Text>Información sobre la carga y su tipo.</Card.Text>
                  </Card>
                </Col>
              </Row>
              <h4 className="text-center fw-bold my-4">Para contenedores compartidos, también necesitamos saber:</h4>
              <Row className="g-4 justify-content-center">
                <Col md={4}>
                  <Card className="h-100 p-4 text-center border shadow-sm">
                    <BsStack className="h1 text-primary mx-auto mb-3" />
                    <Card.Title className="fw-bold">Carga Apilable</Card.Title>
                    <Card.Text>Si la carga es apilable o no apilable.</Card.Text>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100 p-4 text-center border shadow-sm">
                    <LiaPalletSolid className="h1 text-primary mx-auto mb-3" />
                    <Card.Title className="fw-bold">Medida del Pallet</Card.Title>
                    <Card.Text>Qué tipo de Pallet utilizan y su medida.</Card.Text>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección: Cálculo de Costos e Impuestos */}
      <section className="py-5 bg-white text-dark">
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

      <div className="py-5 bg-light text-dark">
        <Container>
          <h2 className="text-center fw-bold mb-4">
            Completa y cotiza
          </h2>
        </Container>
        <WhatsappForm
          title="Generá tu mensaje para WhatsApp"
          description="Completa los siguientes datos para armar el mensaje de forma automática y enviarlo a nuestro equipo."
          fields={maritimoFields}
          whatsappNumber="+5493492213436"
          messageTemplate={maritimoMessage}
        />
      </div>

    </>
  );
};

export default CotizacionMaritima;