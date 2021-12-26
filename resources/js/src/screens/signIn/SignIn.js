import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import './SignIn.scss';
import '../cssCommonForm/common.scss';
import { FormControl, Button, IconButton, OutlinedInput, TextField, InputLabel, InputAdornment, FormHelperText, Alert } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function SignIn() {
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false

    });

    const [errors, setErrors] = React.useState({});

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
    const navigate = useNavigate();

    function validate() {
        let errors = {};
        if (!values.email) {
            errors.email = "Email is required"
        }
        if (!values.password) {
            errors.password = "Password is required"
        }
        setErrors(errors);
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        validate();
        const data = {
            email: values.email,
            password: values.password,
        }
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/login`, data).then(res => {
                console.log("abc");
                if (res.status === 201) {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_email', res.data.user.email);
                    navigate('/student');

                }
            }).catch((e) => {
                if (e.response.status === 401) {
                    let error = {};
                    error.message = e.response.data.message;
                    setErrors(error);
                } else {
                    console.log(e.response.status);
                }
            });
        });




    }

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

                                    <form className="mb-2" onSubmit={handleSubmit}>
                                        {errors.message &&
                                            <div className="mb-1">
                                                <Alert style={{ 'width': '90%', 'margin': '0 auto' }} severity="error">{errors.message}</Alert>
                                            </div>
                                        }
                                        {
                                            errors.email ?
                                                (<TextField type="email" label="Email Address" variant="outlined" sx={{ m: 1, width: '90%' }}
                                                    className="form-info"
                                                    value={values.email} onChange={handleChange('email')}
                                                    error helperText={errors.email} />)
                                                :
                                                (<TextField type="email" label="Email Address" variant="outlined" sx={{ m: 1, width: '90%' }}
                                                    className="form-info" value={values.email} onChange={handleChange('email')} />)
                                        }

                                        {
                                            errors.password ?
                                                (<FormControl sx={{ m: 1, width: '90%' }} variant="outlined" className="form-info">
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
                                                        error
                                                    />
                                                    <FormHelperText style={{ 'color': '#d32f2f' }}>
                                                        {errors.password}
                                                    </FormHelperText>
                                                </FormControl>)
                                                :
                                                (<FormControl sx={{ m: 1, width: '90%' }} variant="outlined" className="form-info">
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
                                                </FormControl>)
                                        }
                                        <div className="forgot-passwd">
                                            <a href="#">
                                                <span>Forgot password?</span>
                                            </a>
                                        </div>
                                        <Button variant="contained" sx={{ width: '90%', m: 2 }} className="btn-sign-up rounded-0" type="submit">Sign In</Button>

                                    </form>
                                    <hr style={{ 'width': '90%', 'margin': '0 auto' }} />
                                    <Link to="/register" className="question-footer-form">
                                        <p className="mt-3 pb-4 ">Don't have an account?</p>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>

        </div>
    )
}