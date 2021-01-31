import React from "react";
import Icons from "../components/common/Icons";

export default function Car() {
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
            <a href="#" onclick="jQuery('.login-form').toggle();return false;">
              I am a returning customer
            </a>
          </p>
        </div>
        <div className="col-12">
          <form action="" method="post" enctype="multipart/form-data">
            <div className="table-responsive">
              <table className="table table-bordered" data-cart>
                <thead>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-left">Nombre del producto</td>
                    <td className="text-left">Modelo</td>
                    <td className="text-left">Cantidad</td>
                    <td className="text-right">Precio por unidad</td>
                    <td className="text-right">Total</td>
                  </tr>
                </thead>
                <tbody>
                  <tr data-product>
                    <td className="text-center">
                      <a
                        href="https://demo.opencart.com/index.php?route=product/product&amp;product_id=40"
                        data-url
                      >
                        <img
                          src="https://demo.opencart.com/image/cache/catalog/demo/iphone_1-47x47.jpg"
                          alt="iPhone"
                          title="iPhone"
                          data-img
                        />
                      </a>
                    </td>
                    <td className="text-left">
                      <a
                        href="https://demo.opencart.com/index.php?route=product/product&amp;product_id=40"
                        data-name
                      >
                        iPhone 5
                      </a>
                      <span className="text-danger">***</span>
                    </td>
                    <td className="text-left">product 11</td>
                    <td className="text-left">
                      <div
                        className="input-group btn-block"
                        style={{ maxWidth: 200 }}
                      >
                        <input
                          type="text"
                          name="quantity[YToxOntzOjEwOiJwcm9kdWN0X2lkIjtpOjQwO30=]"
                          defaultValue="2"
                          size="1"
                          className="form-control"
                        />
                        <span className="input-group-btn">
                          <button
                            type="submit"
                            data-toggle="tooltip"
                            title=""
                            className="btn btn-primary"
                            data-original-title="Update"
                          >
                            <i className="la la-refresh"></i>
                          </button>
                          <button
                            type="button"
                            data-toggle="tooltip"
                            title=""
                            className="btn btn-danger"
                            onclick="cart.remove('YToxOntzOjEwOiJwcm9kdWN0X2lkIjtpOjQwO30=');"
                            data-original-title="Remove"
                          >
                            <i className="la la-times-circle"></i>
                          </button>
                        </span>
                      </div>
                    </td>
                    <td className="text-right">$123.20</td>
                    <td className="text-right">$246.40</td>
                  </tr>

                  <tr>
                    <td className="text-center">
                      <a href="https://demo.opencart.com/index.php?route=product/product&amp;product_id=43">
                        <img
                          src="https://demo.opencart.com/image/cache/catalog/demo/macbook_1-47x47.jpg"
                          alt="MacBook"
                          title="MacBook"
                        />
                      </a>
                    </td>
                    <td className="text-left">
                      <a href="https://demo.opencart.com/index.php?route=product/product&amp;product_id=43">
                        MacBook
                      </a>
                      <span className="text-danger">***</span>
                      <br />
                      <small>Reward Points: 1200</small>
                    </td>
                    <td className="text-left">Product 16</td>
                    <td className="text-left">
                      <div
                        className="input-group btn-block"
                        style={{ maxWidth: 200 }}
                      >
                        <input
                          type="text"
                          name="quantity[YToxOntzOjEwOiJwcm9kdWN0X2lkIjtpOjQzO30=]"
                          defaultValue="2"
                          size="1"
                          className="form-control"
                        />
                        <span className="input-group-btn">
                          <button
                            type="submit"
                            data-toggle="tooltip"
                            title=""
                            className="btn btn-primary"
                            data-original-title="Update"
                          >
                            <i className="la la-refresh"></i>
                          </button>
                          <button
                            type="button"
                            data-toggle="tooltip"
                            title=""
                            className="btn btn-danger"
                            onclick="cart.remove('YToxOntzOjEwOiJwcm9kdWN0X2lkIjtpOjQzO30=');"
                            data-original-title="Remove"
                          >
                            <i className="la la-times-circle"></i>
                          </button>
                        </span>
                      </div>
                    </td>
                    <td className="text-right">$602.00</td>
                    <td className="text-right">$1,204.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
