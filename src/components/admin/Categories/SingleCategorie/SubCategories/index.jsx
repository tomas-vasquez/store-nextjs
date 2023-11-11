import { useContext } from "react";
import { updateCategorie } from "../../../../../utils/fetcher";
import FirebaseContext from "../../../../../context/FirebaseContext";
import Alerts from "../../../../../utils/Alerts";
import { Button } from "reactstrap";
import Icons from "../../../../common/Icons";
import SingleSubCategorie from "./SingleSubCategorie";

export default function SubCategories({ categorie }) {
  const firebase = useContext(FirebaseContext);

  //handlers

  const addButtonClickHandler = () => {
    const newSubcategorie = {
      id: Math.random().toString(16).slice(2),
      name: "sc-" + Math.random().toString(16).slice(2),
      images: [],
    };

    let updatedSubcategories = categorie.subCategories;
    updatedSubcategories.push(newSubcategorie);

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
      {categorie.subCategories.map((subcategorie) => (
        <SingleSubCategorie
          key={subcategorie.id}
          categorie={categorie}
          subcategorie={subcategorie}
        />
      ))}
      <div className="p-1 d-flex">
        <div className="ml-auto">
          <Button className="py-1" onClick={addButtonClickHandler}>
            <Icons icon="plus" /> add subcategory
          </Button>
        </div>
      </div>
    </>
  );
}
