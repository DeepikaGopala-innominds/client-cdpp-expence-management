import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

import './App.css';
import HomePage from './pages/homepage/home-page.component'
import Header from '../src/components/header/header.component'
import SignInAndSignUp from '../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

Amplify.configure(awsconfig);

function App() {

  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/sign-in' component={SignInAndSignUp}></Route>
          <Route exact path='/sign-up' component={SignInAndSignUp}></Route>
        </Switch>
    </div>  
  );
}

const signUpConfig = {
  header: 'My Customized Sign Up',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'My user name',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password'
    },
    {
      label: 'PhoneNumber',
      key: 'phone_number',
      required: true,
      displayOrder: 3,
      type: 'string'
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 4,
      type: 'string'
    },
    {
      label: 'Address',
      key: 'address',
      required: true,
      displayOrder: 4,
      type: 'string'
    }
  ]
};
const usernameAttributes = 'My user name';

export default withAuthenticator(App, {
  signUpConfig,
  usernameAttributes
});

