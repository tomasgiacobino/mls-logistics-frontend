import { Container, Nav, Navbar} from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavLinkClick = (hash: string) => {
      if(location.pathname !== '/') {
        navigate('/');
      } 
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if(element) {
          element.scrollIntoView({behavior: 'smooth'});
        }
      }, 100);
    }

    const handleLogoClick = () => {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('home');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    };

    return (
      <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
        <Container>
          <Navbar.Brand onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <span className='text-primary fw-bold'>MLS</span>{' '}
            <span className='text-light'>INTERNATIONAL LOGISTICS</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className='ms-auto'>
              {/* Usamos onClick y una función para manejar la navegación y el scroll */}
              <Nav.Link onClick={() => handleNavLinkClick('#services')}>
                Servicios
              </Nav.Link>
              <Nav.Link onClick={() => handleNavLinkClick('#blog')}>
                Blog
              </Nav.Link>
              {/* Enlaces para navegar a otras páginas */}
              {/* <Nav.Link as={Link} to="/importacionMaritima">
                Cotización Marítima
              </Nav.Link>
              <Nav.Link as={Link} to="/ImportacionAerea">
                Cotización Aérea
              </Nav.Link>
              <Nav.Link as={Link} to="/importador">
                Importador
              </Nav.Link>
              <Nav.Link as={Link} to="/exportacion">
                Exportación
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;