import React from "react";
import Icons from "../components/common/Icons";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import {
  increaseProductCuantity,
  reduceProductCuantity,
  removeProductToCart,
} from "../store/slices/carSlice";

export default function Car() {
  const car = useSelector((state) => state.car);
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const currentExchangeRate =
    settings.exchangeRates[settings.currentExchangeRateIndex];

  let totalToPay = car.reduce((a, item) => {
    const itemPrice = item.price.find(
      (price) => currentExchangeRate.type === price.type
    )?.amount;
    return a + itemPrice * item.itemAmount;
  }, 0);

  const increaseProductCuantityButtonHandler = (e, product) => {
    e.preventDefault();
    dispatch(increaseProductCuantity(product));
  };
  const reduceProductCuantityButtonHandler = (e, product) => {
    e.preventDefault();
    dispatch(reduceProductCuantity(product));
  };

  const removeProductToCartButtonHandler = (e, product) => {
    e.preventDefault();
    dispatch(removeProductToCart(product));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-2 mb-4">
          <h2>
            <Icons icon="car" className="mr-3 text-primary" />
            Carrito de compras
          </h2>
          <p className="well">
            Aqui apareceran todos los productos que anadio a su carrito de
            compras. &nbsp;
            <Link href="#">I am a returning customer</Link>
          </p>
        </div>
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-bordered" data-cart>
              <thead>
                <tr>
                  <td className="text-center"></td>
                  <td className="text-left">Nombre del producto</td>
                  <td className="text-left">Cantidad</td>
                  <td className="text-right">Actions</td>
                  <td className="text-right">Precio por unidad</td>
                  <td className="text-right">Total</td>
                </tr>
              </thead>
              <tbody>
                {car.map((product, index) => (
                  <tr data-product key={index}>
                    <td className="text-center">
                      <img
                        src={product.images[0].imageUrl}
                        width={30}
                        height={30}
                        alt={product.images[0].imageId}
                      />
                    </td>
                    <td className="text-left">
                      <span className="text-secondary text-md">
                        {product.name}
                      </span>
                      {/* <span className="text-danger">***</span> */}
                    </td>
                    <td className="text-left" style={{ maxWidth: 100 }}>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <button
                            className="btn "
                            type="button"
                            disabled={product.itemAmount === 1}
                            onClick={(e) => {
                              reduceProductCuantityButtonHandler(e, product);
                            }}
                          >
                            -
                          </button>
                        </div>
                        <input
                          type="number"
                          value={product.itemAmount}
                          onChange={(e) => {
                            e.preventDefault();
                          }}
                          className="form-control"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn"
                            type="button"
                            onClick={(e) => {
                              increaseProductCuantityButtonHandler(e, product);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => {
                          removeProductToCartButtonHandler(e, product);
                        }}
                      >
                        <i className="la la-times" />
                      </button>
                    </td>
                    <td className="text-right">
                      {currentExchangeRate.type}
                      {
                        product.price.find(
                          (price) => currentExchangeRate.type === price.type
                        )?.amount
                      }
                    </td>
                    <td className="text-right">
                      {currentExchangeRate.type}
                      {product.price.find(
                        (price) => currentExchangeRate.type === price.type
                      )?.amount * product.itemAmount}
                    </td>
                  </tr>
                ))}
                <tr data-product>
                  <td className="border-0"></td>
                  <td className="border-0"></td>
                  <td className="border-0"></td>
                  <td className="border-0"></td>

                  <td className="text-right">
                    {currentExchangeRate.type}
                    {totalToPay}
                  </td>
                  <td className="border-0"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
