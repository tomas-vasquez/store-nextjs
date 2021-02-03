import React from "react";
// import Loading from "./Loading";
import { useUser } from "reactfire";

export default function AuthWrapper() {
  const auth = useUser();
  console.log(auth);

  return (
    <div>
      <p>jooo{JSON.stringify(auth)}</p>
    </div>
  );
}
