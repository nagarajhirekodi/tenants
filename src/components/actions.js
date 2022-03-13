import { DISPLAY_DETAILS } from "./actionTypes";

export const displayDetails = (payload) => {
  return {
    type: DISPLAY_DETAILS,
    payload,
  };
};
