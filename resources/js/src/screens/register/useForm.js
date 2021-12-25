import React, { useState, useEffect } from 'react';


const useForm = (validate, callback) => {
    const [isSubmittiing, setIsSubmitting] = React.useState(false);
    const [values, setValues] = React.useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        showConfirmPassword: false,

    });

    const [errors, setErrors] = useState({});
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]:event.target.value });

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
        console.log("abc" , errors);
        setIsSubmitting(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmittiing ){
            callback();

        }
    }, [errors]);


    return {
        handleChange, handleMouseDownPassword, handleClickShowPassword,
        handleClickShowConfirmPassword, values, handleSubmit, errors
    }
}

export default useForm;