// src/pages/CotizacionMaritima.tsx
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaFileInvoice, FaClipboardList, FaFileAlt, FaWhatsapp } from 'react-icons/fa';
import fondoBarco from '../assets/images/paisaje3.jpg'; // Asegúrate de tener esta imagen
import WhatsappForm from '../components/WhatsappForm'; // Importa el componente reutilizable

const CotizacionMaritima = () => {

  const maritimoFields = [
    { name: 'origen', label: 'Origen', placeholder: 'Ej. China', type: 'text' as 'text' },
    { name: 'destino', label: 'Destino', placeholder: 'Ej. Buenos Aires, Argentina', type: 'text' as 'text' },
    { name: 'tipoMercaderia', label: 'Tipo de Mercadería', placeholder: 'Ej. Maquinaria, juguetes', type: 'text' as 'text' },
    { name: 'incoterm', label: 'Incoterm', placeholder: 'Selecciona un Incoterm', type: 'select' as 'select', options: ['FOB', 'EXW', 'CFR'] },
    { name: 'packingList', label: 'Packing List', placeholder: 'Cantidad y peso total', type: 'text' as 'text' },
    { name: 'invoiceProforma', label: 'Invoice Proforma', placeholder: 'Valor total de la mercadería', type: 'text' as 'text' },
    { name: 'hsCode', label: 'HS Code', placeholder: 'Código de clasificación', type: 'text' as 'text' },
    { name: 'cargaApilable', label: 'Carga Apilable', placeholder: 'Selecciona una opción', type: 'select' as 'select', options: ['Sí', 'No'] },
    { name: 'palletTipo', label: 'Tipo de Palet', placeholder: 'Ej. Euro Pallet', type: 'text' as 'text' },
    { name: 'palletMedida', label: 'Medida del Palet', placeholder: 'Ej. 120cm x 80cm', type: 'text' as 'text' },
  ];

  const maritimoMessage = (data: Record<string, string>) => {
    return `
¡Hola! Necesito una cotización de flete marítimo con la siguiente información:

- Origen: ${data.origen}
- Destino: ${data.destino}
- Tipo de Mercadería: ${data.tipoMercaderia}
- Incoterm: ${data.incoterm}
- Packing List: ${data.packingList}
- Invoice Proforma: ${data.invoiceProforma}
- HS Code: ${data.hsCode}
- Carga Apilable: ${data.cargaApilable}
- Tipo de Palet: ${data.palletTipo}
- Medida del Palet: ${data.palletMedida}
    `;
  };

  return (
    <>
      {/* Sección 1: Introducción */}
      <section 
        className="py-5 text-white hero-maritimo d-flex justify-content-center align-items-center" 
        style={{ backgroundImage: `url(${fondoBarco})` }}
      >
        <div className='maritimo-content'>
          <Container>
            <Row className="align-items-center">
              <Col lg={8} className="text-center text-lg-start">
                <h1 className="fw-bold">
                  Cotizá tu <span className="text-info">importación Marítima</span> 🚢
                </h1>
                <p className="lead mt-3 fs-5">
                  ¿Querés importar vía marítima? Es ideal para productos de gran peso y dimensiones.
                </p>
                <div className="d-flex flex-wrap gap-5 justify-content-center mt-4 text-info">
                  <FaFileInvoice className="h1" />
                  <FaClipboardList className="h1" />
                  <FaWhatsapp className="h1" />
                </div>
              </Col>
              <Col lg={4} className="mt-4 mt-lg-0 text-center">
                <div className="p-4 rounded shadow-lg bg-light text-dark">
                  <h4 className="fw-bold mb-3">Servicios de Transporte Marítimo</h4>
                  <p>
                    Podés importar <span className='fw-bold'> CONTENEDORES COMPLETOS (FCL) </span> o paletizar tu mercancía en un <span className='fw-bold'> CONTENEDOR COMPARTIDO (LCL) </span>.
                  </p>
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
                    <FaFileInvoice className="h1 text-info mx-auto mb-3" />
                    <Card.Title className="fw-bold">Packing List & Invoice Proforma</Card.Title>
                    <Card.Text>El detalle completo de tu carga y el modelo de factura.</Card.Text>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100 p-4 text-center border shadow-sm">
                    <FaClipboardList className="h1 text-info mx-auto mb-3" />
                    <Card.Title className="fw-bold">HS Code & Incoterm</Card.Title>
                    <Card.Text>Clasificación aduanera del producto y el incoterm (Ideal FOB).</Card.Text>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100 p-4 text-center border shadow-sm">
                    <FaFileAlt className="h1 text-info mx-auto mb-3" />
                    <Card.Title className="fw-bold">Origen / Destino & Tipo de mercadería</Card.Title>
                    <Card.Text>Información sobre la carga y su tipo.</Card.Text>
                  </Card>
                </Col>
              </Row>
              <h4 className="text-center fw-bold my-4">Para contenedores compartidos, también necesitamos saber:</h4>
              <Row className="g-4 justify-content-center">
                <Col md={4}>
                  <Card className="h-100 p-4 text-center border shadow-sm">
                    <FaFileInvoice className="h1 text-info mx-auto mb-3" />
                    <Card.Title className="fw-bold">Carga Apilable</Card.Title>
                    <Card.Text>Si la carga es apilable o no apilable.</Card.Text>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100 p-4 text-center border shadow-sm">
                    <FaClipboardList className="h1 text-info mx-auto mb-3" />
                    <Card.Title className="fw-bold">Medida del Pallet</Card.Title>
                    <Card.Text>Qué tipo de Pallet utilizan y su medida.</Card.Text>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="py-5 text-dark">
        <Container>
          <h2 className="text-center fw-bold mb-4">
            Completa y cotiza
          </h2>
        </Container>
        <WhatsappForm
          title="Generá tu mensaje para WhatsApp"
          description="Completa los siguientes datos para armar el mensaje de forma automática y enviarlo a nuestro equipo."
          fields={maritimoFields}
          whatsappNumber="543492419489"
          messageTemplate={maritimoMessage}
        />
      </div>

    </>
  );
};

export default CotizacionMaritima;



// // src/pages/CotizacionMaritima.tsx
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { FaBox, FaPallet, FaShippingFast, FaWhatsapp, FaFileAlt, FaFileInvoice, FaClipboardList } from 'react-icons/fa';
// import WhatsappForm from '../components/WhatsappForm';
// import fondoMaritima from '../assets/images/paisaje3.jpg';



// const CotizacionMaritima = () => {

//   return (
//     <>
//       {/* Sección 1: Introducción y propuesta de valor */}
//       <section 
//         className="py-5 text-white hero-maritimo d-flex align-items-center justify-content-center"
//         style={{ backgroundImage: `url(${fondoMaritima})` }}
//       >
//         <div className='maritimo-content'>
//           <Container>
//             <Row className="align-items-center">
//               <Col lg={8} className="text-center text-lg-start">
//                 <h1 className="fw-bold">
//                   Cotizá tu <span className="text-info">importación Marítima</span> 🚢
//                 </h1>
//                 <p className="lead mt-3 fs-5">
//                   ¿Querés importar vía marítima? Es ideal para productos de gran peso y dimensiones.
//                 </p>
//                 <div className="d-flex flex-wrap gap-5 justify-content-center mt-4 text-info">
//                   <FaBox className="h1" />
//                   <FaPallet className="h1" />
//                   <FaShippingFast className="h1" />
//                 </div>
//               </Col>
//               <Col lg={4} className="mt-4 mt-lg-0 text-center">
//                 <div className="p-4 rounded shadow-lg bg-info text-white">
//                   <h4 className="fw-bold mb-3">Servicios de Transporte Marítimo</h4>
//                   <p>
//                     Podés importar **CONTENEDORES COMPLETOS (FCL)** o paletizar tu mercancía en un **CONTENEDOR COMPARTIDO (LCL)**.
//                   </p>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </section>

//       {/* Sección 2: Proceso para obtener la cotización marítima */}
//       <section className="py-5 bg-light text-dark">
//         <Container>
//           <Row className="justify-content-center">
//             <Col lg={10}>
//               <h2 className="text-center fw-bold mb-4">
//                 ¿Cómo obtengo mi cotización de flete marítimo?
//               </h2>
//               <h4 className="text-center fw-bold mb-4">
//                 Contacta a tu proveedor y pedile la siguiente información:
//               </h4>
//               <Row className="g-4 mt-4">
//                 <Col md={4}>
//                   <Card className="h-100 p-4 text-center border shadow-sm">
//                     <FaFileInvoice className="h1 text-info mx-auto mb-3" />
//                     <Card.Title className="fw-bold">Packing List & Invoice Proforma</Card.Title>
//                     <Card.Text>El detalle completo de tu carga y el modelo de factura.</Card.Text>
//                   </Card>
//                 </Col>
//                 <Col md={4}>
//                   <Card className="h-100 p-4 text-center border shadow-sm">
//                     <FaFileAlt className="h1 text-info mx-auto mb-3" />
//                     <Card.Title className="fw-bold">HS Code & Incoterm</Card.Title>
//                     <Card.Text>Clasificación aduanera del producto y el incoterm (Ideal FOB).</Card.Text>
//                   </Card>
//                 </Col>
//                 <Col md={4}>
//                   <Card className="h-100 p-4 text-center border shadow-sm">
//                     <FaBox className="h1 text-info mx-auto mb-3" />
//                     <Card.Title className="fw-bold">Origen / Destino & Tipo de mercadería</Card.Title>
//                     <Card.Text>Información sobre la carga y su tipo.</Card.Text>
//                   </Card>
//                 </Col>
//               </Row>
//               <div className="text-center mt-5">
//                 <h4 className="fw-bold mb-3">Para contenedores compartidos, además necesitamos saber:</h4>
//                 <Row className="g-4 justify-content-center">
//                   <Col md={6}>
//                     <Card className="h-100 p-4 text-center border shadow-sm">
//                       <FaPallet className="h1 text-info mx-auto mb-3" />
//                       <Card.Title className="fw-bold">Carga Apilable</Card.Title>
//                       <Card.Text>Si la carga es <span className='fw-bold'> apilable </span> o <span className='fw-bold'> no apilable </span>.</Card.Text>
//                     </Card>
//                   </Col>
//                   <Col md={6}>
//                     <Card className="h-100 p-4 text-center border shadow-sm">
//                       <FaClipboardList className="h1 text-info mx-auto mb-3" />
//                       <Card.Title className="fw-bold">Medida del Pallet</Card.Title>
//                       <Card.Text>Qué tipo de Pallet utilizan y su medida.</Card.Text>
//                     </Card>
//                   </Col>
//                 </Row>
//                 <p className="lead fw-bold mt-4">
//                   Con esa información, contáctanos y obtén tu cotización en menos de 24 horas.
//                 </p>
//                 <a href="https://wa.me/543874069341" target="_blank" rel="noopener noreferrer" className="btn btn-success fw-bold p-3">
//                   <FaWhatsapp className="me-2" />
//                   Ingresa aquí y pide tu cotización
//                 </a>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <WhatsappForm />
//     </>
//   );
// };

// export default CotizacionMaritima;