import React, { Component } from 'react'
import { Auth } from 'aws-amplify'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-buttom.component'

class SignUpForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '',
            phone: '',
            address:'',
            signedUp: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {username,password,email,phone,address,signedUp} = this.state
        // this.setState({username: '',password: '',email: '',phone: '',address:''})

        if(!signedUp){
            Auth.signUp({
                username: username,
                password: password,
                attributes:{
                    email: email,
                    phone: phone,
                    address: address
                }
            })
            .then(() => console.log('signed up'))
            .catch(err => console.log(err));

            this.setState({signedUp: true});
        } else {

        }
        
    }

    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({[name]:value});
    }

    render() {
        const {signedUp} = this.state;

        if(signedUp){

        }else {
            return(
                <div className='sign-in'>
                <h1>Creating new user account</h1>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='username' 
                    type='text' 
                    value={this.state.username} 
                    handleChange={this.handleChange} 
                    label='User Name' 
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

                    <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    label="Email" 
                    required>
                    </FormInput>

                    <FormInput 
                    name='phonenumber' 
                    type='text' 
                    value={this.state.phone} 
                    handleChange={this.handleChange} 
                    label="Phone Number" 
                    required>
                    </FormInput>

                    <FormInput 
                    name='address' 
                    type='text' 
                    value={this.state.address} 
                    handleChange={this.handleChange} 
                    label="Address" 
                    required>
                    </FormInput>
                    
                    
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
            )
        }
    }

}

export default SignUpForm;