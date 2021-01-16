import { GET_CATEGORY } from "./types";
import axios from "axios";

export const getCategory = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://powerful-dawn-74322.herokuapp.com/api/category"
    );
    dispatch({ type: GET_CATEGORY, payload: res.data });
  } catch (err) {
    const error = err.response.data.errors;
    console.log(error);
  }
};
