import React from 'react';
import { Col, Row, Container, Nav } from 'react-bootstrap';
import { Avatar} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import './Reviews.scss';
import StarIcon from '@mui/icons-material/Star';
import author from '../../assets/author1.jpeg';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function star(stars) {
    var indents = [];
    for (var i = 0; i < 5; i++) {
        if (i < stars) {
            indents.push(
                <Nav.Item key={i} className="star-good" >

                    <StarIcon></StarIcon>

                </Nav.Item>
            )
        } else {
            indents.push(
                <Nav.Item key={i}  className="star-bad">
                    <StarBorderIcon></StarBorderIcon>
                </Nav.Item>
            )
        }

    }
    return (
        <Nav className="justify-content-center stars-review" >
            {indents}
        </Nav>
    );
}

function ListCarousel(itemSlideCarousel) {
    return (
        itemSlideCarousel.map((item, index) => {
            return (
                <div key={item.nameAuthor + index} className="text-center item-reviews">
                    <div class="title-item-reviews">
                        <h3>{item.title}</h3>
                    </div>
                    <p className="comment-reviews">{item.contentComment}</p>
                    <Avatar alt="Remy Sharp" src={author} className="m-auto avatar-reviewer" />
                    <p class="name-author">{item.nameAuthor}</p>
                    {star(item.star)}
                </div>
            )
        })
    )
}

function Reviews() {
    var itemSlideCarousel = [
        {
            title: "This is best Event Organization in the world",
            contentComment: " Proin sodales dapibus magna, et porta leo convallis sed. Duis tincidunt libero ut neque mollis dignissim. Nullam ultricies sit amet quam non iaculis. Curabitur convallis nulla non nibh aliquet rhoncus. Donec at tempus felis.",
            avatar: "../../assets/author1.jpeg",
            nameAuthor: "Minh Thu",
            star: 4
        },
        {
            title: "This is best Event Organization in the world",
            contentComment: " Proin sodales dapibus magna, et porta leo convallis sed. Duis tincidunt libero ut neque mollis dignissim. Nullam ultricies sit amet quam non iaculis. Curabitur convallis nulla non nibh aliquet rhoncus. Donec at tempus felis.",
            avatar: "../../assets/author1.jpeg",
            nameAuthor: "Minh Thu",
            star: 4
        },
        {
            title: "This is best Event Organization in the world",
            contentComment: " Proin sodales dapibus magna, et porta leo convallis sed. Duis tincidunt libero ut neque mollis dignissim. Nullam ultricies sit amet quam non iaculis. Curabitur convallis nulla non nibh aliquet rhoncus. Donec at tempus felis.",
            avatar: "../../assets/author1.jpeg",
            nameAuthor: "Minh Thu",
            star: 4
        },
        {
            title: "This is best Event Organization in the world",
            contentComment: " Proin sodales dapibus magna, et porta leo convallis sed. Duis tincidunt libero ut neque mollis dignissim. Nullam ultricies sit amet quam non iaculis. Curabitur convallis nulla non nibh aliquet rhoncus. Donec at tempus felis.",
            avatar: "../../assets/author1.jpeg",
            nameAuthor: "Minh Thu",
            star: 4
        },
        {
            title: "This is best Event Organization in the world",
            contentComment: " Proin sodales dapibus magna, et porta leo convallis sed. Duis tincidunt libero ut neque mollis dignissim. Nullam ultricies sit amet quam non iaculis. Curabitur convallis nulla non nibh aliquet rhoncus. Donec at tempus felis.",
            avatar: "../../assets/author1.jpeg",
            nameAuthor: "Minh Thu",
            star: 4
        },
        {
            title: "This is best Event Organization in the world",
            contentComment: " Proin sodales dapibus magna, et porta leo convallis sed. Duis tincidunt libero ut neque mollis dignissim. Nullam ultricies sit amet quam non iaculis. Curabitur convallis nulla non nibh aliquet rhoncus. Donec at tempus felis.",
            avatar: "../../assets/author1.jpeg",
            nameAuthor: "Minh Thu",
            star: 4
        },
        {
            title: "This is best Event Organization in the world",
            contentComment: " Proin sodales dapibus magna, et porta leo convallis sed. Duis tincidunt libero ut neque mollis dignissim. Nullam ultricies sit amet quam non iaculis. Curabitur convallis nulla non nibh aliquet rhoncus. Donec at tempus felis.",
            avatar: "../../assets/author1.jpeg",
            nameAuthor: "Minh Thu",
            star: 4
        }

    ]
    return (
        <div id="reviews" >
            <div className="reviews-carousel">
                <Container>
                    <Row>
                        <Col xs="12">
                            <div className="title-items margin-items">
                                <h1>WHAT CLIENTS SAY</h1>
                                <h3>Welcome to the dedicated to building remarkable Testimonials!</h3>
                            </div>
                        </Col>

                        <Col xs="12" >
                            <div className="margin-items list-reviews">
                                <Carousel
                                    activeIndicatorIconButtonProps={{
                                        style: {
                                            color: '#554bb9' // 2
                                        },
                                    }}
                                    indicatorContainerProps={{
                                        style: {
                                            marginTop: '10px',
                                           paddingBottom:'70px'// 5

                                        }

                                    }}
                                    animation={'slide'}
                                    NextIcon={<img src="http://themearth.com/demo/html/emeet/view/assets/img/arrow-right-ash.png"/>}
                                    PrevIcon={<img src="http://themearth.com/demo/html/emeet/view/assets/img/arrow-left-ash.png"/>}
                                    navButtonsAlwaysVisible={true}
                                    navButtonsProps={{
                                        style: {
                                            color:'red',
                                            background:'rgba(255, 255, 255, 0.95)'
                                        }
                                    }}
                                >
                                    {ListCarousel(itemSlideCarousel)}

                                </Carousel>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>

        </div >


    )

}

export default Reviews;