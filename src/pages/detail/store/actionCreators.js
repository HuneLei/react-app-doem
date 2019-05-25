import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const toGetdetail = (data) => ({
  type: actionTypes.HANDLE_GET_DETAIL,
  data: fromJS(data),
})

export const getdetail = (id) => {
  return dispatch => {
    axios
      .get('http://yapi.demo.qunar.com/mock/67688/api/getdetail?id=' + id)
      .then(res => {
        const data = res.data;
        dispatch(toGetdetail(data.data));
      })
      .catch(error => {
        console.log('error', error);
      });
  };
};
