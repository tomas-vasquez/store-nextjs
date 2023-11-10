import React, { useContext, useEffect, useState } from "react";
import Icons from "../../common/Icons";
import Loading from "../Loading";
import { Button, Row, Col } from "reactstrap";
import SingleProduct from "./SingleProduct";
import Alerts from "../../../utils/Alerts";
import FirebaseContext from "../../../context/FirebaseContext";
import { getAllProductsNotAsync } from "../../../utils/products";

const ExchangeTypes = ["BS", "USD"];

export default function ProductList() {
  const [products, setProducts] = useState(null);
  const [isComplete, setIsComplete] = useState(false);

  const firebase = useContext(FirebaseContext);
  const fireStore = firebase.firestore();

  const handleAddPrduct = () => {
    fireStore
      .collection("products")
      .doc()
      .set({
        images: [],
        price: ExchangeTypes.map((type) => {
          return {
            type,
            amount: 0,
          };
        }),
        name: "no-definido",
        shortLink: "no-definido",
        description: "no-definido",
        specs: "no-definido",
      })
      .then(function () {
        Alerts.showSuccess();
      });
    Alerts.showLoading();
  };

  useEffect(() => {
    getAllProductsNotAsync(firebase, (products) => {
      setProducts(products);
      setIsComplete(true);
    });
  }, []);

  if (!isComplete) return <Loading texto="cargando productos....." />;

  return (
    <div>
      <form className="">
        <div
          className="input-group input-group-lg mb-3"
          id="search-box"
          data-component-category
        >
          <input
            type="text"
            className="form-control default-font-size"
            placeholder="Search product"
            aria-label="Search product"
          />

          <select className="custom-select input-group-append form-control-lg no-border-x default-font-size">
            <option defaultValue="on">All categories</option>
            <option defaultValue="1">One</option>
            <option defaultValue="2">Two</option>
            <option defaultValue="3">Three</option>
          </select>

          <div className="input-group-append mr-3">
            <button className="btn btn-primary" type="button">
              <i className="la la-search"></i>
            </button>
          </div>

          <Button className="ml-auto" color="primary" onClick={handleAddPrduct}>
            <Icons icon="plus" className="mr-2" />
            Anadir
          </Button>
        </div>
      </form>

      <div className="d-flex">
        <p>mostrando ({products.length} productos):</p>
      </div>

      <Row>
        {products.map((product, index) => (
          <Col xs="12" sm="6" md="4" lg="3" key={index} className="mb-3">
            <SingleProduct product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
