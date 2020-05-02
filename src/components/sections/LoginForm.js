import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { Link } from 'react-router-dom';
import SectionHeader from './partials/SectionHeader';
import Input from '../elements/Input';
import Button from '../elements/Button';
import Checkbox from '../elements/Checkbox';
import { Connect } from '@blockstack/connect';
import { useHistory } from "react-router-dom";

import { appConfig } from "../../utils/constants";
import { UserSession } from "blockstack";

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class LoginForm extends React.Component {
  state = {
    userSession: new UserSession({ appConfig }), // coming from Blockstack
    userData: {}, // coming from Blockstack
    users: [], // coming from your API
    currentUser: {}, // coming from your API
    superhero: "", // I'M NEW coming from form input
    gaiaUser: {}, // I'M NEW coming from Gaia Storage
    crush: "" // I'M NEW coming from form input
  };

  componentDidMount = async () => {
    const { userSession } = this.state;

    if (!userSession.isUserSignedIn() && userSession.isSignInPending()) {
      const userData = await userSession.handlePendingSignIn();
      if (!userData.username) {
        throw new Error("This app requires a username");
      }
      window.location = "/";
    }

    this.getUsers();
    this.getGaiaUser(); // I'M NEW, find me
  };

  handleSignIn = () => {
    const { userSession } = this.state;
    userSession.redirectToSignIn();
  };

  handleSignOut = () => {
    const { userSession } = this.state;
    userSession.signUserOut();
    window.location = "/";
  };

  // We're fetching the users array from your API (make sure the path is correct)
  // In your app's state, we're storing the userData object that comes from Blockstack when a user signs in
  // We're searching for the username from userData in the users array,
  // If that username exists in your API, then we store that user object in state
  // Otherwise, we create a new user object with the username from userData

  getUsers() {
    const { userSession } = this.state;

    fetch("http://localhost:3000/api/v1/users")
      .then(res => res.json())
      .then(users => {
        if (userSession.isUserSignedIn()) {
          const userData = userSession.loadUserData();

          this.setState({
            userData
          });

          let currentUser = users.find(
            user => user.username === userData.username
          );

          if (currentUser) {
            this.setState({ users, currentUser });
          } else {
            this.createUser(userData.username);
          }
        }
      });
  }

  createUser = username => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username
      })
    })
      .then(res => res.json())
      .then(user => {
        let newArr = [...this.state.users, user];
        this.setState({ users: newArr, currentUser: user });
      });
  };

  // I'M NEW
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // I'M NEW, standard fetch method
  submitHandler = e => {
    const { superhero, currentUser } = this.state;

    e.preventDefault();

    // be sure to add the superhero attribute to the backend
    fetch(`http://localhost:3000/api/v1/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        superhero
      })
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ currentUser: data });
        console.log("API", data); // see that the data transferred
      });
  };

  // I'M NEW, putFile is a method provided by the Blockstack library
  submitGaiaHandler = e => {
    const { userSession, crush } = this.state;
    const user = { crush: crush };
    let options = { encrypt: true };

    e.preventDefault();

    // encrypt and securely send your secret crush to Gaia Storage
    userSession
      .putFile("user.json", JSON.stringify(user), options)
      .then(data => {
        this.setState({ gaiaUser: user });
        console.log("Gaia Storage", data); // see that the data is encrypted
      });

    // note that at this time, Blockstack only allows PUT but not PATCH
    // you are replacing the entire gaiaUser object
  };

  // I'M NEW, getFile is also a method provided by the Blockstack library
  getGaiaUser = () => {
    const { userSession } = this.state;
    let options = { decrypt: true };

    userSession.getFile("user.json", options).then(data => {
      if (data) {
        const user = JSON.parse(data);
        this.setState({ gaiaUser: user });
      } else {
        const user = {};
        this.setState({ gaiaUser: user });
      }
    });
  };

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'signin section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'signin-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'Welcome. We exist to distribute essential covid goods to those in need.',
    };

    const { userSession, currentUser, superhero, crush, gaiaUser } = this.state;
    let hero = currentUser.superhero;
    let gaiaCrush = gaiaUser.crush;

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader tag="h1" data={sectionHeader} className="center-content" />
            <div className="tiles-wrap">
              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <form>
                    <fieldset>
                      <div className="mb-12">
                        <Input
                          type="email"
                          label="Email"
                          placeholder="Email"
                          labelHidden
                          required />
                      </div>
                      <div className="mb-12">
                        <Input
                          type="password"
                          label="Password"
                          placeholder="Password"
                          labelHidden
                          required />
                      </div>
                      <div className="mt-24 mb-32">
                        <Button onClick={this.handleSignIn} color="primary" wide>Sign in</Button>
                      </div>
                      <div className="signin-footer mb-32">
                        <Checkbox>Remember me</Checkbox>
                        <Link to="/recover-password/" className="func-link text-xs">Forgot password?</Link>
                      </div>
                    </fieldset>
                  </form>
                  <div className="signin-bottom has-top-divider">
                    <div className="pt-32 text-xs center-content text-color-low">
                      Don't you have an account? <Link to="/signup/" className="func-link">Sign up</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;

export default LoginForm;