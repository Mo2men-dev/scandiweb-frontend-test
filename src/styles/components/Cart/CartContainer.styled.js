import styled from "styled-components";
import CartContainer from "../../../components/Cart/CartContainer";

const StyledCartContainer = styled(CartContainer)`
  .cart-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    max-height: fit-content;
    padding: 0 10%;
  }

  .cart-container-header {
    display: flex;
    width: 100%;
    padding: 2.5% 0;
    border-bottom: 2px solid #e5e5e5;
  }

  .cart-container-body-empty {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2.5%;
  }

  .order-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    padding: 0 0 5% 0;
  }

  .order-info > * {
    display: flex;
    width: 25%;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  .order-info > * > * {
    width: 90%;
    display: flex;
    justify-content: start;
    white-space: nowrap;
    font-weight: bolder;
  }

  .order-info button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 30px;
    background-color: ${(props) => props.theme.colors.highlitedText};
    color: white;
    border: none;
    cursor: pointer;
    padding: 2%;
  }
`;

export default StyledCartContainer;
