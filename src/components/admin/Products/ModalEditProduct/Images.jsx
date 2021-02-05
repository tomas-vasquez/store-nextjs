import React, { useEffect } from "react";
import { useState } from "react";
import { StorageImage, useFirestore, useStorage } from "reactfire";
import { Button, ButtonGroup } from "reactstrap";
import Alerts from "../../../common/Alerts";
import Icons from "../../../common/Icons";

export default function Images({ product, toggleOpenModalEdit }) {
  const storage = useStorage();
  const firestore = useFirestore();

  const uploadPic = (event) => {
    const file = event.target.files[0];
    console.log(file);
    const fileName = new Date().getMilliseconds() + "-" + file.name;
    const newRef = storage.ref("products").child(fileName);

    newRef.put(file).then((e) => {
      let newProduct = {
        ...product,
        images: [...product.images, `/products/${fileName}`],
      };
      firestore.collection("products").doc(product.id).update(newProduct);
      Alerts.showSuccess();
    });
    Alerts.showLoading();
  };

  const handleDelete = (fileName) => {
    const newRef = storage.ref().child(fileName);

    newRef.delete().then((e) => {
      let newProduct = {
        ...product,
        images: product.images.filter((image) => image !== fileName),
      };
      firestore.collection("products").doc(product.id).update(newProduct);
      Alerts.showSuccess();
    });
    Alerts.showLoading();
  };

  const SingleImage = ({ image }) => {
    const [url, setUrl] = useState("/");

    useEffect(() => {
      storage
        .ref()
        .child(image)
        .getDownloadURL()
        .then((_url) => {
          setUrl(_url);
        });
    }, []);

    return (
      <div className="shadow mr-3 border" style={{ width: 150, height: 150 }}>
        <StorageImage
          storagePath={image}
          style={{ width: 150, height: 150 }}
          alt={image}
        />
        <ButtonGroup
          style={{
            position: "relative",
            left: 68,
            top: -38,
          }}
        >
          <a href={url} target="imagePreview" className="btn btn-secondary">
            <Icons icon="eye" />
          </a>
          <Button color="danger" onClick={() => handleDelete(image)}>
            <Icons icon="trash" />
          </Button>
        </ButtonGroup>
      </div>
    );
  };

  return (
    <div>
      <div className="d-flex">
        {product.images.map((image, index) => (
          <SingleImage image={image} key={index} />
        ))}
        <Button
          style={{ width: 150, height: 150 }}
          color="default"
          className="shadow mx-2"
          onClick={() => {
            document.getElementById("input-pic").click();
          }}
        >
          <Icons icon="plus" className="mr-2" />
          Anadir
        </Button>
      </div>

      <input
        id="input-pic"
        className="d-none"
        type="file"
        accept="image/png, image/jpeg"
        onChange={uploadPic}
      />
      <div className="border-top mt-3 pt-3 text-right">
        <Button color="secondary" onClick={toggleOpenModalEdit}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
