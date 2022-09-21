import { SET_REPORT, RELOAD,REG_DATA ,SET_ON_CLICK } from "./actionTypes"


const initialState = { isLoading: false, Reports: [] ,data:{} }
const stiReport = (state = initialState, action) => {
  switch (action.type) {
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
  console.log (state)
  return state
}

export default stiReport
