import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import { Avatar } from '@mui/material';
import axios from 'axios';

export default function ProfileDetails() {

    const [dataUser, setDataUser] = useState([])

    useEffect(() => {
        let load = true;
        if (load) {
            axios.get(`/api/current-user`).then(res => {
                setDataUser(res.data);
            });
        }
        return (() => {
            load = false;
        })

    }, []);

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
                                            {dataUser.name && <td> {dataUser.name} </td>}
                                        </tr>
                                        <tr >
                                            <td>Email</td>
                                            <td>: </td>
                                            {dataUser.email && <td>{dataUser.email}</td>}
                                        </tr>
                                        <tr>
                                            <td>Gender</td>
                                            <td>: </td>
                                            {dataUser.gender ? <td>{dataUser.gender}</td> : <td>Chưa cập nhật</td>}
                                        </tr>
                                        <tr>
                                            <td>Date Of Birth</td>
                                            <td>: </td>
                                            {dataUser.birthday ? <td>{dataUser.birthday}</td> : <td>Chưa cập nhật</td>}
                                        </tr>
                                        <tr>
                                            <td>PhoneNumber</td>
                                            <td>: </td>
                                            {dataUser.phone ? <td>{dataUser.phone}</td> : <td>Chưa cập nhật</td>}
                                        </tr>
                                        <tr className="p-5">
                                            <td>Education</td>
                                            <td>: </td>
                                            {dataUser.education ? <td>{dataUser.education}</td> : <td>Thông tin chưa được cập nhật</td>}
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