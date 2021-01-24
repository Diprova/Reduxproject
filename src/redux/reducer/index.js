import { combineReducers } from "redux";
import category from "./category";
import product from "./product";
import location from "./location";
import auth from "./auth";
import alert from "./alert";

export default combineReducers({ category, product, location, auth, alert });
