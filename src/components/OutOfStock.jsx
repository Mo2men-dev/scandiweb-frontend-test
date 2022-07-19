import React, { Component } from "react";

export class OutOfStock extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="out-of-stock">OUT OF STOCK</div>
      </div>
    );
  }
}

export default OutOfStock;
