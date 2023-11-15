import React, { useContext, useEffect } from "react";
import { Button, ButtonGroup } from "reactstrap";
import Alerts from "../../../../utils/Alerts";
import Link from "next/link";
import FirebaseContext from "../../../../context/FirebaseContext";

export default function Images({ product, toggleOpenModalEdit }) {
  const firebase = useContext(FirebaseContext);
  const storage = firebase.storage();
  const firestore = firebase.firestore();

  const uploadPic = (event) => {
    const file = event.target.files[0];
    var fileName = new Date().getMilliseconds() + "-" + file.name;
    const newRef = storage.ref("products").child(fileName);

    newRef.put(file).then(() => {
      newRef.getDownloadURL().then((imageUrl) => {
        let newProduct = {
          ...product,
          images: [
            ...product.images,
            {
              imageId: `/products/${fileName}`,
              imageUrl,
            },
          ],
        };
        firestore.collection("products").doc(product.id).update(newProduct);
        Alerts.showSuccess();
      });
    });
    Alerts.showLoading();
  };

  const handleDelete = (imageId) => {
    const newRef = storage.ref().child(imageId);

    newRef.delete().then((e) => {
      let newProduct = {
        ...product,
        images: product.images.filter((image) => image.imageId !== imageId),
      };
      firestore.collection("products").doc(product.id).update(newProduct);
      Alerts.showSuccess();
    });
    Alerts.showLoading();
  };

  const SingleImage = ({ image }) => {
    return (
      <div className="shadow mr-3 border" style={{ width: 150, height: 150 }}>
        <img
          src={image.imageUrl}
          style={{ width: 150, height: 150 }}
          alt={image.imageId}
        />
        <ButtonGroup
          style={{
            position: "relative",
            left: 68,
            top: -38,
          }}
        >
          <Link
            href={image.imageUrl || ""}
            target="imagePreview"
            className="btn btn-secondary"
          >
            <i className="fas fa-eye" />
          </Link>
          <Button color="danger" onClick={() => handleDelete(image.imageId)}>
            <i className="fas fa-trash" />
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
          <i className="fas fa-plus" /> Anadir
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
