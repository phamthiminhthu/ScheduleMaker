import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Button } from '@mui/material'
import logo from '../../assets/logo.png'
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
                                    <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                                    <Nav.Link href="#schedule" className="text-white">Schedule</Nav.Link>
                                    <Nav.Link href="#news" className="text-white">News</Nav.Link>
                                    <Nav.Link href="#speaker" className="text-white">Speakers</Nav.Link>
                                    <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
                                    <Nav.Link href="#sign-in">
                                        <Button variant="contained" className="border-0">Sign In</Button>
                                    </Nav.Link>
                                    <Nav.Link href="sign-up">
                                        <Button variant="contained" color="success" className="border-0">Sign Up</Button>
                                    </Nav.Link>
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