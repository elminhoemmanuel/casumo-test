import { TOGGLE_NEW_MODAL, TOGGLE_EDIT_MODAL, SET_CARD } from "../types"

//actions
export const toggleNew = () => (dispatch) => {
    dispatch({ type: TOGGLE_NEW_MODAL })
}

export const toggleEdit = () => (dispatch) => {
    dispatch({ type: TOGGLE_EDIT_MODAL })
}

export const setCard = (card) => (dispatch) => {
    dispatch({ type: SET_CARD, payload:card })
}