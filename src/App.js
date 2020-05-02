import React, { Component } from "react";
import { appConfig } from "./utils/constants";
import { UserSession } from "blockstack";
class App extends Component {
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
    const { userSession, currentUser, superhero, crush, gaiaUser } = this.state;
    let hero = currentUser.superhero;
    let gaiaCrush = gaiaUser.crush;

    return (
      <div className="App">
        {userSession.isUserSignedIn() ? (
          <div className="hello">
            <h2>Hello {currentUser.username} !</h2>

            <button className="button" onClick={this.handleSignOut}>
              <strong>Sign Out</strong>
            </button>

            <div className="forms">
              {/* sending this information to public API */}
              <div className="superhero">
                <form onSubmit={this.submitHandler}>
                  <label htmlFor="superhero">
                    <h3>Who's your favorite superhero?</h3>
                  </label>
                  <input
                    id="superhero"
                    className="form-control"
                    name="superhero"
                    type="text"
                    placeholder="Ironman"
                    value={superhero}
                    onChange={this.changeHandler}
                  />
                  <button className="button-small">
                    <strong>Submit to API</strong>
                  </button>
                </form>
                {hero && hero.toLowerCase() === "ironman" ? (
                  <h4>Good choice, {hero} is the best!</h4>
                ) : hero ? (
                  <p>{hero} is okay, but Ironman is the best!</p>
                ) : null}
                <p>
                  This information is accessible to the public should you allow
                  other apps to fetch from your API.
                </p>
              </div>
              <div className="crush">
                {/* sending this information to Gaia Storage */}
                <form onSubmit={this.submitGaiaHandler}>
                  <label htmlFor="crush">
                    <h3>Who's your current or childhood crush?</h3>
                  </label>
                  <input
                    id="crush"
                    className="form-control"
                    name="crush"
                    type="text"
                    placeholder="His/her name"
                    value={crush}
                    onChange={this.changeHandler}
                  />
                  <button className="button-small">
                    <strong>Submit to Gaia Storage</strong>
                  </button>
                </form>

                {gaiaCrush ? (
                  <h4>{gaiaCrush} probably likes you too.</h4>
                ) : null}

                <p>
                  Your secret is safe, only you have access to this information
                  and it is extremely difficult to hack.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button className="button" onClick={this.handleSignIn}>
            <strong>Sign In</strong>
          </button>
        )}
      </div>
    );
  }
}
export default App;
