import React, { useContext } from "react";
import { Button, ButtonGroup } from "reactstrap";
import Alerts from "../../../../../../utils/Alerts";
import Link from "next/link";
import FirebaseContext from "../../../../../../context/FirebaseContext";
import {
  deleteFile,
  updateCategorie,
  uploadFile,
} from "../../../../../../utils/fetcher";

export default function Images({ categorie, subcategorie }) {
  const firebase = useContext(FirebaseContext);

  const uploadPic = (event) => {
    const file = event.target.files[0];

    Alerts.showLoading();

    uploadFile(firebase, file, "categories", ({ fileName, FileUrl }) => {
      const newImage = {
        imageId: `/categories/${fileName}`,
        imageUrl: FileUrl,
        alternate: fileName,
      };

      let updatedimageList = subcategorie.images;
      updatedimageList.push(newImage);

      const updatedSubcategories = categorie.subCategories.map(
        (_subcategorie) => {
          if (subcategorie.id === _subcategorie.id)
            return { ..._subcategorie, images: updatedimageList };
          return _subcategorie;
        }
      );

      const updatedCategorie = {
        ...categorie,
        subCategories: updatedSubcategories,
      };

      updateCategorie(firebase, updatedCategorie, () => {
        Alerts.showSuccess();
      });
    });
  };

  const handleDelete = (image) => {
    Alerts.showLoading();

    deleteFile(firebase, image.imageId, () => {
      let updatedimageList = subcategorie.images;
      updatedimageList = updatedimageList.filter(
        (_image) => image.imageId !== _image.imageId
      );

      const updatedSubcategories = categorie.subCategories.map(
        (_subcategorie) => {
          if (subcategorie.id === _subcategorie.id)
            return { ..._subcategorie, images: updatedimageList };
          return _subcategorie;
        }
      );

      let updatedCategorie = {
        ...categorie,
        subCategories: updatedSubcategories,
      };
      updateCategorie(firebase, updatedCategorie, () => {
        Alerts.showSuccess();
      });
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
            <i className="fas fa-eye" />
          </Link>
          <Button color="danger" onClick={() => handleDelete(image)}>
            <i className="fas fa-trash" />
          </Button>
        </ButtonGroup>
      </div>
    );
  };

  return (
    <div className="row mb-3">
      {subcategorie.images.map((image) => (
        <SingleImage image={image} key={image.imageId} />
      ))}
      <div className="col-auto">
        <input
          id={categorie.name + "imageInput2"}
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
            document.getElementById(categorie.name + "imageInput2").click();
          }}
        >
          <i className="fas fa-plus" />
          add
        </Button>
      </div>
    </div>
  );
}
