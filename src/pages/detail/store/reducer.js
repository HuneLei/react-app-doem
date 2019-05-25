import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  title: '',
  conter: '',
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_GET_DETAIL:
      return state.merge({
        title: action.data.get('title'),
        conter: action.data.get('conter'),
      });
    default:
      return state;
  }
};
