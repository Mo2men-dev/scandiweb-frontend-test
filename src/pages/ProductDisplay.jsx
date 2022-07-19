import React, { Component } from "react";
import NavBarStyled from "../styles/components/NavBar/NavBar.styled";
import StyledProductDisplayContainer from "../styles/components/ProductDisplay/ProductDisplayContainer.styled";

export class ProductDisplay extends Component {
  render() {
    return (
      <>
        <NavBarStyled />
        <StyledProductDisplayContainer />
      </>
    );
  }
}

export default ProductDisplay;
