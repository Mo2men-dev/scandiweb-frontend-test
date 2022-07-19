import styled from "styled-components";
import CartProduct from "../../../components/Cart/CartProduct";

const StyledCartProduct = styled(CartProduct)`
  .cart-product {
    display: flex;
    width: 100%;
    border-bottom: 2px solid #e5e5e5;
    padding: 2.5% 0;
  }

  .cart-product-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2.5%;
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

  .cart-product-item-amount {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    padding: 0 5px;
  }

  .cart-product-item-amount button {
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.textColor};
    color: ${(props) => props.theme.colors.textColor};
    padding: 10px;
    font-size: larger;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: ${(props) =>
        props.theme.colors.highlitedBackgroundColor};
    }
  }

  .cart-product-image-slider {
    position: relative;
  }

  .slider-buttons {
    position: absolute;
    display: flex;
    justify-content: end;
    width: 100%;
    background-color: transparent;
    top: 80%;
  }

  .slider-buttons button {
    background-color: rgb(0, 0, 0, 0.75);
    color: white;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
  }
`;

export default StyledCartProduct;
