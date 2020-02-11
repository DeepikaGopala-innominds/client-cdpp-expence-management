import React from 'react'
import './sign-in-and-sign-up.style.scss'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUpForm from '../../components/sign-up/sign-up.component'

const SignInAndSignUp = () => {
return(
   <div>
        <div className='sign-in-and-sign-up'><SignIn/></div>
        <div className='sign-in-and-sign-up'><SignUpForm/></div>
    </div>     
)
}

export default SignInAndSignUp;