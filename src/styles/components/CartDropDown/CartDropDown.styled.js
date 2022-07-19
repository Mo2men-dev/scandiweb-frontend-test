import styled from "styled-components";
import CartDropDown from "../../../components/CartDropDown/CartDropDown";

const CartDropDownStyled = styled(CartDropDown)`
  background-color: rgba(57, 55, 72, 0.5);
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;

  .cart-drop-down {
    position: absolute;
    background-color: ${(props) => props.theme.colors.backgroundColor};
    color: ${(props) => props.theme.colors.textColor};
    top: 75px;
    right: 0%;
    width: fit-content;
    z-index: 900;
    padding: 1rem;
  }

  .cart-drop-down-body {
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 1rem;
    max-height: 420px;
    overflow-y: scroll;
  }

  .cart-drop-down-body-empty {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 20px;
    margin: 10px;
  }

  .cart-drop-down-footer-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
  }

  .cart-drop-down-footer-checkout {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cart-drop-down-footer-checkout a {
    margin: 5px 5px;
    cursor: pointer;
  }

  .cart-drop-down-footer-checkout a:first-child {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    padding: 8px 18px;
    color: ${(props) => props.theme.colors.textColor};
    border: 2px solid ${(props) => props.theme.colors.textColor};
  }

  .cart-drop-down-footer-checkout a:last-child {
    background-color: ${(props) => props.theme.colors.highlitedText};
    padding: 10px 20px;
    color: white;
  }
`;

export default CartDropDownStyled;
