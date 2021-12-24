import * as React from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';

export default function ChangePassword() {
    return (
        <div className="change-password">
            <Container>
                <Row>
                    <Col xs="12">
                        <Alert severity="warning">Alert! <br />
                            <span>Your password should be changed regularly. So change it periodically. Do not share your password.</span>
                        </Alert>
                        <div className="mt-5">
                            <Card border="light">
                                <Card.Header className="text-profile">Change password</Card.Header>
                                <Card.Body>
                                    <TextField sx={{ m: 1 }} label="Current Password" variant="outlined" />
                                    <div >
                                        <TextField sx={{ m: 1 }} label="New Password" variant="outlined" />
                                        <TextField sx={{ m: 1 }} label="Confirm Password" variant="outlined" />
                                    </div>
                                    <div className="float-end">
                                        <Button className="mx-1 mt-3 button-profile" variant="primary">Change Password</Button>
                                        <Button className="mx-1 mt-3 button-profile" variant="primary">Clear</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>

                    </Col>
                </Row>

            </Container>


        </div>
    )

}