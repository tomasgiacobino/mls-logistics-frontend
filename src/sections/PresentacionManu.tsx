import { Container, Row, Col } from 'react-bootstrap'

const PresentacionManu = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center mb-4 mb-md-0">
            {/* PENDIENTE: reemplazar por foto real de Manu Muñoz */}
            <div
              style={{
                width: '100%',
                aspectRatio: '3/4',
                background: '#dee2e6',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6c757d',
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
            >
              FOTO MANU MUÑOZ — PENDIENTE
            </div>
          </Col>
          <Col md={8}>
            <h2 className="fw-bold text-primary mb-1">Manu Muñoz</h2>
            <h5 className="text-secondary mb-4">Director Estratégico</h5>
            <p className="lead mb-4">
              Especialista en comercio internacional, con experiencia en el desarrollo de operaciones de importación y exportación, así como en la generación de vínculos comerciales con proveedores y empresas a nivel global.
            </p>
            <blockquote className="blockquote border-start border-primary border-4 ps-3">
              <p className="fst-italic">
                "A lo largo de mi trayectoria acompañé a emprendedores y compañías a expandir sus negocios, optimizar procesos y acceder a nuevas oportunidades en mercados internacionales. Hoy lidero la estrategia de MLS Comercio Internacional, con el objetivo de acercar el mundo a más empresas."
              </p>
            </blockquote>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PresentacionManu