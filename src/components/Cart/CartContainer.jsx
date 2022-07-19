import React, { Component } from "react";
import {
  addTax,
  getCartTotalCount,
  getProducts,
  getTotal,
} from "../../utils/utils";
import StyledCartProduct from "../../styles/components/Cart/CartProduct.styled";

export class CartContainer extends Component {
  state = {
    products: getProducts(),
  };

  componentDidMount = () => {
    document.title = "Cart";
  };
  render() {
    return (
      <div className={this.props.className}>
        <div className="cart-container">
          <div className="cart-container-header">
            <h1 className="cart-container-header-title">Cart</h1>
          </div>
          <div className="cart-container-body">
            {getCartTotalCount() > 0 ? (
              this.state.products.map((product) => {
                return (
                  <div key={product.product.id}>
                    <StyledCartProduct product={product} />
                  </div>
                );
              })
            ) : (
              <div className="cart-container-body-empty">
                <h3>Your cart is empty</h3>
              </div>
            )}
            <div className="order-info">
              <div>
                <span>Tax 21%: </span>
                <span>{(getTotal(this.state.products) * 0.21).toFixed(2)}</span>
              </div>
              <div>
                <span>Quanity: </span>
                <span>{getCartTotalCount()}</span>
              </div>
              <div>
                <span>Total: </span>
                <span>{addTax(getTotal(this.state.products))}</span>
              </div>
              <button>ORDER</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartContainer;
