import React, { Component } from "react";
import { getTotal } from "../../utils/utils";
import CartDropDownProductStyled from "../../styles/components/CartDropDown/CartDropDownProduct.styled";

export class CartDropDown extends Component {
  state = {
    // getting the cart content from localStorage and parse it to an array
    cartContent: JSON.parse(localStorage.getItem("cart")) || [],
  };
  render() {
    return (
      <div className={this.props.className}>
        <div className="cart-drop-down">
          <div className="cart-drop-down-header">
            <div className="cart-drop-down-header-title">
              <span>My Bag: {this.state.cartContent.length}</span>
            </div>
          </div>
          <div className="cart-drop-down-body">
            {this.state.cartContent.length < 1 ? (
              <div className="cart-drop-down-body-empty">
                <span>Your cart is empty</span>
              </div>
            ) : (
              this.state.cartContent.map((product) => (
                <CartDropDownProductStyled
                  product={product}
                  key={product.product.id}
                />
              ))
            )}
          </div>
          <div className="cart-drop-down-footer">
            <div className="cart-drop-down-footer-total">
              <span>Total: </span>
              <span>
                {`${localStorage.getItem("currency")}${getTotal(
                  this.state.cartContent
                )}`}
              </span>
            </div>
            <div className="cart-drop-down-footer-checkout">
              <a href="/cart">Veiw Bag</a>
              <a>Checkout</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartDropDown;
