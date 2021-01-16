import React, { Children, Component, useContext } from "react";
import Rest from "../Utility/restapi";


export const AppContext = React.createContext();

const initialState = {
  user: {},
  category: [],
  updatedCategory: [],
  cart: [],
  products: [],
  updatedProducts: [],
  count: 0,
  total: 0,
  item: "",
  isAuthenticated: false,
};

export class ContextApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      location: "Select city",
       

     

      showItem: (item) => {
        const showitem = this.state.updatedProducts.find(
          (ele) => ele.productName === item
        );
        this.setState({ item: showitem.productName });
      },

      

      
      addToCart: (id) => {
        if (this.state.updatedProducts) {
          const productIndex = this.state.getItem(id);
          const product = this.state.updatedProducts[productIndex];
          let cart = [...this.state.cart];
          if (product.count === 1) {
            cart.push(product);
            this.setState({ cart });
          }
        }
      },
      removeFromCart: (id) => {
        if (this.state.updatedProducts) {
          const productIndex = this.state.getItem(id);
          const product = this.state.updatedProducts[productIndex];
          const cart = this.state.cart;
          cart.pop(product);
          this.setState({ cart: cart });
        }
      },
      addTotal: (id) => {
        if (this.state.updatedProducts) {
          const productIndex = this.state.getItem(id);
          const product = this.state.updatedProducts[productIndex];
          product.total = product.count * product.unitPrice;

          this.setState({
            updatedProducts: [
              ...this.state.updatedProducts.slice(0, productIndex),
              product,
              ...this.state.updatedProducts.slice(productIndex + 1),
            ],
          });
        }
      },
      reduceFromTotal: (id) => {
        if (this.state.updatedProducts) {
          const productIndex = this.state.getItem(id);
          const product = this.state.updatedProducts[productIndex];
          product.total = product.count * product.unitPrice;

          this.setState({
            updatedProducts: [
              ...this.state.updatedProducts.slice(0, productIndex),
              product,
              ...this.state.updatedProducts.slice(productIndex + 1),
            ],
          });
        }
      },
      login: async (email, password) => {
        let value = await Rest.post("/api/auth", { email, password });
        localStorage.setItem("token", value.data.token);
        console.log(localStorage.token);
      },
      loadUser: async () => {
        if (localStorage.getItem("token")) {
          let value = await Rest.getAuthUser("/api/auth", localStorage.token);
          console.log(value, "loaduser");
          this.setState({ user: { ...value.data }, isAuthenticated: true });
        }
      },
    };
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;
