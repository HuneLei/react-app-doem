import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topiclist: [],
  articleList: [],
  RecommendList: [],
  page: 0,
  topShow: false,
});

const changeHomeData = (state, action) => {
  return state.merge({
    page: action.page,
    articleList: state.get('articleList').concat(action.data),
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_TOPIC_LIST:
      return state.set('topiclist', action.data);
    case actionTypes.HANDLE_ARTICLE_LIST:
      return changeHomeData(state, action);
    case actionTypes.HANDLE_RECOMMEND_LIST:
      return state.set('RecommendList', action.data);
    case actionTypes.CHANGE_TOP_SHOW:
      return state.set('topShow', action.value);
    default:
      return state;
  }
};
