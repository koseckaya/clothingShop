import React from 'react'
import './signIn-signUp.scss'
import SignIn from '../../components/sign-in/sign-in'
import SignUp from '../../components/sign-up/sign-up'

const SignInSignUp = () => (
    <div className='signIn-signUp'>
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInSignUp