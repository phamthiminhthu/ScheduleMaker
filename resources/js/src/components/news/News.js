import CardNews from "./cardNews/CardNews";
import { Container, Row, Col, Button } from 'react-bootstrap';
import './News.scss'
import ButtonClickCommon from '../buttonClick/ButtonClickCommon';

function showListNews(listNews) {
    return (
        listNews.map((item, index) => {
            return (
                <Col xs="4" key={item.image + index}>
                    <CardNews />
                </Col>
            )

        })
    )

}


function News() {
    var listNews = [
        {
            image: "member1",
            content: "minh thu"
        },
        {
            image: "member1",
            content: "minh thu1"
        },
        {
            image: "member1",
            content: "minh thu2"
        },


    ]
    return (
        <div id="news-blog">

            <Container>
                <div className="title-items margin-items ">
                    <h1>NEWS SCHOOL</h1>
                    <h3>The latest news of Ha Noi University and Techology Science</h3>

                </div>
                <div className="list-card-news margin-items margin-bottom-items">
                    <Row>
                        {showListNews(listNews)}
                    </Row>

                </div>

               <ButtonClickCommon/>

            </Container>
        </div>
    )

}

export default News;