import { MISSIONS_UPDATE_ACTION } from "../actions"

const initialState = [
  { name: "Ecologie", completed: false },
  { name: "Répartition des ressources", completed: false },
  { name: "Dérèglement climatique", completed: false },
  { name: "Surconsommation", completed: false },
  { name: "Extinction des animaux", completed: false },
  { name: "Désinformation", completed: false },
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