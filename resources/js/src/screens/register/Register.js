import  React, {useState} from 'react';
import FormRegister from './FormRegister';
import SignIn from '../signIn/SignIn';


const Register = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm(){
        setIsSubmitted(true);
       
    }
    return(
        <>
        {(!isSubmitted )? <FormRegister submitForm={submitForm} /> : (
            <SignIn/>

        )}
        </>
    )









    return (
        <div>

        </div>

    )


};

export default Register;