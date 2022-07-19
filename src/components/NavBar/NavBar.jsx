import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { GET_CATEGORIES, GET_CURRENCIES } from "../../queries/queries";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import vectorUp from "../../assets/vector-up.svg";
import vectorDown from "../../assets/vector-down.svg";
import CartDropDownStyled from "../../styles/components/CartDropDown/CartDropDown.styled";
import { getCartTotalCount } from "../../utils/utils";

export class NavBar extends Component {
  state = {
    dropDown: false,
    cartDropDown: false,
    currCurrency: localStorage.getItem("currency") || "$",
  };

  // if there is no currency in local storage, set it to default
  componentDidMount() {
    if (!localStorage.getItem("currency")) {
      localStorage.setItem("currency", "$");
    }
  }

  render() {
    return (
      <>
        <nav className={this.props.className}>
          <Query query={GET_CATEGORIES}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;
              return (
                <div className="nav-links">
                  {data.categories.map((category) => (
                    <a
                      href={`/?q=${category.name}`}
                      key={category.name}
                      className={`${
                        window.location.search === `?q=${category.name}`
                          ? "active"
                          : ""
                      }`}
                    >
                      {category.name.toUpperCase()}
                    </a>
                  ))}
                </div>
              );
            }}
          </Query>
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="cart">
            <Query query={GET_CURRENCIES}>
              {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                return (
                  <div className="drop-down">
                    <span
                      className="currency"
                      onClick={() => {
                        this.setState({ dropDown: !this.state.dropDown });
                      }}
                    >
                      {this.state.currCurrency}
                      {this.state.dropDown ? (
                        <img src={vectorUp} alt="Up Arrow" />
                      ) : (
                        <img src={vectorDown} alt="Down Arrow" />
                      )}
                    </span>
                    <div className="drop-down-content">
                      {/* render the currency drop down menu based on the state */}
                      {this.state.dropDown
                        ? data.currencies.map((currency) => (
                            <span
                              key={currency.symbol}
                              onClick={() => {
                                // change the currency displayed in the navbar
                                this.setState({
                                  currCurrency: `${currency.symbol}`,
                                });

                                // close dropdown
                                this.setState({ dropDown: false });

                                // add currency to local storage
                                localStorage.setItem(
                                  "currency",
                                  `${currency.symbol}`
                                );
                                // reload page to display new currency
                                window.location.reload();
                              }}
                            >
                              {`${currency.symbol} ${currency.label}`}
                            </span>
                          ))
                        : null}
                    </div>
                  </div>
                );
              }}
            </Query>
            <div className="cart-drop-icon">
              <img
                src={cart}
                alt="cart logo"
                onClick={() => {
                  this.setState({ cartDropDown: !this.state.cartDropDown });
                }}
              />
              {/* shows the total number of products in the cart */}
              {getCartTotalCount() > 0 ? (
                <div className="cart-total-count">{getCartTotalCount()}</div>
              ) : null}
            </div>
          </div>
        </nav>
        {/* render cart drop down based on the state */}
        {this.state.cartDropDown ? <CartDropDownStyled /> : null}
      </>
    );
  }
}

export default NavBar;
