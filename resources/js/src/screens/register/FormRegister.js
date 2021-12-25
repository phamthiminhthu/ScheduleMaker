import React from 'react';
import useForm from './useForm';
import validate from './validateInfor';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FormControl, Button, IconButton, OutlinedInput, TextField, InputLabel, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Register.scss';
import '../cssCommonForm/common.scss';

const FormRegister = () => {
    const { handleChange, handleMouseDownPassword, handleClickShowPassword, handleClickShowConfirmPassword, values, handleSubmit, errors } = useForm(validate);
    console.log("errors : ",  errors);
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
                                    <form className="mb-2" onSubmit={handleSubmit}>
                                        <TextField label="FullName" variant="outlined" sx={{ m: 1, width: '90%' }}
                                            className="form-info" value={values.fullname} name="fullname" onChange={handleChange('fullname')} />
                                        {errors.fullname && <p>{errors.fullname}</p>}
                                        {/* <TextField label="LastName" variant="outlined" sx={{ m: 1, width: '44%' }} className="form-info" /> */}
                                        <TextField label="Email Address / Username" variant="outlined" sx={{ m: 1, width: '90%' }} className="form-info"
                                            value={values.email} onChange={handleChange('email')} type="email" name="email" />
                                        {errors.email && <p>{errors.email}</p>}
                                        <FormControl sx={{ m: 1, width: '90%' }} variant="outlined" className="form-info">
                                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <OutlinedInput
                                                className="form-info"
                                                type={values.showPassword ? 'text' : 'password'}
                                                value={values.password}
                                                name="password"
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
                                            {errors.password && <p>{errors.password}</p>}
                                        </FormControl>
                                        <FormControl sx={{ m: 1, width: '90%' }} variant="outlined" className="form-info">
                                            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                            <OutlinedInput
                                                className="form-info"
                                                type={values.showConfirmPassword ? 'text' : 'password'}
                                                value={values.confirmPassword}
                                                name="confirmPassword"
                                                onChange={handleChange('confirmPassword')}

                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowConfirmPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Confirm Password"


                                            />
                                            { errors.confirmPassword && <p>{ errors.confirmPassword}</p>}
                                        </FormControl>
                                        <Button variant="contained" sx={{ width: '90%', m: 2 }} className="btn-sign-up rounded-0"
                                            type="submit" >Sign Up</Button>

                                    </form>
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

export default FormRegister;