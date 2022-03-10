import {  TOGGLE_NEW_MODAL, TOGGLE_EDIT_MODAL, SET_CARD, ADD_CARD } from "../types";
// import { dummyCards } from "../../constants/dummy"

const initialState = {
  showNew:false,
  showEdit:false,
  card:{},
  cardsList:[
  {
      type:"mastercard",
      cvc:"009",
      expiry:"08/21",
      cardNumber:"5532 1234 5545 8014",
      name:"John Cabruci",
  },
  {
      type:"visa",
      cvc:"129",
      expiry:"12/24",
      cardNumber:"0923 1231 8892 2381",
      name:"John Cabruci",
  },

]
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
        console.log(state)
        
      return {
        ...state,
        cardsList: [...state.cardsList, action.payload]
      };
    default:
      return state;
  }
};