import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Button } from '@mui/material'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import './Header.scss'


function Header() {
    return (
        <div id="header-page">
            <Navbar expand="lg">
                <Container className="mt-2">
                    <Row>
                        <Col xs="4">
                            <Navbar.Brand href="#home">
                                
                                    <img src={logo} className="pt-2">
                                    </img>
                               
                            </Navbar.Brand>
                        </Col>
                        <Col xs="8">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse  id="basic-navbar-nav">
                                <Nav className="list-menu">
                                    <Link to="/home" className="text-white nav-link">Home</Link>
                                    <Link to="/schedule" className="text-white">Schedule</Link>
                                    <Nav.Link href="#news" className="text-white">News</Nav.Link>
                                    <Link to="/speaker-page"  className="text-white nav-link">Speakers</Link>
                                    <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
                                    <Link to="/login" className="nav-link">
                                        <Button variant="contained" className="border-0">Sign In</Button>
                                    </Link>
                                    <Link to="/register" className="nav-link">
                                        <Button variant="contained" color="success" className="border-0">Sign Up</Button>
                                    </Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                    </Row>

                </Container>
            </Navbar>
        </div>
    )

}

export default Header;