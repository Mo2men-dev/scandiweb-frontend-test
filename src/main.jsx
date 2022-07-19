import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDisplay from "./pages/ProductDisplay";
import Cart from "./pages/Cart";
import GlobalStyles from "./styles/GlobalStyles";
import ThemeContext from "./context/ThemeContext";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <GlobalStyles />
        <ThemeContext>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/product" element={<ProductDisplay />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </ThemeContext>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
