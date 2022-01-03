import * as React from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import { set } from 'date-fns';
import { appendErrors } from 'react-hook-form';


export default function ChangePassword() {
    const [passwd, setPasswd] = React.useState({
        old_password: '',
        new_password: '',
        confirm_password: ''
    });

    // axios.get(`/current-user`).then(res=>{
    //     console.log("current", res);
    // })

    const [errors, setErrors] = React.useState([]);
    const [matchErrors, setMatchErrors] = React.useState([]);


    const handleChange = (props) => e => {
        setPasswd({ ...passwd, [props]: e.target.value });
    }
    const [loading, setLoading] = React.useState(false);

    
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
        const data = {
            old_password: passwd.old_password,
            password: passwd.new_password,
            confirm_password: passwd.confirm_password
        }
        try {
            await axios.post(`/api/change-password`, data).then(res => {
                if (res.status === 200) {
                    setErrors([]);
                    setMatchErrors('');
                    console.log("change password successfully")
                    setOpen(true);
                }

            });
        } catch (e) {
            if (e.response.status === 400) {
                setMatchErrors(e.response.data.message)
                setErrors([]);
            } else {
                setErrors(e.response.data.errors);
                setMatchErrors('');
            }

        } finally {
            setLoading(false);
        }

        console.log(errors);

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

                                    {errors.old_password ?
                                        (<TextField sx={{ m: 1 }} label="Current Password" variant="outlined"
                                            value={passwd.old_password} onChange={handleChange('old_password')}
                                            error helperText={errors.old_password}
                                        />) : (matchErrors != '' ?
                                            (<TextField sx={{ m: 1 }} label="Current Password" variant="outlined"
                                                value={passwd.old_password} onChange={handleChange('old_password')}
                                                error helperText={matchErrors}
                                            />)
                                            :
                                            (<TextField sx={{ m: 1 }} label="Current Password" variant="outlined"
                                                value={passwd.old_password} onChange={handleChange('old_password')}
                                            />))
                                    }
                                    <div >
                                        {
                                            errors.password ?
                                                (<TextField sx={{ m: 1 }} label="New Password" variant="outlined" value={passwd.new_password}
                                                    onChange={handleChange('new_password')}
                                                    error helperText={errors.password} />) :
                                                (<TextField sx={{ m: 1 }} label="New Password" variant="outlined" value={passwd.new_password}
                                                    onChange={handleChange('new_password')}
                                                />)
                                        }

                                        {
                                            errors.confirm_password ?
                                                (<TextField sx={{ m: 1 }} label="Confirm Password" variant="outlined"
                                                    value={passwd.confirm_password} onChange={handleChange('confirm_password')}
                                                    error helperText={errors.confirm_password} />) :
                                                (<TextField sx={{ m: 1 }} label="Confirm Password" variant="outlined"
                                                    value={passwd.confirm_password} onChange={handleChange('confirm_password')}
                                                />)
                                        }
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