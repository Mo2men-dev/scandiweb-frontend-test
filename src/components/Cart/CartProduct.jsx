import React, { Component } from "react";
import {
  addToCart,
  getCartCount,
  getCurrency,
  removeFromCart,
  nextImage,
  prevImage,
  saveAttribute,
  checkAttribute,
} from "../../utils/utils";
import vectorRight from "../../assets/vector-right.svg";
import vectorLeft from "../../assets/vector-left.svg";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";

export class CartProduct extends Component {
  state = {
    currImage: 0,
  };
  render() {
    return (
      <div className={this.props.className}>
        <div className="cart-product">
          <div className="cart-product-info">
            <div className="cart-product-title">
              <h3>{this.props.product.product.name}</h3>
              <span>{this.props.product.product.brand}</span>
            </div>
            <div className="cart-product-price">
              <span>
                {getCurrency(this.props.product.product).currency.symbol}
                {getCurrency(this.props.product.product).amount}
              </span>
            </div>
            <div className="attributes">
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
          <div className="cart-product-item-amount">
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
                removeFromCart(this.props.product.product);
              }}
            >
              <img src={minus} alt="plus" />
            </button>
          </div>
          <div className="cart-product-image-slider">
            <img
              src={this.props.product.product.gallery[this.state.currImage]}
              alt="PRODUCT IMG"
              width={200}
              height={200}
            />
            <div className="slider-buttons">
              <button
                onClick={() => {
                  this.setState({
                    currImage: prevImage(
                      this.props.product.product,
                      this.state.currImage
                    ),
                  });
                }}
              >
                <img src={vectorLeft} alt="left arrow" />
              </button>
              <button
                onClick={() => {
                  this.setState({
                    currImage: nextImage(
                      this.props.product.product,
                      this.state.currImage
                    ),
                  });
                }}
              >
                <img src={vectorRight} alt="Right arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartProduct;
