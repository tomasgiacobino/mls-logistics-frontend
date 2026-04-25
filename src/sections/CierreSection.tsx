import { Container, Row, Col } from 'react-bootstrap'
import { FaCalendarAlt } from 'react-icons/fa'

const CierreSection = () => {
  return (
    <section className="py-5 bg-dark text-white text-center">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <h2 className="display-4 fw-bold mb-4 text-primary">El mundo es el mercado</h2>
            <p className="lead mb-3 fs-4">
              Importar ya no es el límite. Exportar ya no es un sueño. Con MLS Comercio Internacional tenés el equipo, la red y la experiencia para llegar más lejos.
            </p>
            <p className="mb-5 text-white-50 fs-5">
              Agendá una reunión sin costo y analizamos tu proyecto juntos.
            </p>
            {/* PENDIENTE: reemplazar href="#" con link real de Google Calendar */}
            <a
              href="#"
              className="btn btn-primary fw-bold px-5 py-3 fs-5"
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