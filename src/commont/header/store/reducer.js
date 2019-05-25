import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_INPUT_FOCUS:
      return state.set('focused', action.value);
    case actionTypes.HANDLE_INPUT_BLUR:
      return state.set('focused', action.value);
    case actionTypes.HANDLE_SEACH_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage,
      });
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', action.value);
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
};
