import React, { Component } from "react";

import {
  getCurrency,
  getCartCount,
  addToCart,
  removeFromCart,
  saveAttribute,
  checkAttribute,
} from "../../utils/utils";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";

export class CartDropDownProduct extends Component {
  state = {
    cartContent: JSON.parse(localStorage.getItem("cart")),
  };
  render() {
    return (
      <div className={`${this.props.className}`}>
        <div className="cart-drop-down-body-item">
          <div className="cart-drop-down-body-item-info">
            <div className="cart-drop-down-body-item-info-name">
              <span>{this.props.product.product.brand}</span>
              <span>{this.props.product.product.name}</span>
            </div>
            <div className="cart-drop-down-body-item-info-price">
              <span>
                {`${getCurrency(this.props.product.product).currency.symbol}${
                  getCurrency(this.props.product.product).amount
                }`}
              </span>
              <div className="cart-drop-down-body-item-info-attributes">
                {this.props.product.product.attributes.map((attribute) => (
                  <div key={attribute.id} className="attribute">
                    <span className="attribute-name">{`${attribute.name}:`}</span>
                    <span className="attribute-values">
                      {attribute.items.map((item) => (
                        <span
                          key={item.id}
                          className={`attribute-value ${
                            attribute.type === "swatch" ? "color" : ""
                          } ${
                            checkAttribute(
                              this.props.product.product,
                              attribute.id,
                              item.value
                            )
                              ? "active"
                              : ""
                          }`}
                          style={{
                            backgroundColor:
                              attribute.type === "swatch"
                                ? `${item.value}`
                                : null,
                          }}
                          onClick={() => {
                            saveAttribute(
                              this.props.product.product,
                              attribute.id,
                              item.value
                            );
                          }}
                        >
                          {attribute.type === "swatch" ? null : item.value}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="cart-drop-down-body-item-amount">
            <button
              onClick={() => {
                addToCart(this.props.product.product);
              }}
            >
              <img src={plus} alt="plus" />
            </button>
            <span>{getCartCount(this.props.product)}</span>
            <button
              onClick={() => {
                removeFromCart(
                  this.props.product.product,
                  this.state.cartContent
                );
              }}
            >
              <img src={minus} alt="plus" />
            </button>
          </div>
          <div className="cart-drop-down-body-item-image">
            <img
              src={this.props.product.product.gallery[0]}
              alt={this.props.product.product.name}
              width={120}
              height={190}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CartDropDownProduct;
