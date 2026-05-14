import { Container, Row, Col } from 'react-bootstrap'
import { FaCalendarAlt } from 'react-icons/fa'

const CierreSection = () => {
  return (
    <section className="py-3 bg-dark text-white text-center">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <h2 className="display-6 fw-bold mb-4 text-primary">El mundo es el mercado</h2>
            <p className="lead mb-2 fs-5">
              Importar ya no es el límite. Exportar ya no es un sueño. Con MLS Comercio Internacional tenés el equipo, la red y la experiencia para llegar más lejos.
            </p>
            <p className="mb-4 text-white-50 fs-5">
              Agendá una reunión sin costo y analizamos tu proyecto juntos.
            </p>
            {/* PENDIENTE: reemplazar href="#" con link real de Google Calendar */}
            <a
              href="https://calendar.app.google/4VcAFfjMj1GLnhxx8"
              target='_blank'
              className="btn btn-primary fw-bold px-4 py-2 fs-5"
            >
              <FaCalendarAlt className="me-2" />
              Reservá tu asesoría gratuita
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CierreSection