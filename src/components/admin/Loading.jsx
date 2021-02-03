import React from "react";
import Loader from "react-loader-spinner";

export default function Loading({ texto }) {
  return (
    <div
      className="container my-3 d-flex"
      style={{
        width: "100%",
        height: "50vh",
      }}
    >
      <div className="m-auto text-center">
        <Loader type="TailSpin" color="#6950df" height={60} width={60} />
        <p className="mt-4">{texto}</p>
      </div>
    </div>
  );
}
