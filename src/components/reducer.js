import { DISPLAY_DETAILS } from "./actionTypes";

const INITIAL_STATE = {
  details: {},
};

const tenantsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISPLAY_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};

export default tenantsReducer;
