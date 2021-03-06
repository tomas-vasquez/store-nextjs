import React from "react";
import { useFirestore } from "reactfire";
import { FormGroup, Label, Input, Row, Col, Button } from "reactstrap";
import Alerts from "../../../common/Alerts";
import Icons from "../../../common/Icons";

const ExchangeTypes = ["BS", "USD"];

export default function MainInformation({ product, toggleOpenModalEdit }) {
  const firestore = useFirestore();

  const saveChanges = () => {
    let newProduct = {
      ...product,
      name: document.getElementById("input-name").value,
      shortLink: document.getElementById("input-shortLink").value,
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
        <Input name="name" id="input-name" defaultValue={product.name} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Enlace corto:</Label>
        <Input
          name="shortLink"
          id="input-shortLink"
          defaultValue={product.shortLink}
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
          <Icons icon="check" className="mr-2" />
          Guardar cambios
        </Button>
        <Button color="secondary" onClick={toggleOpenModalEdit}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
