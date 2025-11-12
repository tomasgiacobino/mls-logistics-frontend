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
        {/* Container fluid para evitar padding excesivo en móvil */}
        <Container fluid className="px-3 px-md-4">
          {/* Contenedor principal: flex row en desktop/tablet, column en móvil */}
          <div className="d-flex align-items-center justify-content-between w-100">
            {/* Logo + Texto: encerrados en un div para controlar su comportamiento */}
            <div className="header-logo-text d-flex align-items-center">
              {/* Logo */}
              <img
                src={logo}
                alt="Logo MLS Comercio Internacional"
                height="40"
                className="me-2"
              />
              {/* Texto */}
              <span className='text-primary fw-bold me-2'>MLS&nbsp;</span>
              <span className='text-light'>COMERCIO INTERNACIONAL</span>
            </div>
  
            {/* Botón hamburguesa: siempre a la derecha */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
          </div>
  
          {/* Menú colapsable */}
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end mt-3 mt-lg-0">
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