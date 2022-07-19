import { Component } from "react";
import NavBarStyled from "../styles/components/NavBar/NavBar.styled";
import ProductsContainerStyled from "../styles/components/Products/ProductsContainer.styled";

class Home extends Component {
  render() {
    return (
      <>
        <NavBarStyled />
        <ProductsContainerStyled />
      </>
    );
  }
}

export default Home;
