import React, { useContext, useState } from "react";
import FirebaseContext from "../../../../../context/FirebaseContext";
import { Button } from "reactstrap";
import Icons from "../../../../common/Icons";
import Alerts from "../../../../../utils/Alerts";
import { updateCategorie } from "../../../../../utils/fetcher";
import ModalEditingSection from "./ModalEditingSection";

export default function SingleSubCategorie({ categorie, subcategorie }) {
  const firebase = useContext(FirebaseContext);
  const [showModal, setShowModal] = useState(false);

  //handlers
  const deleteButtonClickHandler = () => {
    const index = categorie.subCategories.findIndex(
      (_subcategorie) => subcategorie.id === _subcategorie.id
    );

    let updatedSubcategories = categorie.subCategories;
    updatedSubcategories.splice(index, 1);

    const updatedCategorie = {
      ...categorie,
      subCategories: updatedSubcategories,
    };

    Alerts.showLoading();
    updateCategorie(firebase, updatedCategorie, () => {
      Alerts.showSuccess();
    });
  };

  return (
    <>
      <ModalEditingSection
        showModal={showModal}
        setShowModal={setShowModal}
        categorie={categorie}
        subcategorie={subcategorie}
      />
      <div className="card mb-1">
        <div className="card-body p-1 d-flex">
          <span className="my-auto ml-2">{subcategorie.name}</span>
          <div className="ml-auto">
            <Button
              className="py-1"
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              <Icons icon="pencil" />
            </Button>

            <Button
              className="py-1"
              color="danger"
              onClick={deleteButtonClickHandler}
            >
              <Icons icon="trash" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
