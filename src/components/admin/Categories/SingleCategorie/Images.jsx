import React, { useContext } from "react";
import { Button, ButtonGroup } from "reactstrap";
import Alerts from "../../../../utils/Alerts";
import Icons from "../../../common/Icons";
import Link from "next/link";
import FirebaseContext from "../../../../context/FirebaseContext";
import {
  deleteFile,
  updateCategorie,
  uploadFile,
} from "../../../../utils/fetcher";

export default function Images({ categorie }) {
  const firebase = useContext(FirebaseContext);

  const uploadPic = (event) => {
    const file = event.target.files[0];

    Alerts.showLoading();

    uploadFile(firebase, file, "categories", ({ fileName, FileUrl }) => {
      let newCategorie = {
        ...categorie,
        images: [
          ...categorie.images,
          {
            imageId: `/categories/${fileName}`,
            imageUrl: FileUrl,
            alternate: fileName,
          },
        ],
      };

      updateCategorie(firebase, newCategorie, () => {
        Alerts.showSuccess();
      });
    });

    Alerts.showLoading();
  };

  const handleDelete = (image) => {
    Alerts.showLoading();
    deleteFile(firebase, image.imageId, () => {
      let updatedCategorie = {
        ...categorie,
        images: categorie.images.filter(
          (_image) => image.imageId !== _image.imageId
        ),
      };
      updateCategorie(firebase, updatedCategorie, () => {
        Alerts.showSuccess();
      });
      Alerts.showSuccess();
    });
  };

  const SingleImage = ({ image }) => {
    return (
      <div className="col-auto" style={{ width: 100, height: 100 }}>
        <img
          src={image.imageUrl}
          style={{ width: 100, height: 100 }}
          alt={image.imageId}
        />
        <ButtonGroup
          style={{
            position: "relative",
            left: 15,
            top: -38,
          }}
        >
          <Link
            href={image.imageUrl || ""}
            target="imagePreview"
            className="btn btn-secondary"
          >
            <Icons icon="eye" />
          </Link>
          <Button color="danger" onClick={() => handleDelete(image)}>
            <Icons icon="trash" />
          </Button>
        </ButtonGroup>
      </div>
    );
  };

  return (
    <div className="row mb-3">
      {categorie.images.map((image, index) => (
        <SingleImage image={image} key={index} />
      ))}
      <div className="col-auto">
        <input
          id={categorie.name + "imageInput"}
          className="d-none"
          type="file"
          accept="image/png, image/jpeg"
          onChange={uploadPic}
        />
        <Button
          style={{ width: 100, height: 100 }}
          color="default"
          className="shadow "
          onClick={() => {
            document.getElementById(categorie.name + "imageInput").click();
          }}
        >
          <Icons icon="plus" className="mr-2" />
          add
        </Button>
      </div>
    </div>
  );
}
