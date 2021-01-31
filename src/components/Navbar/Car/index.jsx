import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

const Car = function ({ car }) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div className="float-right" id="mini-cart">
      <UncontrolledDropdown size="lg">
        <DropdownToggle nav>
          <i
            className="la la-shopping-cart d-inline-block"
            style={{ fontSize: 42 }}
          >
            {car.products.length > 0 && (
              <span className="cart-items" data-total_items>
                {car.products.length}
              </span>
            )}
          </i>
          &ensp;
          <div className="d-inline-block text-dark">
            <span className="small d-block text-left">Tu carrito</span>
            <span className="font-weight-bold" data-total>
              {car.products.length > 0 && (
                <span className="cart-items" data-total_items>
                  {car.products.length}
                </span>
              )}
            </span>
          </div>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-xl">
          <table className="table table-striped ">
            <tbody>
              {car.products.length === 0 && (
                <tr>
                  <td className="text-center">El carrito esta vacio.</td>
                </tr>
              )}
              {car.products.map((product, index) => (
                <tr key={index}>
                  <td className="text-left">
                    <a href="http://opencart3100.givan.ro/index.php?route=product/product&amp;language=en-gb&amp;product_id=40">
                      {product.name}
                    </a>
                  </td>
                  <td className="text-right">x1</td>
                  <td className="text-right">$123</td>
                </tr>
              ))}
            </tbody>
          </table>
          {car.products.length !== 0 && (
            <table className="table table-sm table-bordered">
              <tbody>
                <tr>
                  <td className="text-right">
                    <strong>Sub-Total</strong>
                  </td>
                  <td className="text-right">$681.00</td>
                </tr>

                <tr>
                  <td className="text-right">
                    <strong>Envio (20Bs)</strong>
                  </td>
                  <td className="text-right">$136.20</td>
                </tr>
                <tr>
                  <td className="text-right">
                    <strong>Total</strong>
                  </td>
                  <td className="text-right">$823.20</td>
                </tr>
              </tbody>
            </table>
          )}
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

const mapStateToProps = (state) => ({
  car: state.car,
});

export default connect(mapStateToProps)(Car);
