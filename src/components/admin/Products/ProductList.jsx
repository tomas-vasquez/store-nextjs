import React, { useEffect, useState } from "react";
import { useFirestore } from "reactfire";
import Icons from "../../common/Icons";
import Loading from "../Loading";
import { Button, Row, Col } from "reactstrap";
import SingleProduct from "./SingleProduct";
import ModalAppProduct from "./ModalAddProduct";

export default function ProductList() {
  const [products, setProducts] = useState(null);
  const [isComplete, setIsComplete] = useState(false);

  const [openModalAdd, setOpenModalAdd] = useState(false);
  const toggleOpenModalAdd = () => setOpenModalAdd(!openModalAdd);

  const fireStore = useFirestore();

  useEffect(() => {
    fireStore.collection("products").onSnapshot((snapshot) => {
      const products = [];
      snapshot.forEach((doc) => products.push({ ...doc.data(), id: doc.id }));
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

          <Button
            className="ml-auto"
            color="primary"
            onClick={toggleOpenModalAdd}
          >
            <Icons icon="plus" className="mr-2" />
            Anadir
          </Button>
          <ModalAppProduct
            openModalEdit={openModalAdd}
            toggleOpenModalEdit={toggleOpenModalAdd}
          />
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
