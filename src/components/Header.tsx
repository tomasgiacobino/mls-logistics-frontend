import { Container, Nav, Navbar} from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/images/logos/Recurso 18.png'; // 👈 Importa tu logo aquí


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
        <Navbar.Brand onClick={handleLogoClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          {/* <img
            src={logo}
            alt="Logo MLS International Logistics"
            height="40"
            className="me-2"
          /> */}
          <span className='text-primary fw-bold'>MLS&nbsp;</span>
          <span className='text-light'>COMERCIO INTERNACIONAL</span>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className='ms-auto'>              
              <Nav.Link onClick={() => handleNavLinkClick('#services')}>
                Servicios
              </Nav.Link>
              <Nav.Link onClick={() => handleNavLinkClick('#blog')}>
                Blog
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;