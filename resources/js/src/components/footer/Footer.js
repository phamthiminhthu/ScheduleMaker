import * as React from 'react';
import { Container, Row, Col, Button, Nav, Form } from 'react-bootstrap';
import { FormControl, Box, List, ListItem, Grid, ListItemText, ListItemIcon } from '@mui/material'
import './Footer.scss';
import FooterLogo from '../../assets/footer-logo.png';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <div id="footer">
            <div className="footer-background">
                <Container>
                    <Row>
                        <div className="search-sign-up margin-items">
                            <Col xs={12}>
                                <h3 className="text-center mb-0">Join Us</h3>
                            </Col>
                            <div className="form-signUp text-center">
                                <Row>
                                    <Col xs="12">
                                        <FormControl>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    p: 1,
                                                    m: 1
                                                }}>
                                                <Form.Control type="email" placeholder="Enter your email Address" className="input-email" />
                                                <Button variant="primary">SUBSCRIBE</Button>
                                            </Box>

                                        </FormControl>
                                    </Col>
                                </Row>
                            </div>

                        </div>
                        <div className="contact-us mt-5">
                            <Row>
                                <Col xs="4">
                                    <a href="#">
                                        <img src={FooterLogo}></img>
                                    </a>
                                </Col>
                                <Col xs="4">
                                    <div className="view-location pt-4">
                                        <h3 className="footer-title" >Location Contact</h3>
                                        <Grid item xs={12}>
                                            <List >
                                                <ListItem className="p-0" >
                                                    <ListItemIcon>
                                                        <MarkEmailUnreadIcon></MarkEmailUnreadIcon>
                                                    </ListItemIcon>
                                                    <ListItemText className="info-contact"> 
                                                        wschedulebk@gmail.com
                                                    </ListItemText>

                                                </ListItem>
                                                <ListItem className="p-0" >
                                                    <ListItemIcon>
                                                        <LocalPhoneIcon></LocalPhoneIcon>
                                                    </ListItemIcon>
                                                    <ListItemText className="info-contact">
                                                        +84 0362989028
                                                    </ListItemText>
                                                </ListItem>
                                                <ListItem className="p-0" >
                                                    <ListItemIcon>
                                                        <AddLocationAltIcon></AddLocationAltIcon>
                                                    </ListItemIcon>
                                                    <ListItemText className="info-contact">
                                                        1 Dai Co Viet Street <br /> Hai Ba Trung District, Ha Noi, Viet Nam
                                                    </ListItemText>
                                                </ListItem>

                                            </List>

                                        </Grid>

                                    </div>
                                </Col>
                                <Col xs="4">
                                    <div className="social-connection pt-4">
                                        <h3 className="footer-title" >Social Connection</h3>
                                        <p className="pt-2 info-contact"> You should connect social area <br /> for Any update </p>

                                        <Nav
                                            activeKey="/home"
                                            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                                        >
                                            <Nav.Item>
                                                <Nav.Link href="/home"><FacebookIcon></FacebookIcon></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="link-1"><InstagramIcon></InstagramIcon></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="link-2"><TwitterIcon></TwitterIcon></Nav.Link>
                                            </Nav.Item>

                                        </Nav>

                                    </div>
                                </Col>
                            </Row>

                        </div>
                        <div className="copyright pb-3">
                            <Row>
                                <Col xs="12" className="mt-5">
                                    <hr></hr>
                                </Col>
                                <Col xs="12" className="pt-2" >
                                    <p className="text-center info-contact">
                                        <span style={{'color':'#efa506'}}>© </span>
                                        <span>2021 Emeet is powered by <span style={{'color':'#efa506'}}>Minh Thư</span> </span>
                                        <span>
                                            The property of their owners.
                                        </span>
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Row >
                </Container >
            </div>

        </div>
    )



}

export default Footer;