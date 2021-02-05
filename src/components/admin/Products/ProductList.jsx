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
      <div className="d-flex mb-4">
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
