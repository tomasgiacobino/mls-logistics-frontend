import { Container, Row, Col } from 'react-bootstrap'
import { FaCalendarAlt, FaCheckCircle } from 'react-icons/fa'

const AsesoriaCTA = () => {
  return (
    <section className="py-5 bg-primary text-white">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="fw-bold mb-3">15 minutos pueden cambiar tu próxima operación</h2>
            <p className="lead">
              Agendá una reunión via Meet sin costo con Manu Muñoz, nuestro Director Estratégico. Analizamos tu proyecto, respondemos tus dudas y te damos un primer camino concreto para avanzar.
            </p>
          </Col>
          <Col md={6}>
            <div className="d-flex flex-column align-items-center align-items-md-start gap-3">
              <div className="d-flex flex-column gap-2 mb-2">
                <div className="d-flex align-items-center gap-2">
                  <FaCheckCircle className="fs-5" />
                  <span>Sin compromiso</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <FaCheckCircle className="fs-5" />
                  <span>Sin venta forzada</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <FaCheckCircle className="fs-5" />
                  <span>Con un especialista real</span>
                </div>
              </div>
              {/* PENDIENTE: reemplazar "#" con el link de Google Calendar */}
              <a
                href="https://calendar.app.google/4VcAFfjMj1GLnhxx8"
                target='_blank'
                className="btn btn-light text-primary fw-bold px-4 py-3 w-100"
                style={{ maxWidth: '360px' }}
              >
                <FaCalendarAlt className="me-2" />
                Reservá tu asesoría gratuita
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AsesoriaCTA