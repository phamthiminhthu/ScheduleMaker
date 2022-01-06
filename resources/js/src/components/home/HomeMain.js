import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import './home.scss'
import bg1 from '../../assets/image/background1.svg'
import bg2 from '../../assets/image/background2.svg'
import svg1 from '../../assets/image/svg1.svg'
import svg2 from '../../assets/image/svg2.svg'
import img1 from "../../assets/image/image1.png";
import img2 from "../../assets/image/image2.png";

const data_list = [
    {
        subTitle: 'A CURATED CALENDAR',
        header: 'Book up efficiently',
        description: 'When invitees select a meeting slot from your schedule, they only see the times you’re available, and only the length and type of meeting you want to have. Your schedule fills up efficiently, and everyone avoids excess email exchanges.',
        button: 'click',
        image: img1,
        backgroud: bg1,
        svg: svg1
    },
    {
        subTitle: 'AUTOMATED NOTIFICATIONS & FOLLOW-UPS',
        header: 'Work like you have a personal assistant',
        description: 'Because Calendly automates administrative tasks like sending reminder emails and follow-ups, you can focus on the work that builds your business and brings customers back for more.',
        button: 'click',
        image: img2,
        backgroud: bg2,
        svg: svg2
    }
]
export default function HomeMain() {
    return (
        <Container>
            <div className="card-top">
                <Row>
                    <Col sx={6}>
                        <div className="card-top__header">
                            <h1>The genius way to work <span>better</span></h1>
                        </div>
                        <div className="card-top__body">
                            <h5>Calendly makes it easy to work smarter when you’re working solo. Meetings, sessions, and appointments become more efficient ways to achieve success and accomplish goals.</h5>
                        </div>
                        <div className="card-top__footer">
                            <button>sign up for free</button>
                        </div>
                    </Col>
                    <Col sx={6}>
                        <div className="card-top__image">
                            <img src="https://images.ctfassets.net/k0lk9kiuza3o/2kiAGfjL7zawukKEtUekPZ/da1805b19b0df1949f667386080dfffa/Individuals_Header_Image_cropped.png?w=986&h=1074&q=50&fm=webp" alt="" />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="sub-card first">
                <Row>
                    <Col xs={6}>
                        <div className="sub-card-img">
                            <img src={data_list[0].backgroud} alt="" />
                            <img src={data_list[0].svg} alt="" />
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="sub-card-header">
                            <div className="sub-card-header__subtitle">
                                {data_list[0].subTitle}
                            </div>
                            <div className="sub-card-header__title">
                                {data_list[0].header}
                            </div>
                        </div>
                        <div className="sub-card-body">
                            {data_list[0].description}
                        </div>
                        <div className="sub-card-footer">
                            <button>{data_list[0].button}</button>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="sub-card second">
                <Row>
                    <Col xs={6}>
                        <div className="sub-card-header" style={{marginLeft:30}}>
                            <div className="sub-card-header__subtitle">
                                <h6>{data_list[1].subTitle}</h6>
                            </div>
                            <div className="sub-card-header__title">
                                <h4>{data_list[1].header}</h4>
                            </div>
                        </div>
                        <div className="sub-card-body" style={{marginLeft:30}}>
                            <h6>{data_list[1].description}</h6>
                        </div>
                        <div className="sub-card-footer">
                            <button>{data_list[1].button}</button>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="sub-card-img">
                            <img src={data_list[1].backgroud} alt="" />
                            <img src={data_list[1].svg} alt="" />
                            <img src={data_list[0].image} alt="" />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
