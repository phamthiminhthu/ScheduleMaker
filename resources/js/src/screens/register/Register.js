import  React, {useState} from 'react';
import FormRegister from './FormRegister';


const Register = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm(){
        setIsSubmitted(true);
    }
    return(
        <>
        {(!isSubmitted )? <FormRegister submitForm={submitForm} /> : (
            <div>Ahihi</div>

        )}
        </>
    )









    return (
        <div>

        </div>

    )


};

export default Register;