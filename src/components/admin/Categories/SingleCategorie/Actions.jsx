import { useContext } from "react";
import Alerts from "../../../../utils/Alerts";
import { deleteCategorie } from "../../../../utils/fetcher";
import FirebaseContext from "../../../../context/FirebaseContext";
import { Button } from "reactstrap";

export default function Actions({ categorie }) {
  const firebase = useContext(FirebaseContext);

  const onClickHandler = () => {
    Alerts.showLoading();
    deleteCategorie(firebase, categorie.id, () => {
      Alerts.showSuccess();
    });
  };

  return (
    <div className="d-flex">
      <Button className="ml-auto" color="danger" onClick={onClickHandler}>
        <i className="fas fa-trash"></i> Delete
      </Button>
    </div>
  );
}
