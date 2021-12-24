import { Col, Container, Row } from 'react-bootstrap';
import './ScheduleDemo.scss';
import MyAssignmentsDemo from './myAssignmentsDemo/MyAssignmentsDemo';
import MyScheduleDemo from './myScheduleDemo/MyScheduleDemo';
import ButtonClickCommon from '../buttonClick/ButtonClickCommon';

function ScheduleDemo() {
    return (
        <div id="schedule-demo">
            <div className="list-schedule">
                <Container>
                    <Row>
                        <Col xs="12">
                            <div className="title-items margin-items ">
                                <h1 className="text-white">SCHEDULE DEMO</h1>
                                <h3 className="text-white">
                                    Let's See The Demo Schedule
                                </h3>
                            </div>
                        </Col>
                        <Col xs="12">
                            <MyAssignmentsDemo />
                        </Col>

                        <Col xs="12">
                            <MyScheduleDemo />
                        </Col>
                        <Col xs="12">
                           <div className="margin-items">
                           <ButtonClickCommon />
                           </div>
                        </Col>
                    </Row>
                </Container>


            </div>

        </div>
    )

}

export default ScheduleDemo;