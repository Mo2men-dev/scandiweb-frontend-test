import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { gql } from "@apollo/client";
import { params } from "../../utils/utils";
import StyledProductDisplayProduct from "../../styles/components/ProductDisplay/ProductDisplayProduct.style";

let productId = params.id;

let GET_PRODUCT_QUERY = gql`
  {
    product(id: "${productId}") {
      id
      name
      gallery
      prices {
        currency {
          symbol
        }
        amount
      }
      brand
      inStock
      description
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
    }
  }
`;
export class ProductDisplayContainer extends Component {
  componentDidMount = () => {
    document.title = "Product";
  };

  render() {
    return (
      <div className={this.props.className}>
        <Query query={GET_PRODUCT_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;
            return <StyledProductDisplayProduct product={data.product} />;
          }}
        </Query>
      </div>
    );
  }
}

export default ProductDisplayContainer;
