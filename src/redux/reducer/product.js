import {
  GET_PRODUCT,
  INCREMENT,
  DECREMENT,
  GET_ITEM,
  ADD_TOCART,
  REMOVE_FROMCART,
  ADD_TOTAL,
  REMOVE_FROMTOTAL,
} from "../action/types";

const initialState = {
  products: [],
  updatedProducts: [],
  productIndex: null,
  cart: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: payload,
        updatedProducts: payload,
      };
    case GET_ITEM:
      const id = payload;
      const productIndex = state.updatedProducts.findIndex(
        (ele) => ele._id === id
      );
      return {
        ...state,
        productIndex: productIndex,
      };

    case INCREMENT:
      const product = state.updatedProducts[state.productIndex];

      if (product.count) {
        product.count = product.count + 1;
      } else {
        product.count = 1;
      }
      const newUpdatedProducts = [
        ...state.updatedProducts.slice(0, state.productIndex),
        product,
        ...state.updatedProducts.slice(state.productIndex + 1),
      ];

      return {
        ...state,
        updatedProducts: JSON.parse(JSON.stringify(newUpdatedProducts)),
      };
    case DECREMENT:
      const sample = state.updatedProducts[state.productIndex];
      if (sample.count) {
        sample.count = sample.count - 1;
      } else {
        sample.count = 0;
      }
      const newUpdatedSamples = [
        ...state.updatedProducts.slice(0, state.productIndex),
        sample,
        ...state.updatedProducts.slice(state.productIndex + 1),
      ];
      return {
        ...state,
        updatedProducts: JSON.parse(JSON.stringify(newUpdatedSamples)),
      };
    case ADD_TOCART:
      const item = state.updatedProducts[state.productIndex];
      const cartPush = state.cart;
        cartPush.push(item);
      return {
        ...state,
        cart: cartPush,
      };
    case REMOVE_FROMCART:
      const cartItem = state.updatedProducts[state.productIndex];
      const cartPop = state.cart;
      cartPop.pop(cartItem);
      return {
        ...state,
        cart: cartPop,
      };
    case ADD_TOTAL:
      const cartPriceItem = state.updatedProducts[state.productIndex];
      cartPriceItem.total = cartPriceItem.count * cartPriceItem.unitPrice;
      const newCartPriceItem = [
        ...state.updatedProducts.slice(0, state.productIndex),
        cartPriceItem,
        ...state.updatedProducts.slice(state.productIndex + 1),
      ];
      console.log(newCartPriceItem);
      return {
        ...state,
        updatedProducts: JSON.parse(JSON.stringify(newCartPriceItem)),
      };
    case REMOVE_FROMTOTAL:
      const cartReducePrice = state.updatedProducts[state.productIndex];
      cartReducePrice.total = cartReducePrice.count * cartReducePrice.unitPrice;
      const newCartReducePriceItem = [
        ...state.updatedProducts.slice(0, state.productIndex),
        cartReducePrice,
        ...state.updatedProducts.slice(state.productIndex + 1),
      ];
      console.log(newCartReducePriceItem)
      return {
        ...state,
        updatedProducts: JSON.parse(JSON.stringify(newCartReducePriceItem)),
      };
    default:
      return { ...state };
  }
}
