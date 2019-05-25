import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const toseachlist = data => ({
  type: actionTypes.HANDLE_SEACH_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const tohandleinputfocus = value => ({
  type: actionTypes.HANDLE_INPUT_FOCUS,
  value,
});

export const tohandleInputBlur = value => ({
  type: actionTypes.HANDLE_INPUT_BLUR,
  value,
});

export const mouseEnter = value => ({
  type: actionTypes.MOUSE_ENTER,
  value,
})

export const changePage = page => ({
  type: actionTypes.CHANGE_PAGE,
  page,
})

export const getList = () => {
  return (dispatch) => {
    axios.get('http://yapi.demo.qunar.com/mock/67688/api/seachlist').then((res) => {
      const data = res.data;
      dispatch(toseachlist(data.data))
    }).catch((error) => {
      console.log('error', error)
    })
  }
}