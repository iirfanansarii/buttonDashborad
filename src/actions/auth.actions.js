import { changeBgColor } from './constants';

export const changeBackgroundColor = (color) => {
  return (dispatch) => {
    dispatch({
      type: changeBgColor.CHANGE_BG_COLOR_REQUEST,
    });
    dispatch({
      type: changeBgColor.CHANGE_BG_COLOR_SUCCESS,
      payload: {
        bgColor: color,
      },
    });
    dispatch({
      type: changeBgColor.CHANGE_BG_COLOR_FAIL,
      payload: {
        error: 'Backgroudn color not changed',
      },
    });
  };
};
