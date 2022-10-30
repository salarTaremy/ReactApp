import * as actionTypes from "./actionTypes"

export const getMenus = () => ({
  type: actionTypes.GET_MENUS,
})

export const getCMenusSuccess = menu => ({
  type: actionTypes.GET_MENUS_SUCCESS,
  payload: menu,
})

export const getMenusFailure = error => ({
  type: actionTypes.GET_MENUS_FAILURE,
  payload: error,
})

