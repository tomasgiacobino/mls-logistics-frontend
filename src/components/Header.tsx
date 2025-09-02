import { Container, Nav, Navbar, Button} from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogoClick = () => {
        if (location.pathname === '/') {
          window.location.hash = '#home';
        } else {
          navigate('/');
          setTimeout(() => {
            window.location.hash = '#home';
          }, 0);
        }
      };

    return(
        <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
            <Container>
                <Navbar.Brand onClick={handleLogoClick} href='#home'>
                    <span className='text-info fw-bold'>MLS</span>{' '}
                    <span className='text-light'>INTERNATIONAL LOGISTICS</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className='ms-auto'>
                        {/* <Nav.Link href="#about">Sobre Nosotros</Nav.Link> */}
                        <Nav.Link href="#services">Servicios</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        {/* <Nav.Link href="#contact">Contacto</Nav.Link> */}
                        <Button variant="info" className="ms-lg-3">Cotiza tu proyecto</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;