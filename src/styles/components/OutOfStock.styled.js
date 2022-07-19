import styled from "styled-components";
import OutOfStock from "../../components/OutOfStock";

const OutOfStockStyled = styled(OutOfStock)`
  .out-of-stock {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8d8f9a;
    background-color: rgba(141, 143, 154, 0.2);
    height: 100%;
    width: 100%;
    z-index: 50;
    top: 0;
    left: 0;
    font-size: larger;
  }
`;

export default OutOfStockStyled;
