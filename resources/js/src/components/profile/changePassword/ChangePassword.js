import * as React from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';


export default function ChangePassword() {
    const [passwd, setPasswd] = React.useState({
        old_password: '',
        new_password: '',
        confirm_password: ''
    });

    const handleChange = (props) => e => {
        setPasswd({ ...passwd, [props]: e.target.value });
    }
    const [loading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState([]);
    const [errorsMatchOldPasswd, setErrorsMatchOldPasswd] = React.useState('');

    function validate(passwd) {
        let errors = {}
        if (!passwd.old_password) {
            errors.old_password = "Old password is required"
        }
        if (!passwd.new_password) {
            errors.new_password = "New Password is required"
        }
        if (!passwd.confirm_password) {
            errors.confirm_password = "Confirm  Password is required"
        }
        if (passwd.confirm_password != passwd.new_password) {
            errors.matchPassword = "The confirm password and password must match"
        }
        setErrors(errors);
    }
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const handleChangePassword = async (e) => {
        setLoading(true);
        e.preventDefault();
        console.log(passwd);
        const data = {
            old_password: passwd.old_password,
            password: passwd.new_password,
            confirm_password: passwd.confirm_password
        }
        try {
            await axios.post(`/api/change-password`, data).then(res => {
                if (res.status === 200) {
                    console.log("change password successfully")
                    setOpen(true);
                }

            });
        } catch (e) {
            if (e.response.status === 400) {
                setErrorsMatchOldPasswd(e.response.message);
            }

        } finally {
            setLoading(false);
        }


    }


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
                                    <TextField sx={{ m: 1 }} label="Current Password" variant="outlined"
                                        value={passwd.old_password} onChange={handleChange('old_password')}
                                    />
                                    <div >
                                        <TextField sx={{ m: 1 }} label="New Password" variant="outlined" value={passwd.new_password}
                                            onChange={handleChange('new_password')}
                                        />

                                        <TextField sx={{ m: 1 }} label="Confirm Password" variant="outlined"
                                            value={passwd.confirm_password} onChange={handleChange('confirm_password')}
                                        />
                                    </div>
                                    <div className="float-end">
                                        <Button className="mx-1 mt-3 button-profile" variant="primary" onClick={handleChangePassword}
                                            disabled={loading}> {loading ? "Loading" : "Change Password"} </Button>
                                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                                Change password sucessfully!
                                            </Alert>
                                        </Snackbar>
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