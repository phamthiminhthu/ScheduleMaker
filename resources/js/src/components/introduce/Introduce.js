import { Container, Row, Col } from "react-bootstrap";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Introduce.scss';
import ButtonClickCommon from '../buttonClick/ButtonClickCommon';
import aboutIntro from '../../assets/about-sp.jpeg'

export default function Introduce() {
    return (
        <div id="introduce-about-web">
            <div className="introduce-content ">
                <Container>
                    <Row>
                        
                        <Col xs="7">
                            <Card className="card-introduce margin-items margin-bottom-items">
                                <CardContent>
                                    <Typography gutterBottom>
                                        <h1 className="introduce-themes">
                                            SCHEDULE & NEW NOTES
                                        </h1>
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        <h3 className="question-introduct">Why schedule & new notes?</h3>
                                    </Typography>
                                    <Typography variant="body2" className="content-introduce">
                                    Morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, tristique senectus et netus et malesuada fames ac turpis egestas ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris Eonec eu ribero sit amet quam egestas semper. Aenean are ultricies mi senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae vitae fames ac turpis egestas.
                                    </Typography>
                                </CardContent>
                                <CardActions >
                                    <ButtonClickCommon/>
                                </CardActions>
                            </Card>
                        </Col>
                        <Col xs="5">
                            <img src={aboutIntro} style={{'width':'400px', 'height': '500px', 'paddingTop': '30px'}}></img>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )

}