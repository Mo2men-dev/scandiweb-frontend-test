import Product from "../../../components/Products/Product";
import styled from "styled-components";

const ProductStyled = styled(Product)`
  .product {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    padding: 10px;
    margin: 0 20px 20px 0;
    animation: fadeIn 0.5s ease-in-out;
  }

  .product-image {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .add-to-cart {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: -20px;
    right: 10px;
    background-color: ${(props) => props.theme.colors.highlitedText};
    padding: 10px;
    display: none;
    cursor: pointer;
    border-radius: 50%;
    width: 52px;
    height: 52px;
    z-index: 500;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }

  .product:hover {
    cursor: pointer;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }

  .product:hover .add-to-cart {
    display: block;
  }

  .product-brand {
    margin-top: 20px;
  }

  .product-name {
    margin-top: 20px;
  }

  .product-price {
    font-weight: bold;
  }

  .out-of-stock-container {
    position: relative;
    display: flex;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default ProductStyled;
