import styled from "styled-components";
import CartDropDownProduct from "../../../components/CartDropDown/CartDropDownProduct";

const CartDropDownProductStyled = styled(CartDropDownProduct)`
  .cart-drop-down-body-item {
    margin: 10px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .cart-drop-down-body-item-info {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .cart-drop-down-body-item-info-name {
    display: flex;
    flex-direction: column;
  }

  .cart-drop-down-body-item-info-name span {
    margin-bottom: 5px;
    font-size: large;
  }

  .cart-drop-down-body-item-info-attributes {
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

  .cart-drop-down-body-item-info-price {
    margin: 5px 0;
    font-weight: bold;
    font-size: large;
  }

  .cart-drop-down-body-item-amount {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    padding: 0 5px;
    width: fit-content;
  }

  .cart-drop-down-body-item-amount button {
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.textColor};
    color: ${(props) => props.theme.colors.textColor};
    height: 24px;
    padding: 10px;
    font-size: larger;
    width: 24px;
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

  .cart-drop-down-body-item-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cart-drop-down-body-item-image img {
    width: 150px;
    height: 200px;
  }
`;

export default CartDropDownProductStyled;
