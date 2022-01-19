import { UNLOCK_CLIMAT_GAME } from "../actions"

const initialState = false

export default function climatReducer(state = initialState, action) {
  let nextState

  switch (action.type) {
    case UNLOCK_CLIMAT_GAME:
      nextState = action.payload
      return nextState
    default:
      return state
  }
}