import { SET_REPORT, RELOAD,REG_DATA ,SET_ON_CLICK,CLEAR_DATASET } from "./actionTypes"


const initialState = { isLoading: false, Reports: [] ,data:{} ,ONC:()=>{}}
const stiReport = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_DATASET:
      state = initialState
      break
    case RELOAD:
      state = {...state ,isLoading: true, Reports: [],data:{} }
      break
    case SET_REPORT:
      state= {
        ...state,
        isLoading :false,
        Reports: action.payload,
      }
      break
    case REG_DATA:
      state= {
        ...state,
        data: action.payload,
      }
      break
      case SET_ON_CLICK:
        state= {
          ...state,
          ONC: action.payload,
        }
        break
    default:
      state = { ...state }
      break
  }
  return state
}

export default stiReport
