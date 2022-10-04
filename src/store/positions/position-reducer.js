import { ADD_POSITTIONS } from "./position-actions";

export const positionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POSITTIONS: {
      return action.positions;
    }
    default: {
      return state;
    }
  }
};
