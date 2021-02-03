import { useRouter } from "next/router";
import React from "react";
import SignOut from "../../context/singout";
import Icons from "../common/Icons";

export default function Intruder() {
  const router = useRouter();

  return (
    <div className="container">
      <h2>Upss!</h2>
      <p>Parece que no tienes permiso para estar aqui....</p>
      <p>
        Puede que sea un error ponte en contacto con el administrador del sitio
        para solucionarlo.
      </p>
      <div className="text-center d-flex">
        <button
          className="btn btn-secondary mr-3"
          onClick={() => {
            router.replace("/");
          }}
        >
          <Icons icon="home" className="mr-2" />
          Volver al inicio
        </button>

        <SignOut.Consumer>
          {(signOut) => (
            <>
              <button
                className="btn btn-primary"
                onClick={() => {
                  signOut();
                }}
              >
                <Icons icon="sign" className="mr-2" />
                Iniciar sesion con otra cuenta
              </button>
            </>
          )}
        </SignOut.Consumer>
      </div>
    </div>
  );
}
