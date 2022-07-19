import styled from "styled-components";
import ProductDisplayProduct from "../../../components/ProductsDisplay/ProductDisplayProduct";

const StyledProductDisplayProduct = styled(ProductDisplayProduct)`
  .product-display-container {
    display: flex;
    padding: 5%;
    animation: dropFadeIn 0.5s ease-in-out;
  }

  .product-display-images {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 20%;
    max-height: 250px;
    overflow-y: scroll;
    padding: 5px;
  }
  .product-display-images img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    margin-bottom: 20px;
  }

  .product-display-image {
    width: 60%;
    height: 100%;
    margin: 0 20px;
  }

  .product-display-image img {
    width: 100%;
    height: 100%;
    animation: fadeIn 0.5s ease-in-out;
  }

  .product-display-info {
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 10px;
  }

  .product-display-info h3 {
    font-weight: bolder;
  }

  .product-display-info button {
    width: 100%;
    height: 50px;
    background-color: ${(props) => props.theme.colors.highlitedText};
    color: white;
    border: none;
    cursor: pointer;
  }

  .product-display-info p {
    max-height: 100px;
    overflow-y: scroll;
    font-weight: bold;
  }

  .attributes {
    display: flex;
    flex-direction: column;
  }

  .attribute {
    display: flex;
    flex-direction: column;
    margin: 5px 0;
  }

  .attribute-values {
    display: flex;
    flex-wrap: wrap;
  }

  .attribute-value {
    border: 2px solid ${(props) => props.theme.colors.textColor};
    margin: 5px;
    padding: 10px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.backgroundColor};
    color: ${(props) => props.theme.colors.textColor};
    font-size: large;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: ${(props) => props.theme.colors.textColor};
      color: ${(props) => props.theme.colors.backgroundColor};
    }
  }

  .color {
    border: 2px solid transparent;
  }

  .active {
    background-color: ${(props) => props.theme.colors.textColor};
    color: ${(props) => props.theme.colors.backgroundColor};
  }

  .color.active {
    outline: 3px solid ${(props) => props.theme.colors.highlitedText};
  }

  @keyframes dropFadeIn {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 750px) {
    .product-display-container {
      flex-direction: column;
    }
    .product-display-container > * {
      width: 100%;
    }
    .product-display-images {
      position: relative;
      display: flex;
      flex-direction: row;
      height: 100px;
      max-width: 100%;
    }
  }
`;

export default StyledProductDisplayProduct;
