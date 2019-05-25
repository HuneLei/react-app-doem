import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const toTopiclist = data => ({
  type: actionTypes.HANDLE_TOPIC_LIST,
  data: fromJS(data.topiclist),
});

export const toArticleList = (data, page) => ({
  type: actionTypes.HANDLE_ARTICLE_LIST,
  data: fromJS(data.articleList),
  page,
});

export const toRecommendList = data => ({
  type: actionTypes.HANDLE_RECOMMEND_LIST,
  data: fromJS(data.RecommendList),
});

export const changeTopShow = value => ({
  type: actionTypes.CHANGE_TOP_SHOW,
  value,
});

export const getTopiclist = () => {
  return dispatch => {
    axios
      .get('http://yapi.demo.qunar.com/mock/67688/api/gettopiclist')
      .then(res => {
        const data = res.data;
        dispatch(toTopiclist(data.data));
      })
      .catch(error => {
        console.log('error', error);
      });
  };
};

export const getArticleList = (page = 0) => {
  return dispatch => {
    axios
      .get(`http://yapi.demo.qunar.com/mock/67688/api/getarticleList?page=${page}`)
      .then(res => {
        const data = res.data;
        dispatch(toArticleList(data.data, page + 1));
      })
      .catch(error => {
        console.log('error', error);
      });
  };
};

export const getRecommendList = () => {
  return dispatch => {
    axios
      .get('http://yapi.demo.qunar.com/mock/67688/api/getRecommendList')
      .then(res => {
        const data = res.data;
        dispatch(toRecommendList(data.data));
      })
      .catch(error => {
        console.log('error', error);
      });
  };
};
