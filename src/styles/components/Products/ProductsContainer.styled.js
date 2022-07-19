import styled from "styled-components";
import ProductsContainer from "../../../components/Products/ProductsContainer";

const ProductsContainerStyled = styled(ProductsContainer)`
  background-color: ${(props) => props.theme.colors.backgroundColor};
  position: relative;
  width: 100%;
  padding: 0 10%;
  height: fit-content;

  .category-title {
    padding: 5% 0;
  }

  .products {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export default ProductsContainerStyled;
