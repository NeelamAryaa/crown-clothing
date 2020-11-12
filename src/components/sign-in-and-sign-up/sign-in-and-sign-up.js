import React from 'react';
import SignIn from '../sign-in/sign-in';
import SignUp from '../sign-up/sign-up'
import './sign-in-and-sign-up.styles.scss'

const SignInAndSignUpPage = () => {
    return(
        <div className="sign-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUpPage;


