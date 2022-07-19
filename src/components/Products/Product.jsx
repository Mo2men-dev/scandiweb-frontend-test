import React, { Component } from "react";
import cart from "../../assets/cartWhite.svg";
import { addToCart, getCurrency } from "../../utils/utils";
import OutOfStockStyled from "../../styles/components/OutOfStock.styled";

export class Product extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div
          className="product"
          onClick={() => {
            // redirect to product page and pass the product id as a url param
            window.location.href = `/product?id=${this.props.product.id}`;
          }}
        >
          <div className="product-image">
            {this.props.product.inStock ? (
              <div className="out-of-stock-container">
                <img
                  src={this.props.product.gallery[0]}
                  width={250}
                  alt={this.props.product.name}
                />
                <div className="add-to-cart-container">
                  <button
                    className="add-to-cart"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(this.props.product);
                    }}
                  >
                    <img src={cart} alt="Cart Img" width={24} height={24} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="out-of-stock-container">
                <img
                  src={this.props.product.gallery[0]}
                  width={250}
                  alt={this.props.product.name}
                  style={{ opacity: this.props.product.inStock ? 1 : 0.5 }}
                />
                <OutOfStockStyled />
              </div>
            )}
          </div>
          <h4
            className="product-name"
            style={{
              color: !this.props.product.inStock ? "#8D8F9A" : null,
            }}
          >
            {this.props.product.name}
          </h4>

          <div
            className="product-price"
            style={{
              color: !this.props.product.inStock ? "#8D8F9A" : null,
            }}
          >
            {`${getCurrency(this.props.product).currency.symbol}${
              getCurrency(this.props.product).amount
            }`}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
