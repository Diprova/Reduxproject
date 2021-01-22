import { GET_PRODUCT, INCREMENT, DECREMENT } from "./types";
import axios from "axios";

export const getProduct = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://powerful-dawn-74322.herokuapp.com/api/product"
    );
    dispatch({ type: GET_PRODUCT, payload: res.data });
  } catch (err) {
    const error = err.response.data.errors;
  }
};

export const increment = (payload) => (dispatch) => {
  dispatch({ type: INCREMENT, payload });
};

export const decrement = (payload) => (dispatch) => {
  dispatch({ type: DECREMENT, payload });
};


