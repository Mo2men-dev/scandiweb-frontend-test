import React, { Component } from "react";
import NavBarStyled from "../styles/components//NavBar/NavBar.styled";
import StyledCartContainer from "../styles/components/Cart/CartContainer.styled";

export class Cart extends Component {
  render() {
    return (
      <>
        <NavBarStyled />
        <StyledCartContainer />
      </>
    );
  }
}

export default Cart;
