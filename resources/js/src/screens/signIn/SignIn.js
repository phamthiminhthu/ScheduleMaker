import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import './SignIn.scss';
import '../cssCommonForm/common.scss';
import { FormControl, Button, IconButton, OutlinedInput, TextField, InputLabel, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function SignIn() {

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false

    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword
        });
    };
    return (
        <div id="sign-in">
            <Container>
                <Row>
                    <Col>
                        <div className="form-signUpIn">
                            <div className="form-content form-register">
                                <div className="title-form p-3">
                                    <div className="image-logo mb-3 mt-3">
                                        <a href="#">
                                            <img src={logo}></img>
                                        </a>
                                    </div>
                                    <h3 className="mt-4">Hi, Welcome Back</h3>
                                    <p className="mt-3">Enter your credentials to continue</p>
                                    <h5>Sign in with Email address</h5>
                                </div>
                                <div className="form-input-register">
                                    <div className="mb-2">
                                        <TextField id="outlined-basic" label="Email Address / Username" variant="outlined" sx={{ m: 1, width: '90%' }} className="form-info" />
                                        <FormControl sx={{ m: 1, width: '90%' }} variant="outlined" className="form-info">
                                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <OutlinedInput
                                                className="form-info"
                                                type={values.showPassword ? 'text' : 'password'}
                                                value={values.password}
                                                onChange={handleChange('password')}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password"
                                            />
                                        </FormControl>
                                        <div className="forgot-passwd">
                                            <a href="#">
                                                <span>Forgot password?</span>
                                            </a>
                                        </div>
                                        <Button variant="contained" sx={{ width: '90%', m: 2 }} className="btn-sign-up rounded-0">Sign In</Button>

                                    </div>
                                    <hr style={{ 'width': '90%', 'margin': '0 auto' }} />
                                    <a href="#" className="question-footer-form">
                                        <p className="mt-3 pb-4 ">Don't have an account?</p>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>

        </div>
    )
}