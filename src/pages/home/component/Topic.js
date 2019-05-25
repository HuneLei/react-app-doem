import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style';
import { connect } from 'react-redux';

class Topic extends Component {
  render() {
    const {topiclist} = this.props;
    return (
      <TopicWrapper> 
        {topiclist.map(item => {
          return (
            <TopicItem key={item.get('id')}>
              <img 
                alt=''
                className="topic-pic"
                src={item.get('imgUrl')} />
              {item.get('title')}
            </TopicItem>
          )
        })}
        
      </TopicWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    topiclist: state.getIn(['home', 'topiclist']),
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Topic)