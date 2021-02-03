import React from "react";
import { useFirestore, useFirestoreDocData, useUser } from "reactfire";
import Intruder from "../../components/admin/Intruder";
import Loading from "../../components/admin/Loading";

export default function Products() {
  const { data: user } = useUser();

  const credentialsRef = useFirestore().collection("credentials").doc(user.uid);
  let { isComplete, data: credential, hasEmitted } = useFirestoreDocData(
    credentialsRef
  );

  if (!isComplete && !hasEmitted)
    return <Loading texto="verificando credenciales....." />;

  if (credential.role) {
    return (
      <div className="container p-3">
        <br />
        proiducts{" "}
      </div>
    );
  }

  return <Intruder />;
}
