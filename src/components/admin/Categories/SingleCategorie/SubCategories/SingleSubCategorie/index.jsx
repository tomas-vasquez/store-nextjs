import React, { useContext } from "react";
import FirebaseContext from "../../../../../../context/FirebaseContext";

export default function SingleSubCategorie({ categorie, subcategorie }) {
  const firebase = useContext(FirebaseContext);

  //handlers
  const deleteButtonClickHandler = () => {
    const index = categorie.subCategories.findIndex(
      (_subcategorie) => subcategorie.id === _subcategorie.id
    );

    const updatedCategorie = {
      ...categorie,
      subCategories: categorie.subCategories.splice(index, 1),
    };

    Alerts.showLoading();
    updateCategorie(firebase, updatedCategorie, () => {
      Alerts.showSuccess();
    });
  };

  return (
    <>
      <div className="card mb-1">
        <div className="card-body p-1 d-flex">
          <span className="my-auto ml-2">s{subcategorie.name}</span>
          <div className="ml-auto">
            <Button className="py-1">
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
