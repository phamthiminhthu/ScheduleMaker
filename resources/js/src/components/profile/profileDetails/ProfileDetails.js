import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import { Avatar } from '@mui/material';
import axios from 'axios';
import avatar from '../../../assets/avatarDefault.png';

export default function ProfileDetails() {

    const [dataUser, setDataUser] = useState([])
    const [isUpload, setUpload] = useState(false);

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

    const [imagedata, setImagedata] = useState('');
    const [image, setImage] = useState('');
    const handleChangeImage = file => {
        if (file.target.files.length !== 0) {
            setImagedata(URL.createObjectURL(file.target.files[0]));
            setImage(file.target.files[0]);
            setUpload(true);
        }else{
            setUpload(false);
        }

    }

    const submitDataImage = (e) => {
        e.preventDefault();
        setUpload(false);
        const fData = new FormData();
        fData.append('image', image);
        axios.post(`/api/upload-image`, fData).then(res => {
            console.log("response", res);

        }).catch((e) => {
            console.error('Failure', e);
        })
    }


    return (
        <div id="profile-details">
            <Container>
                <Row>
                    <Col xs="3">
                        <Card>
                            <Card.Header className="text-profile">Profile Picture</Card.Header>
                            <Card.Body className="text-center" as="form" onSubmit={submitDataImage}>
                                <Card.Title>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={ imagedata ? imagedata : avatar}
                                        sx={{ width: 100, height: 100 }}
                                        className="m-auto"
                                    />
                                </Card.Title>
                                <input
                                    type="file"
                                    id="file-id"
                                    name="image"
                                    onChange={handleChangeImage}
                                    hidden
                                 
                                />
                                <Button as="label" htmlFor="file-id" className="button-profile" style={{display : isUpload ? 'none' : 'block'}}>Upload</Button>
                                <Button className="button-profile" type="submit" onClick={submitDataImage} style={{display : isUpload ? 'block' : 'none' }}>Save</Button>

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
        </div >
    )
}