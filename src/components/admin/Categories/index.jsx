import { useState, useEffect, useContext } from "react";
import { Row, Col } from "reactstrap";
import SingleCategorie from "./SingleCategorie";
import FirebaseContext from "../../../context/FirebaseContext";
import { addCategorie, getAllCategories } from "../../../utils/fetcher";
import Loading from "../Loading";
import Alerts from "../../../utils/Alerts";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    getAllCategories(firebase, (categories) => {
      setCategories(categories);
      setIsComplete(true);
    });
  }, []);

  //button actions

  const bottonClickHAndler = () => {
    const newCategorie = {
      name: "no-name",
      subCategories: [],
      images: [],
      createdAt: new Date().getTime(),
    };

    Alerts.showLoading();

    addCategorie(firebase, newCategorie, () => {
      Alerts.showSuccess();
    });
  };

  if (!isComplete) return <Loading texto="cargando productos....." />;
  else
    return (
      <>
        <Row>
          {categories.map((categorie) => (
            <Col xs="4" key={categorie.id}>
              <SingleCategorie categorie={categorie} />
            </Col>
          ))}
        </Row>

        <div className="card shadow mb-5">
          <div className="card-body">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={bottonClickHAndler}
              >
                Add category
              </button>
            </div>
          </div>
        </div>
      </>
    );
};

export default Categories;
