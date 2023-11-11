import Link from "next/link";
import React, { useContext } from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import FirebaseContext from "../../context/FirebaseContext";
import { useSelector } from "react-redux";

export default function User() {
  const firebase = useContext(FirebaseContext);
  const currentUser = useSelector((state) => state.settings.currentUser);

  const buttonLogoutClickHandler = () => {
    firebase.auth().signOut();
  };

  return currentUser ? (
    <UncontrolledDropdown size="lg" key="123">
      <DropdownToggle nav className="dropdown-toggle chevron-big">
        <img
          icon="user-circle"
          src={currentUser.photoURL}
          style={{
            width: 40,
            borderRadius: "50%",
            verticalAlign: "bottom",
          }}
          className="my-auto"
        />
        &ensp;
        <div className="d-inline-block text-dark" data-if="login">
          <span className="small d-block text-left">My account</span>
          <span className="font-weight-bold">{currentUser.displayName}</span>
        </div>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-xl" end>
        <div className="d-flex">
          <button className="btn mx-auto" onClick={buttonLogoutClickHandler}>
            logout <i className="la la-arrow-rigth" />
          </button>
        </div>
      </DropdownMenu>
    </UncontrolledDropdown>
  ) : (
    <UncontrolledDropdown key="345">
      <DropdownToggle nav className="dropdown-toggle chevron-big">
        <i className="la la-user d-inline-block" style={{ fontSize: 42 }}></i>
        &ensp;
        <div className="d-inline-block text-dark" data-if="login">
          <span className="small d-block text-left">My account</span>
          <span className="font-weight-bold">Login/Register</span>
        </div>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-xl " end>
        <StyledFirebaseAuth
          uiConfig={{
            signInFlow: "popup",
            signInOptions: [
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            ],
          }}
          firebaseAuth={firebase.auth()}
        />
        sxs
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
