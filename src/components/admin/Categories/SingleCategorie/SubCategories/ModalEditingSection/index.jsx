import React, { useContext, useState } from "react";
import { Modal } from "reactstrap";
import Alerts from "../../../../../../utils/Alerts";
import { updateCategorie } from "../../../../../../utils/fetcher";
import FirebaseContext from "../../../../../../context/FirebaseContext";
import Images from "./Images";

export default function ModalEditingSection({
  showModal,
  setShowModal,
  categorie,
  subcategorie,
}) {
  const firebase = useContext(FirebaseContext);
  const [tag, setTag] = useState(subcategorie.name);

  //hanclers

  const bottonClickHandler = () => {
    let updatedSubcategories = categorie.subCategories.map((_subcategorie) => {
      if (subcategorie.id === _subcategorie.id)
        return { ..._subcategorie, name: tag };
      return _subcategorie;
    });

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
      <Modal
        isOpen={showModal}
        toggle={() => {
          setShowModal(!showModal);
        }}
      >
        <div className="card">
          <div className="card-header">
            <strong>{subcategorie.name}</strong>
          </div>
          <div className="card-body">
            <div className="input-group mb-3">
              <label>
                <i className="la la-play"></i> Subcategorie name:
              </label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Category name"
                  aria-label="Category name"
                  aria-describedby="button-addon2"
                  value={tag}
                  onChange={(event) => {
                    setTag(event.target.value);
                  }}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={bottonClickHandler}
                >
                  <i className="la la-save" />
                </button>
              </div>
            </div>
            <label>
              <i className="la la-play"></i> Subcategorie images:
            </label>
            <Images categorie={categorie} subcategorie={subcategorie} />
          </div>
          <div className="card-footer d-flex">
            <button
              className="btn ml-auto"
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
