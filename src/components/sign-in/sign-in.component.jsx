import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-buttom.component'
import './sign-in.style.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({[name]:value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    label='Email' 
                    required>
                    </FormInput>
                    
                    <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.password} 
                    handleChange={this.handleChange} 
                    label="Password" 
                    required>
                    </FormInput>
                    
                    
                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;