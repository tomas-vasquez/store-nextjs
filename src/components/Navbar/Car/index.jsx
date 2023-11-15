import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";

export default function Car() {
  const car = useSelector((state) => state.car);
  const settings = useSelector((state) => state.settings);

  const currentExchangeRate =
    settings.exchangeRates[settings.currentExchangeRateIndex];

  let totalToPay = car.reduce((a, item) => {
    const itemPrice = item.price.find(
      (price) => currentExchangeRate.type === price.type
    )?.amount;
    return a + itemPrice * item.itemAmount;
  }, 0);
  let totalItems = car.reduce((a, item) => {
    return a + item.itemAmount;
  }, 0);

  let shippingCost = settings.shippingCost.find(
    (price) => currentExchangeRate.type === price.type
  )?.amount;

  return (
    <UncontrolledDropdown size="lg">
      <DropdownToggle nav className="dropdown-toggle chevron-big">
        <i
          className="fas fa-shopping-cart d-inline-block"
          style={{ fontSize: 35 }}
        ></i>
        &ensp;
        <div className="d-inline-block text-dark">
          <span className="small d-block text-left">Shopping cart</span>
          <span className="font-weight-bold" data-total>
            <div className="d-inline-block text-dark" data-if="login">
              <span className="cart-items" data-total_items>
                {totalItems} items
              </span>
            </div>
          </span>
        </div>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-xl" end>
        <table className="table table-striped ">
          <tbody>
            {car.length === 0 && (
              <tr>
                <td className="text-center">El carrito esta vacio.</td>
              </tr>
            )}
            {car.map((product, index) => (
              <tr key={index}>
                <td className="text-left">
                  <img
                    src={product.images[0].imageUrl}
                    width={40}
                    height={40}
                    alt={product.images[0].imageId}
                  />
                </td>
                <td>
                  {product.name}
                  <br />x{product.itemAmount}{" "}
                  <span className="ml-2 text-secondary">
                    {currentExchangeRate.type}
                    {
                      product.price.find(
                        (price) => currentExchangeRate.type === price.type
                      )?.amount
                    }
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {car.length !== 0 && (
          <table className="table table-sm table-bordered">
            <tbody>
              <tr>
                <td className="text-right">
                  <strong>Sub-Total</strong>
                </td>
                <td className="text-right">
                  {currentExchangeRate.type + totalToPay}
                </td>
              </tr>

              <tr>
                <td className="text-right">
                  <strong>Envio </strong>
                </td>
                <td className="text-right">
                  {currentExchangeRate.type + shippingCost}
                </td>
              </tr>
              <tr>
                <td className="text-right">
                  <strong>Total</strong>
                </td>
                <td className="text-right">
                  {currentExchangeRate.type + (totalToPay + shippingCost)}
                </td>
              </tr>
            </tbody>
          </table>
        )}
        <div className="d-flex">
          <Link className="btn btn-secondary ml-auto mr-2" href="/car">
            See cart <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
