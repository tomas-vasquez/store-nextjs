import React, { Component } from "react";
import firebase from "firebase";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Loader from "react-loader-spinner";

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      var user = authResult.user;
      var credential = authResult.credential;
      var isNewUser = authResult.additionalUserInfo.isNewUser;
      var providerId = authResult.additionalUserInfo.providerId;
      var operationType = authResult.operationType;
      // Do something with the returned AuthResult.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    signInFailure: function (error) {},
  },
  queryParameterForSignInSuccessUrl: "signInSuccessUrl",
  signInFlow: "popup",
  signInSuccessUrl: "", //Specifying sign in success url can cause double redirect since we are also managing redirect in react-router with local state.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  // Other config options...
};

class Login extends Component {
  render() {
    return (
      <div>
        {this.props.loading ? (
          <div
            className="container my-3 d-flex"
            style={{
              height: "50vh",
            }}
          >
            <div className="m-auto">
              <Loader
                type="TailSpin"
                color="#6950df"
                height={60}
                width={60}
                timeout={3000} //3 secs
              />
              <p className="mt-4">Cargando....</p>
            </div>
          </div>
        ) : this.props.loggedin ? (
          <></>
        ) : (
          <>
            <div className="container mb-5">
              <div>
                <h1>Iniciar sesion</h1>
              </div>

              <div className="mb-5">
                <p>
                  Elige alguna de las siguientes opciones para iniciar sesion:.
                </p>
              </div>

              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Login;
