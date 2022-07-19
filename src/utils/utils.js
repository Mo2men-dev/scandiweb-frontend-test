export const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (target, key) => {
    if (key === "q") {
      return target.getAll(key)[0];
    }
    return target.get(key);
  },
});

// get currency from localStorage and get it's object index from the prices array in the product array
export const getCurrency = (product) => {
  const currency = localStorage.getItem("currency");
  const currencyObject = product.prices.find(
    (price) => price.currency.symbol === currency
  );
  return currencyObject;
};

// get all products from localStorage and return them as an array
export const getProducts = () => {
  const products = localStorage.getItem("cart");
  return JSON.parse(products);
};

// add product to cart array in localStorage
export const addToCart = (product) => {
  // chech if cart array exists in localStorage
  if (localStorage.getItem("cart")) {
    // if it exists, get it's value and parse it to an array
    const cart = JSON.parse(localStorage.getItem("cart"));
    // check if product already exists in the cart array twice
    const productExists = cart.find((item) => item.product.id === product.id);
    // get the index of the product in the cart array
    const productIndex = cart.indexOf(productExists);
    // if it doesn't exist, add it to the cart array
    if (productExists === undefined) {
      cart.push({
        product,
        count: 1,
        attributes: [],
      });
    }
    // if it does exist, increase the count of the product
    else if (productExists !== undefined) {
      cart[productIndex].count++;
    }
    // set the cart array in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    // if cart array doesn't exist, create it and add the product to it
    const cart = [];
    cart.push({ product: product, count: 1, attributes: [] });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

// get the count the value of the object in the cart array
export const getCartCount = (product) => {
  // check if cart array exists in localStorage
  if (localStorage.getItem("cart")) {
    // if it exists, get it's value and parse it to an array
    const cart = JSON.parse(localStorage.getItem("cart"));
    // check if product already exists in the cart array
    const productExists = cart.find(
      (item) => item.product.id === product.product.id
    );
    // if it doesn't exist, return 0
    if (!productExists) {
      return 0;
    }
    // if it does exist, return the count of the product
    else {
      return productExists.count;
    }
  } else {
    // if cart array doesn't exist, return 0
    return 0;
  }
};

// loop through the products array and add the total price of the total count of each product to the total price
export const getTotal = (products) => {
  let total = 0;
  products.forEach((product) => {
    const pricesArray = product.product.prices;
    const currency = getCurrency(product.product);
    const price = pricesArray.find(
      (price) => price.currency.symbol === currency.currency.symbol
    );
    total += price.amount * product.count;
  });
  return total.toFixed(2);
};

// remove a product from the cart if it exists once in the cart array and reduce the count of the product by 1 if it exists more than once
export const removeFromCart = (product) => {
  // check if cart array exists in localStorage
  if (localStorage.getItem("cart")) {
    // if it exists, get it's value and parse it to an array
    const cart = JSON.parse(localStorage.getItem("cart"));
    // check if product already exists in the cart array
    const productExists = cart.find((item) => item.product.id === product.id);
    // if it doesn't exist, return 0
    if (!productExists) {
      return 0;
    }
    // if it does exist, remove it from the cart array
    else {
      cart.map((item) => {
        if (item.product.id === product.id) {
          if (item.count > 1) {
            item.count--;
          } else {
            cart.splice(cart.indexOf(item), 1);
          }
        }
      });
    }
    // set the cart array in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    // if cart array doesn't exist, return 0
    return 0;
  }
};

// get the total count of the products in the cart array
export const getCartTotalCount = () => {
  // check if cart array exists in localStorage
  if (localStorage.getItem("cart")) {
    // if it exists, get it's value and parse it to an array
    const cart = JSON.parse(localStorage.getItem("cart"));
    // get the total count of the products in the cart array
    let totalCount = 0;
    cart.forEach((item) => {
      totalCount += item.count;
    });
    return totalCount;
  } else {
    // if cart array doesn't exist, return 0
    return 0;
  }
};

// function to switch to the next image in the gallery array of a product and return the index of the new image
export const nextImage = (product, currImageIndex) => {
  const newIndex = product.gallery.indexOf(product.gallery[currImageIndex]) + 1;
  if (newIndex >= product.gallery.length) {
    return 0;
  }
  return newIndex;
};

// function to prev to the next image in the gallery array of a product and return the index of the new image
export const prevImage = (product, currImageIndex) => {
  const newIndex = product.gallery.indexOf(product.gallery[currImageIndex]) - 1;
  if (newIndex < 0) {
    return product.gallery.length - 1;
  }
  return newIndex;
};

// add 21% tax to the total price
export const addTax = (total) => {
  const tax = total * 0.21;
  const totalWithTax = total + tax;
  return parseFloat(totalWithTax).toFixed(2);
};

// save the wanted attribute of a product to localStorage
export const saveAttribute = (product, attributeID, attribute) => {
  // get the product from cart array in localStorage
  const cart = JSON.parse(localStorage.getItem("cart"));
  // get the product from cart array in localStorage
  const productExists = cart.find((item) => item.product.id === product.id);
  // get the index of the product in the cart array
  if (productExists) {
    const productIndex = cart.indexOf(productExists);
    // see if the attribute exists in the product object
    const attributeExists = cart[productIndex].attributes.find(
      (item) => item.id === attributeID
    );
    // check if the attributes arr is empty
    if (cart[productIndex].attributes.length === 0) {
      cart[productIndex].attributes.push({
        id: attributeID,
        value: attribute,
      });
    }
    // if not empty chech if the attribute already exists and update it
    else {
      if (attributeExists) {
        const attributeIndex =
          cart[productIndex].attributes.indexOf(attributeExists);
        // set the attribute value in the product object
        cart[productIndex].attributes[attributeIndex] = {
          id: attributeID,
          value: attribute,
        };
      } else {
        // if the attribute doesn't exist, add it to the product object
        cart[productIndex].attributes.push({
          id: attributeID,
          value: attribute,
        });
      }
    }
  } else {
    // if the product doesn't exist in the cart array add it to the cart array and add the attribute to it
    cart.push({
      product: product,
      count: 1,
      attributes: [{ id: attributeID, value: attribute }],
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

// check if the attribute is the current selected attribute
export const checkAttribute = (product, attributeID, attributeValue) => {
  if (localStorage.getItem("cart")) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const productExists = cart.find((item) => item.product.id === product.id);
    if (productExists) {
      const productIndex = cart.indexOf(productExists);
      const attributes = cart[productIndex].attributes;
      const attributeExists = attributes.find(
        (item) => item.id === attributeID
      );
      if (attributeExists) {
        if (attributeExists.value === attributeValue) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  } else {
    return -1;
  }
};
