import React, { useContext, useEffect, useState } from "react";
import { Alert, Button, FormGroup, Input, Label } from "reactstrap";
import Icons from "../../../common/Icons";

import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css"; // Add css for snow theme
import Alerts from "../../../../utils/Alerts";
import FirebaseContext from "../../../../context/FirebaseContext";

export default function Description({ product, toggleOpenModalEdit }) {
  const firebase = useContext(FirebaseContext);
  const firestore = firebase.firestore();

  const theme = "snow";
  // const theme = 'bubble';

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ align: [] }],

      ["bold", "italic", "underline", "strike"], // toggled buttons
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme

      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction
      ["blockquote"],

      ["clean"], // remove formatting button
    ],
  };

  const placeholder = "Descripcion del producto";

  const formats = ["bold", "italic", "underline", "strike"];

  const { quill, quillRef } = useQuill({
    theme,
    modules,
    formats,
    placeholder,
  });

  const saveChanges = () => {
    let newProduct = {
      ...product,
      description: quill.container.firstChild.innerHTML,
    };
    firestore
      .collection("products")
      .doc(product.id)
      .update(newProduct)
      .then(() => {
        Alerts.showSuccess();
      });
    Alerts.showLoading();
  };

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(product.description || "");
    }
  }, [quill]);

  return (
    <div>
      <FormGroup>
        <Label for="exampleEmail">Descripcion del producto:</Label>
        <div ref={quillRef} />
      </FormGroup>
      <div className="border-top pt-3 text-right">
        <Button color="primary" className="mr-2" onClick={saveChanges}>
          <Icons icon="check" className="mr-2" />
          Guardar cambios
        </Button>
        <Button color="secondary" onClick={toggleOpenModalEdit}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
