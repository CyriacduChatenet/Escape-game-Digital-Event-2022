import { USER_UPDATE_ACTION } from "../actions"

const initialState = {}

export default function userReducer(state = initialState, action) {
  let nextState

  switch (action.type) {
    case USER_UPDATE_ACTION:
      nextState = {
        ...state,
        user: action.payload.user
      }
      return nextState
    default:
      return state
  }
}