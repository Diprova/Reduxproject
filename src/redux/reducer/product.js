import { GET_PRODUCT, INCREMENT, DECREMENT } from "../action/types";

const initialState = {
  products: [],
  updatedProducts: [],
  product: {},
  cart: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: payload.map((e) => ({ ...e, count: 0, total: 0 })),
        updatedProducts: payload,
      };

    case INCREMENT:
      let payloadItem = state.products[payload.index];
      let selectedItem = {
        ...payloadItem,
        count: payloadItem.count + 1,
        total: (payloadItem.count + 1) * payloadItem.unitPrice,
      };
      let cartIndex = state.cart.findIndex((e) => e._id === payload.id);
      let increamnetProduct =
        cartIndex >= 0
          ? [
              ...state.cart.slice(0, cartIndex),
              { ...selectedItem },
              ...state.cart.slice(cartIndex + 1),
            ]
          : [...state.cart, { ...selectedItem }];

      return {
        ...state,
        products: [
          ...state.products.slice(0, payload.index),
          { ...selectedItem },
          ...state.products.slice(payload.index + 1),
        ],

        cart: increamnetProduct,
      };

    case DECREMENT:
      let dpayloadItem = state.products[payload.index];
      let dSelectedItem = {
        ...dpayloadItem,
        count: dpayloadItem.count - 1,
        total: (dpayloadItem.count - 1) * dpayloadItem.unitPrice,
      };
      let dcartIndex = state.cart.findIndex((e) => e._id === payload.id);
      let decrementCartItem =
        dcartIndex >= 0 && state.cart[dcartIndex].count > 1
          ? [
              ...state.cart.slice(0, dcartIndex),
              { ...dSelectedItem },
              ...state.cart.slice(dcartIndex + 1),
            ]
          : [
              ...state.cart.slice(0, dcartIndex),
              ...state.cart.slice(dcartIndex + 1),
            ];
      return {
        ...state,
        products: [
          ...state.products.slice(0, payload.index),
          { ...dSelectedItem },
          ...state.products.slice(payload.index + 1),
        ],
        cart: decrementCartItem,
      };
      

    default:
      return { ...state };
  }
}
