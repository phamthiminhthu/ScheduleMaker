import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';
import {FormControl, Button ,IconButton, OutlinedInput, TextField, InputLabel, InputAdornment} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import './Register.scss';
import '../cssCommonForm/common.scss';

export default function Register() {

    //password
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


    //confirm password
    const [valuesConfirm, setValuesConfirm] = React.useState({
        confirmPassword: '',
        showConfirmPassword: false

    });

    const handleChangeConfirm = (prop) => (event) => {
        setValuesConfirm({ ...valuesConfirm, [prop]: event.target.value });
    };

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };
    const handleClickShowConfirmPassword = () => {
        setValuesConfirm({
            ...valuesConfirm,
            showConfirmPassword: !valuesConfirm.showConfirmPassword
        });
    };
    return (
        <div id="register">
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="form-signUpIn">
                            <div className="form-content form-register">
                                <div className="title-form p-3">
                                    <div className="image-logo">
                                        <a href="#">
                                            <img src={logo}></img>
                                        </a>
                                    </div>
                                    <h3 className="mt-4">Sign Up</h3>
                                    <p className="mt-3">Enter your credentials to continue</p>
                                    <h5>Sign up with Email address</h5>
                                </div>
                                <div className="form-input-register">
                                    <div className="mb-2">
                                        <TextField id="outlined-basic" label="FirstName" variant="outlined" sx={{ m: 1, width: '44%' }} className="form-info" />
                                        <TextField id="outlined-basic" label="LastName" variant="outlined" sx={{ m: 1, width: '44%' }} className="form-info" />
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
                                        <FormControl sx={{ m: 1, width: '90%' }} variant="outlined" className="form-info">
                                            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                            <OutlinedInput
                                                className="form-info"
                                                type={valuesConfirm.showConfirmPassword ? 'text' : 'password'}
                                                value={valuesConfirm.confirmPassword}
                                                onChange={handleChangeConfirm('confirmPassword')}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowConfirmPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {valuesConfirm.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Confirm Password"
                                            />
                                        </FormControl>
                                        <Button variant="contained" sx={{ width: '90%', m: 2 }} className="btn-sign-up rounded-0">Sign Up</Button>

                                    </div>
                                    <hr style={{ 'width': '90%', 'margin': '0 auto' }} />
                                    <Link to="/sign-in" className="question-footer-form">
                                        <p className="mt-3 pb-4 ">Already have an account?</p>
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