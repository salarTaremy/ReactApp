import { SET_ON_CLICK, CLEAR_DATASET, EXEC } from "./actionTypes"


const initialState = { isLoading: false, Reports: [], data: {}, ONC: () => { } }
const stiReport = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_DATASET:
      state = initialState
      break
    case SET_ON_CLICK:
      state = {
        ...state,
        ONC: action.payload,
      }
      break
    case EXEC:
      state = {
        ...state,
        data: state.ONC()
      }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default stiReport
