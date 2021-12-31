import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




const useForm = (validate) => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [values, setValues] = React.useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        showConfirmPassword: false,

    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
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
    const handleClickShowConfirmPassword = () => {
        setValues({
            ...values,
            showConfirmPassword: !values.showConfirmPassword
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            const data = {
                name: values.fullname,
                email: values.email,
                password: values.password,
                password_confirmation: values.confirmPassword

            }
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post(`/api/register`, data).then(res => {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_email', res.data.user.email);
                    navigate('/student');

                });
            });


        }
    }, [errors]);


    return {
        handleChange, handleMouseDownPassword, handleClickShowPassword,
        handleClickShowConfirmPassword, values, handleSubmit, errors
    }
}

export default useForm;