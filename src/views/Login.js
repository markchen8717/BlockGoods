import React from 'react';
import LoginForm from '../components/sections/LoginForm';
import { appConfig } from "../utils/constants";
import { UserSession } from "blockstack";

class Login extends React.Component {
  render() {
    return (
      <LoginForm className="illustration-section-02" />
    );
  }
}

export default Login;