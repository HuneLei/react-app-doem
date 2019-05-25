import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Detail extends PureComponent {
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
  render() {
    const { title, conter } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html: conter}} />
      </DetailWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.getIn(['detail', 'title']),
    conter: state.getIn(['detail', 'conter'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDetail(id) {
      dispatch(actionCreators.getdetail(id))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Detail));
