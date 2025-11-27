// src/pages/CotizacionAerea.tsx
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPlane, FaFile, FaClipboard, FaDownload } from 'react-icons/fa';
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
    { name: 'incoterm', label: 'Incoterm', placeholder: 'Selecciona un Incoterm', type: 'select' as 'select', options: ['FOB', 'EXW', 'CFR'] },
    { name: 'invoiceProforma', label: 'Invoice Proforma', placeholder: 'Valor total de la mercadería', type: 'text' as 'text' },
    { name: 'hsCode', label: 'HS Code', placeholder: 'Código de clasificación', type: 'text' as 'text' },
  ];

  const aereoMessage = (data: Record<string, string>) => {
    return `
¡Hola! Necesito una cotización de flete aéreo con la siguiente información:

- Origen: ${data.origen}
- Destino: ${data.destino}
- Peso (Kg): ${data.peso}
- Tipo de Mercadería: ${data.tipoMercaderia}
- Incoterm: ${data.incoterm}
- Invoice Proforma: ${data.invoiceProforma}
- HS Code: ${data.hsCode}
    `;
  };

  return (
    <>
      {/* Sección 1: Introducción y Propuesta de Valor con imagen de fondo */}
    <section className="py-5 text-white hero-aereo d-flex justify-content-center align-items-center"
        style={{backgroundImage: `url(${fondoAvion})`}}>
        <div className='aereo-content'>
            <Container>
                <Row className="align-items-center">
                    <Col lg={8} className="text-center text-lg-start">
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
                    <Col lg={4} className="mt-4 mt-lg-0 text-center">
                    <div className="p-4 rounded shadow-lg bg-white text-dark">
                        <h4 className="fw-bold mb-3">Servicios de Courier Aéreo</h4>
                        <p>
                        HASTA 3000 USD por factura. Kilos ilimitados en paquetes de hasta 50 kg.
                        </p>
                        <p className="fw-bold mb-0">Tarifas preferenciales y precios competitivos.</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
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
      <section className="py-5 bg-light">
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

    {/* Sección: Whatsapp */}
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