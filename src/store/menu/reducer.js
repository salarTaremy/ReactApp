import * as actionTypes from "./actionTypes"

const INIT_STATE = {
  menus: [],
  isLoading : false,
  error:{}

}

const Menus = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_MENUS:
      return {
        ...state,
        isLoading :true
      }
      case actionTypes.GET_MENUS_SUCCESS:
        return {
          ...state,
          isLoading :false,
          menus: action.payload,
        }
    case actionTypes.GET_MENUS_FAILURE:
      console.error( action.payload)
      return {
        ...state,
        isLoading :false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default Menus
