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

      // showItem: (item) => {
      //   const showitem = this.state.updatedProducts.find(
      //     (ele) => ele.productName === item
      //   );
      //   this.setState({ item: showitem.productName });
      // },

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
