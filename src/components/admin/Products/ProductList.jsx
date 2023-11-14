import React, { use, useContext, useEffect, useState } from "react";
import Icons from "../../common/Icons";
import Loading from "../Loading";
import { Button, Row, Col, Input } from "reactstrap";
import SingleProduct from "./SingleProduct";
import Alerts from "../../../utils/Alerts";
import FirebaseContext from "../../../context/FirebaseContext";
import {
  addProduct,
  getAllCategories,
  getAllProductsNotAsync,
  getCategorieList,
} from "../../../utils/fetcher";

const ExchangeTypes = ["BS", "USD"];

export default function ProductList() {
  const [products, setProducts] = useState(null);
  const [isComplete, setIsComplete] = useState(false);
  const [categorieList, setCategorieList] = useState([]);
  const [currentCategorie, setCurrentCategorie] = useState("");

  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    getAllProductsNotAsync(firebase, (products) => {
      getAllCategories(firebase, (categories) => {
        setCategorieList(getCategorieList(categories));
      });

      setProducts(products);

      setIsComplete(true);
    });
  }, []);

  //button actions

  const handleAddProduct = () => {
    const newProduct = {
      images: [],
      price: ExchangeTypes.map((type) => {
        return {
          type,
          amount: 0,
        };
      }),
      name: "product-" + (products.length + 1),
      categorie: currentCategorie,
      description: "",
      specs: "",
      createdAt: new Date().getTime(),
    };

    Alerts.showLoading();

    addProduct(firebase, newProduct, () => {
      Alerts.showSuccess();
    });
  };

  if (!isComplete) return <Loading texto="cargando productos....." />;

  let leakedProducts = products;

  if (currentCategorie != "all categories") {
    leakedProducts = leakedProducts.filter((product) => {
      console.log(product.categorie == currentCategorie);
      return product.categorie === currentCategorie;
    });
  }

  leakedProducts = leakedProducts.sort((a, b) => {
    console.log("aaaa", a.createdAt);
    return a.createdAt - b.createdAt;
  });

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

          <Input
            type="select"
            style={{ width: 350 }}
            value={currentCategorie}
            className="custom-select input-group-append form-control-lg no-border-x"
            onChange={(e) => {
              setCurrentCategorie(e.target.value);
            }}
          >
            <option>all categories</option>
            {categorieList.map((categerie) => (
              <option key={categerie}>{categerie}</option>
            ))}
          </Input>

          <div className="input-group-append mr-3">
            <button className="btn btn-primary" type="button">
              <i className="la la-search"></i>
            </button>
          </div>

          <Button
            className="ml-auto"
            color="primary"
            onClick={handleAddProduct}
          >
            <Icons icon="plus" className="mr-2" />
            Anadir
          </Button>
        </div>
      </form>

      <div className="d-flex">
        <p>mostrando ({leakedProducts.length} productos):</p>
      </div>

      <Row>
        {leakedProducts.map((product) => (
          <Col xs="12" sm="6" md="4" lg="3" key={product.id} className="mb-3">
            <SingleProduct product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
