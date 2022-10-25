import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  DO_FETCH_DATA,
  CLEAR_DATASET,
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
    case DO_FETCH_DATA:
      state = {
        ...state,
        DoFetchData: action.payload,
      };
      break;
    case CLEAR_DATASET:
      state = initialState;
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default stiReport;
