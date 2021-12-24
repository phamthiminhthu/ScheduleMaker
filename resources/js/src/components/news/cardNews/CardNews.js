import news from '../../../assets/news1.jpeg';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { Nav } from 'react-bootstrap';
import './CardNews.scss';

function CardNews() {

    return (
        <div className="card-item-news">
            <Card className="card-news">
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={news}
                    className="button hvr-grow common-css-news"
                />
                <CardContent className="common-css-news">
                    <Typography gutterBottom component="div" className="time-author">
                        <Nav>
                            <Nav.Item>
                                April 25, 2021 | 
                            </Nav.Item>
                            <Nav.Item className="mx-1">
                                 by CTSV
                            </Nav.Item>
                        </Nav>
                    </Typography>
                    <Typography color="text.secondary" className="content-news">
                        Brooklyn Beta was the most important conferen best tristique
                    </Typography>
                </CardContent>
                <CardActions className="common-css-news">
                    <Button size="small">Read More</Button>
                </CardActions>
            </Card>
        </div>
    );
}
export default CardNews;