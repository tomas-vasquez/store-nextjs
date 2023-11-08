import React, { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import FirebaseContext from "../../context/FirebaseContext";
import { useSelector } from "react-redux";
import Intruder from "./Intruder";

const AuthWrapper = ({ fallback, children }) => {
  const firebase = useContext(FirebaseContext);
  const currentUser = useSelector((state) => state.settings.currentUser);

  const [isComplete, setIsComplete] = useState(false);
  const [credential, setCredential] = useState(null);

  useEffect(() => {
    if (currentUser) {
      const firestore = firebase.firestore();
      firestore
        .collection("credentials")
        .doc(currentUser.uid)
        .onSnapshot((res) => {
          const credential = res.data();
          setCredential({ ...credential });
          console.log(credential);
          setIsComplete(true);
        });
    }
  }, [currentUser]);

  if (currentUser) {
    if (isComplete) {
      if (credential.role === "admin") {
        return children;
      } else {
        return <Intruder />;
      }
    } else {
      return <Loading texto="verifying credentials...." />;
    }
  } else {
    return fallback;
  }
};

export default AuthWrapper;
