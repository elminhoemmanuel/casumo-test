import {  TOGGLE_NEW_MODAL, TOGGLE_EDIT_MODAL, SET_CARD, ADD_CARD } from "../types";
import { dummyCards } from "../../constants/dummy"

const initialState = {
  showNew:false,
  showEdit:false,
  card:{},
  cardsList:[]
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
    case ADD_CARD:
        console.log(action.payload)
        console.log(state.cardsList)
        console.log(dummyCards)
    //   return {
    //     ...state,
    //     cardsList: 
    //   };
    default:
      return state;
  }
};