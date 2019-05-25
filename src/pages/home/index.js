import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import List from './component/List';
import Recommend from './component/Recommend';
import Topic from './component/Topic';
import Writer from './component/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends PureComponent {
  componentDidMount() {
    this.props.gettopiclist();
    this.props.getarticleList();
    this.props.getRecommendList();
    this.bindEvents();
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeTopShow);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeTopShow);
  }
  handleScrollTop() {
    window.scroll(0, 0);
  }
  render() {
    const { topShow } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            alt=""
            src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {topShow ? (
          <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    topiclist: state.getIn(['home', 'topiclist']),
    topShow: state.getIn(['home', 'topShow']),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gettopiclist() {
      dispatch(actionCreators.getTopiclist());
    },
    getarticleList() {
      dispatch(actionCreators.getArticleList());
    },
    getRecommendList() {
      dispatch(actionCreators.getRecommendList());
    },
    changeTopShow() {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 200) {
        dispatch(actionCreators.changeTopShow(true));
      } else {
        dispatch(actionCreators.changeTopShow(false));
      }
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
