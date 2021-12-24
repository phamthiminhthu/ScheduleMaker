import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import { Avatar } from '@mui/material';

export default function ProfileDetails() {


    return (
        <div id="profile-details">
            <Container>
                <Row>
                    <Col xs="3">
                        <Card>
                            <Card.Header className="text-profile">Profile Picture</Card.Header>
                            <Card.Body className="text-center">
                                <Card.Title>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/1.jpg"
                                        sx={{ width: 70, height: 70 }}
                                        className="m-auto"
                                    />
                                </Card.Title>
                                <Card.Text>
                                    Upload/Change Your Profile Image
                                </Card.Text>
                                <Button variant="primary" className="button-profile">Upload Avatar</Button>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col xs="9">

                        <Card>
                            <Card.Header className="text-profile">Profile Details</Card.Header>
                            <Card.Body>

                                <Table borderless>
                                    <tbody>
                                        <tr >
                                            <td>FullName</td>
                                            <td style={{ 'width': '10%' }}>: </td>
                                            <td>Phạm Thị Minh Thư</td>
                                        </tr>
                                        <tr >
                                            <td>Email</td>
                                            <td>: </td>
                                            <td>minhthutb111@gmail.com</td>
                                        </tr>
                                        <tr >
                                            <td>Full Name</td>
                                            <td>: </td>
                                            <td>Phạm Thị Minh Thư</td>
                                        </tr>
                                        <tr>
                                            <td>Gender</td>
                                            <td>: </td>
                                            <td>Female</td>
                                        </tr>
                                        <tr>
                                            <td>Date Of Birth</td>
                                            <td>: </td>
                                            <td>01/11/2000</td>
                                        </tr>
                                        <tr>
                                            <td>PhoneNumber</td>
                                            <td>: </td>
                                            <td>0362989028</td>
                                        </tr>
                                        <tr className="p-5">
                                            <td>Education</td>
                                            <td>: </td>
                                            <td>Ha Noi University Techonlogy and Science</td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}