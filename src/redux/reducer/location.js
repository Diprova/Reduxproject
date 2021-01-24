import { LOCATION } from "../action/types";

const initialState = {
  location: "Select City",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOCATION:
      return {
        ...state,
        location: payload.location,
      };

    default:
      return { ...state };
  }
}
