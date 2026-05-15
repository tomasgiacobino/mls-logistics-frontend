import { Container, Row, Col } from 'react-bootstrap'
import { FaCalendarAlt, FaCheckCircle } from 'react-icons/fa'
import manuFoto from '../assets/images/Comunes/Manu.png'

const AsesoriaManu = () => {
  return (
    <section className="py-5 bg-primary text-white">
      <Container>
        <Row className="align-items-center gy-4">
          <Col md={3} className="text-center">
            <img
            src={manuFoto}
            alt="Manu Muñoz"
            style={{
                width: '160px',
                aspectRatio: '3/4',
                objectFit: 'cover',
                borderRadius: '12px',
                margin: '0 auto 12px',
                display: 'block'
            }}
            />
            <h5 className="fw-bold mb-0">Manu Muñoz</h5>
            <small className="opacity-75">Director Estratégico</small>
          </Col>
          <Col md={5} className="mb-4 mb-md-0">
            <h2 className="fw-bold mb-3">15 minutos pueden cambiar tu próxima operación</h2>
            <p className="lead">
              Agendá una reunión via Meet sin costo con Manu Muñoz, nuestro Director Estratégico. Analizamos tu proyecto, respondemos tus dudas y te damos un primer camino concreto para avanzar.
            </p>
          </Col>
          <Col md={4}>
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
              <a
                href="https://calendar.app.google/4VcAFfjMj1GLnhxx8"
                target="_blank"
                rel="noreferrer"
                className="btn btn-light text-primary px-4 py-3 w-100"
                style={{ maxWidth: '380px', fontWeight: 900, fontSize: '1.2rem' }}
              >
                <FaCalendarAlt className="me-2 mb-1 fs-3" />
                Reservá tu asesoría gratuita
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AsesoriaManu