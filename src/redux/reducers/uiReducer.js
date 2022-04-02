import { types } from '../types';

const initialState = {
  openModal: true
}

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...state,
        openModal: true,
      };

    case types.uiCloseModal:
      return {
        ...state,
        openModal: false,
      };

    default:
      return state;
  }
};