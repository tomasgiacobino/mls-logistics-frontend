import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStar, FaRocket, FaShieldAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const tabs = [
  {
    id: 'diferencial',
    label: 'Por qué es distinto',
    icon: <FaStar className="me-2 text-primary" />,
    items: [
      'Acompañamiento real durante tu proceso de importación, no solo teoría.',
      'Seguimiento durante tus primeros pasos, donde se cometen el 80% de los errores.',
      'Soporte para validar decisiones clave antes de invertir.',
      'Respaldo en los momentos críticos de la operación.',
    ],
  },
  {
    id: 'logras',
    label: 'Lo que lográs',
    icon: <FaRocket className="me-2 text-primary" />,
    items: [
      'Aprendés y aplicás en simultáneo: no te quedás solo en la teoría.',
      'Reducís al mínimo el margen de error.',
      'Tenés claridad antes de invertir, no después.',
      'Avanzás más rápido y con más seguridad.',
      'Tomás cada decisión con respaldo profesional.',
      'Importar con seguridad desde la primera operación.',
      'Reducir costos comprando en el exterior.',
      'Crear nuevas oportunidades de negocio.',
      'Escalar tu empresa con operaciones internacionales sostenidas.',
    ],
  },
  {
    id: 'elegirnos',
    label: 'Por qué elegirnos',
    icon: <FaShieldAlt className="me-2 text-primary" />,
    items: [
      'Experiencia real y verificable en comercio internacional.',
      'Explicaciones simples y aplicables, no teoría de manual.',
      'Acompañamiento personalizado en cada caso.',
      'Enfoque en rentabilidad, no solo en "saber operar".',
      'Cientos de clientes que ya arrancaron con nosotros.',
    ],
  },
];

const CursoTabs = () => {
  const [activeTab, setActiveTab] = useState('diferencial');
  const [openAccordion, setOpenAccordion] = useState<string | null>('diferencial');

  const activeContent = tabs.find(t => t.id === activeTab);

  return (
    <section className="py-4 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>

            {/* TABS — desktop */}
            <div className="d-none d-md-block">
              <div className="d-flex justify-content-center border-bottom mb-4 bg-light rounded-top p-1">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`btn fw-bold px-4 py-2 border-0 ${
                      activeTab === tab.id
                        ? 'text-primary bg-white border-bottom border-primary border-2'
                        : 'text-secondary bg-light'
                    }`}
                    style={{ borderRadius: '6px 6px 0 0' }}
                  >
                    {tab.icon}{tab.label}
                  </button>
                ))}
              </div>
              <ul key={activeTab} className="list-unstyled ps-2 tab-content-animated">
                {activeContent?.items.map((item, i) => (
                  <li key={i} className="d-flex align-items-start gap-3 mb-3">
                    {activeContent.icon}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ACORDEÓN — mobile */}
            <div className="d-md-none">
              {tabs.map(tab => (
                <div key={tab.id} className="border rounded mb-2">
                  <button
                    className="w-100 d-flex justify-content-between align-items-center p-3 fw-bold bg-white border-0 text-start"
                    onClick={() => setOpenAccordion(openAccordion === tab.id ? null : tab.id)}
                  >
                    <span>{tab.icon}{tab.label}</span>
                    {openAccordion === tab.id ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {openAccordion === tab.id && (
                    <ul className="list-unstyled p-3 mb-0">
                      {tab.items.map((item, i) => (
                        <li key={i} className="d-flex align-items-start gap-3 mb-3">
                          {tab.icon}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CursoTabs;