import React, { Component } from "react";
import {
  addToCart,
  getCurrency,
  saveAttribute,
  checkAttribute,
} from "../../utils/utils";

export class ProductDisplayProduct extends Component {
  state = {
    currImage: 0,
  };
  render() {
    return (
      <div className={this.props.className}>
        <div className="product-display-container">
          <div className="product-display-images">
            {this.props.product.gallery.length > 1
              ? this.props.product.gallery.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={this.props.product.name}
                    onClick={() => {
                      this.setState({ currImage: index });
                    }}
                  />
                ))
              : null}
          </div>
          <div className="product-display-image">
            {
              <img
                key={this.props.product.gallery[this.state.currImage]}
                src={this.props.product.gallery[this.state.currImage]}
                alt={this.props.product.name}
              />
            }
          </div>
          <div className="product-display-info">
            <h1>{this.props.product.name}</h1>
            <h2>{this.props.product.brand}</h2>
            <div className="attributes">
              {this.props.product.attributes.map((attribute) => (
                <div key={attribute.id} className="attribute">
                  <h3 className="attribute-name">{`${attribute.name}:`}</h3>
                  <span className="attribute-values">
                    {attribute.items.map((item) => (
                      <span
                        key={item.id}
                        className={`attribute-value ${
                          attribute.type === "swatch" ? "color" : ""
                        } ${
                          checkAttribute(
                            this.props.product,
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
                            this.props.product,
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
            <h3>Price:</h3>
            <h3>
              {getCurrency(this.props.product).currency.symbol}
              {getCurrency(this.props.product).amount}
            </h3>
            <h4>{this.props.product.inStock ? "In Stock" : "Out of Stock"}</h4>
            <button
              disabled={!this.props.product.inStock}
              onClick={() => {
                addToCart(this.props.product);
              }}
              style={{
                backgroundColor: !this.props.product.inStock ? "#8D8F9A" : null,
                cursor: !this.props.product.inStock ? "not-allowed" : "pointer",
              }}
            >
              Add to Cart
            </button>
            <p>
              {/* removing the paragraph tags from the description */}
              {this.props.product.description.replace(/<[^>]*>?/gm, "")}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDisplayProduct;
