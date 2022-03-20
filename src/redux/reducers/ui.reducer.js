import { types } from "../types/types";

const INITIAL_STATE = {
  loading: false,
};

export const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.UI_START_LOADING:
      return {
        ...state,
        loading: true,
      };

    case types.UI_FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
