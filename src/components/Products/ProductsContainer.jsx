import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import React, { Component } from "react";
import { params } from "../../utils/utils";
import ProductStyled from "../../styles/components/Products/Product.styled";

let category = "all";
// if the url doesn't have a q parameter, then set the category to all
if (!params.q) {
  category = "all";
} else {
  category = params.q;
}
let GET_PRODUCTS = gql`
{
	category(input: {title: "${category}"}) {
    products{
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
}
`;

export class ProductsContainer extends Component {
  componentDidMount() {
    document.title = `Category - ${category.toUpperCase()}`;
  }
  render() {
    return (
      <div className={this.props.className}>
        <h1 className="category-title">{category.toUpperCase()}</h1>
        <Query query={GET_PRODUCTS}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;
            return (
              <div className="products">
                {data.category.products.map((product) => (
                  <div key={product.id}>
                    <ProductStyled product={product} />
                  </div>
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default ProductsContainer;
