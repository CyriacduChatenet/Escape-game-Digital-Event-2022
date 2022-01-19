import { MISSIONS_UPDATE_ACTION } from "../actions"

const initialState = [
  { name: "ecologie", completed: false },
  { name: "partage", completed: false },
  { name: "climat", completed: false },
  { name: "surconsommation", completed: false },
]

export default function userReducer(state = initialState, action) {
  let nextState

  switch (action.type) {
    case MISSIONS_UPDATE_ACTION:
      nextState = [...action.payload]
      return nextState
    default:
      return state
  }
}