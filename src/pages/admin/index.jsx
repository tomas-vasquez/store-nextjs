import React, { Component } from "react";
import Login from "./Login";
import firebase from "firebase";
import firebaseConfig from "../../firebaseConfig";

export default class Admin extends Component {
  state = {
    overlaywidth: 0,
    loggedin: null,
    loading: true,
  };

  openOverlay = () => {
    this.setState({ overlaywidth: 100 });
  };

  closeOverlay = () => {
    this.setState({ overlaywidth: 0 });
  };

  singOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        this.closeOverlay();
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedin: true, loading: false });
      } else {
        this.setState({ loggedin: false, loading: false }); // No user is signed in.
      }
    });
  }

  render() {
    return (
      <div>
        <Login loading={this.state.loading} loggedin={this.state.loggedin} />
      </div>
    );
  }
}
