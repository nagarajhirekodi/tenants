import { combineReducers } from "redux";

import tenantsReducer from "./components/reducer";

const rootReducer = combineReducers({
  tenants: tenantsReducer,
});

export default rootReducer;
