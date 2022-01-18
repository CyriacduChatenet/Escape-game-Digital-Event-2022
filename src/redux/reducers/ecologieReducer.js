import {UNLOCK_ECOLOGIE_GAME} from "../actions"

const initialState = false

export default function ecologieReducer(state = initialState, action){
    let nextState

    switch (action.type) {
      case UNLOCK_ECOLOGIE_GAME:
          nextState = action.payload
          return nextState
      default:
        return state
    }
  }