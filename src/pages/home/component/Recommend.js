import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends PureComponent {
  render() {
    const { RecommendList } = this.props;
    return (
      <RecommendWrapper>
        {RecommendList.map(item => {
          return (
            <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
          );
        })}
      </RecommendWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    RecommendList: state.getIn(['home', 'RecommendList']),
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recommend);
