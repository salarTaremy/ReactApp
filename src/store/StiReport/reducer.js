import { SET_REPORT, RELOAD } from "./actionTypes"


const initialState = { isLoading: false, Reports: [] }
const stiReport = (state = initialState, action) => {
  switch (action.type) {
    case RELOAD:
      state = { isLoading: true, Reports: [] }
      break
    case SET_REPORT:
      state = action.payload
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default stiReport
