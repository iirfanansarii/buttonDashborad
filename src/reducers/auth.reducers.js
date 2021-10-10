import { changeBgColor } from '../actions/constants';

const initState = {
  newBgColor: '',
  loading: false,
  error: null,
};

const state = (state = initState, action) => {
  switch (action.type) {
    case changeBgColor.CHANGE_BG_COLOR_REQUEST: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case changeBgColor.CHANGE_BG_COLOR_SUCCESS: {
      state = {
        ...state,
        loading: false,
        newBgColor: action.payload.bgColor,
      };
      break;
    }
    case changeBgColor.CHANGE_BG_COLOR_FAIL: {
      state = {
        ...state,
        loading: false,
        message: action.payload.error,
      };
      break;
    }
    default:
      break;
  }
  return state;
};

export default state;

/* 
Reducer return the state of the application
*/
