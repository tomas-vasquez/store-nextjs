import React, { useContext } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import FirebaseContext from "../../context/FirebaseContext";

export default function Login() {
  const firebase = useContext(FirebaseContext);
  const auth = firebase.auth;
  const uiConfig = {
    queryParameterForSignInSuccessUrl: "signInSuccessUrl",
    signInFlow: "popup",
    signInOptions: [
      auth.EmailAuthProvider.PROVIDER_ID,
      auth.GoogleAuthProvider.PROVIDER_ID,
      auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };

  return (
    <div className="container mb-5">
      <div>
        <h1>Iniciar sesion</h1>
      </div>

      <div className="mb-5">
        <p>Elige alguna de las siguientes opciones para iniciar sesion:</p>
      </div>

      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
    </div>
  );
}
