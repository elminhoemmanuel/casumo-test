import {  TOGGLE_NEW_MODAL, TOGGLE_EDIT_MODAL, SET_CARD } from "../types";

const initialState = {
  showNew:false,
  showEdit:false,
  card:{}
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NEW_MODAL:
      return {
        ...state,
        showNew: !state.showNew
      };
    case TOGGLE_EDIT_MODAL:
      return {
        ...state,
        showEdit: !state.showEdit
      };
    case SET_CARD:
      return {
        ...state,
        card: action.payload
      };
    default:
      return state;
  }
};