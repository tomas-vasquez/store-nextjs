import React, { useState } from "react";
import Loading from "./Loading";
import { useAuth } from "reactfire";
import signOut from "../../context/singout";
import SignOut from "../../context/singout";

const AuthWrapper = ({ fallback, children }) => {
  const auth = useAuth();
  const [user, setUser] = useState(null);
  const [finished, setFinished] = useState(false);

  var signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      setFinished(false);
    });
  };

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
    setFinished(true);
  });

  if (finished) {
    if (user) {
      return <SignOut.Provider value={signOut}>{children}</SignOut.Provider>;
    }
    return fallback;
  }

  return <Loading texto="cargando...." />;
};

export default AuthWrapper;
