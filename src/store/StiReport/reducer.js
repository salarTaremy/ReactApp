import {
  SET_ON_CLICK,
  CLEAR_DATASET,
  EXEC,
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  DO_FETCH_DATA,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  Reports: [],
  data: null,
  ONC: () => {},
  DoFetchData: () => {},
  isFetchingData: false,
};

const stiReport = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      state = {
        ...state,
        isFetchingData: true,
      };
      break;
    case FETCH_DATA_SUCCESS:
      state = {
        ...state,
        isFetchingData: false,
        data: action.payload,
      };
      break;
    case FETCH_DATA_FAILURE:
      state = {
        ...state,
        isFetchingData: false,
        data:null
      };
      break;
    case DO_FETCH_DATA:
      state = {
        ...state,
        DoFetchData: action.payload,
      };
      break;
    case CLEAR_DATASET:
      state = initialState;
      break;
    case SET_ON_CLICK:
      state = {
        ...state,
        ONC: action.payload,
      };
      break;
    case EXEC:
      state = {
        ...state,
        data: state.ONC(),
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default stiReport;
