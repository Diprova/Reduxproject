import {
  GET_PRODUCT,
  INCREMENT,
  DECREMENT,
  GET_ITEM,
  ADD_TOCART,
  REMOVE_FROMCART,
  ADD_TOTAL,
  REMOVE_FROMTOTAL,
} from "./types";
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

export const getItem = (id) => (dispatch) => {
  try {
    dispatch({ type: GET_ITEM, payload: id });
  } catch (err) {}
};

export const increment = (itemId) => (dispatch) => {
  try {
    dispatch({
      type: INCREMENT,
      payload: itemId,
    });
  } catch (err) {}
};

export const decrement = (itemId) => (dispatch) => {
  try {
    dispatch({ type: DECREMENT, payload: itemId });
  } catch (err) {}
};

export const addToCart = (id) => (dispatch) => {
  try {
    dispatch({ type: ADD_TOCART, payload: id });
  } catch (error) {}
};

export const removeFromCart = (id) => (dispatch) => {
  try {
    dispatch({ type: REMOVE_FROMCART, payload: id });
  } catch (error) {}
};
export const addTotal = (id) => (dispatch) => {
  try {
    dispatch({ type: ADD_TOTAL, payload: id });
  } catch (error) {}
};

export const removeFromTotal = (id) => (dispatch) => {
  try {
    dispatch({ type: REMOVE_FROMTOTAL, payload: id });
  } catch (error) {}
};
