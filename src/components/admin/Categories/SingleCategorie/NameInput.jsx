import { useContext, useState } from "react";
import Alerts from "../../../../utils/Alerts";
import { updateCategorie } from "../../../../utils/fetcher";
import FirebaseContext from "../../../../context/FirebaseContext";

export default function NameInput({ categorie }) {
  const [tag, setTag] = useState(categorie.name);
  const firebase = useContext(FirebaseContext);

  const bottonClickHandler = () => {
    const newCategorie = {
      ...categorie,
      name: tag,
    };

    Alerts.showLoading();
    updateCategorie(firebase, newCategorie, () => {
      Alerts.showSuccess();
    });
  };

  return (
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
        <i className="fas fa-save" />
      </button>
    </div>
  );
}
