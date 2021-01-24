import { LOCATION } from "./types";

export const locationWork = (payload) => (dispatch) => {
  dispatch({ type: LOCATION, payload });
};
