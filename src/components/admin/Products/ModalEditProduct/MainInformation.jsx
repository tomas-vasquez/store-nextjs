import React, { useContext, useEffect, useState } from "react";
import { FormGroup, Label, Input, Row, Col, Button } from "reactstrap";
import Alerts from "../../../../utils/Alerts";
import FirebaseContext from "../../../../context/FirebaseContext";
import TextInput from "react-autocomplete-input";
import { getAllCategories, getCategorieList } from "../../../../utils/fetcher";

const ExchangeTypes = ["BS", "USD"];

export default function MainInformation({ product, toggleOpenModalEdit }) {
  const firebase = useContext(FirebaseContext);
  const firestore = firebase.firestore();

  const [categorieList, setCategorieList] = useState([]);

  useEffect(() => {
    getAllCategories(firebase, (categories) => {
      setCategorieList(getCategorieList(categories));
    });
  }, [categorieList]);

  const saveChanges = () => {
    "".normalize;
    let newProduct = {
      ...product,
      name: document.getElementById("input-name-" + product.id).value,
      categorie: document
        .getElementById("input-categorie-" + product.id)
        .value.trim(),
      price: ExchangeTypes.map((type) => {
        return {
          type,
          amount: parseInt(document.getElementById(`input-${type}`).value),
        };
      }),
    };
    firestore
      .collection("products")
      .doc(product.id)
      .update(newProduct)
      .then(() => {
        Alerts.showSuccess();
      });
    Alerts.showLoading();
  };

  return (
    <div>
      <FormGroup>
        <Label for="exampleEmail">Nombre del producto:</Label>
        <Input
          name="name"
          id={"input-name-" + product.id}
          defaultValue={product.name}
        />
      </FormGroup>

      <FormGroup>
        <Label for="exampleEmail">Categorie:</Label>
        <TextInput
          Component="input"
          className="form-control"
          defaultValue={product.categorie}
          id={"input-categorie-" + product.id}
          options={categorieList}
          trigger={[""]}
        />
      </FormGroup>
      <Row>
        {ExchangeTypes.map((type, index) => (
          <Col xs="6" key={index}>
            <FormGroup>
              <Label for="exampleEmail">Valor en "{type}":</Label>
              <Input
                name="shortLink"
                type="number"
                id={`input-${type}`}
                defaultValue={
                  product.price.find((price) => type === price.type).amount
                }
              />
            </FormGroup>
          </Col>
        ))}
      </Row>
      <div className="border-top pt-3 text-right">
        <Button color="primary" className="mr-2" onClick={saveChanges}>
          <i className="fas fa-check" />
          Guardar cambios
        </Button>
        <Button color="secondary" onClick={toggleOpenModalEdit}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
