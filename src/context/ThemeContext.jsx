import { ThemeProvider } from "styled-components";
import React, { Component } from "react";

const theme = {
  colors: {
    backgroundColor: "#FFFFFF",
    textColor: "#1D1F22",
    highlitedText: "#5ECE7B",
    highlitedBackgroundColor: "#eeeeee",
  },
};

class ThemeContext extends Component {
  render() {
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>;
  }
}

export default ThemeContext;
