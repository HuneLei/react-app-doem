import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTilte,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from './style';

class Header extends PureComponent {
  render() {
    const {
      focused,
      handleInputFocus,
      handleInputBlur,
      list,
      login,
      loginOut,
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left action">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {login ? (
            <NavItem className="right" onClick={loginOut}>退出</NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={focused} classNames="slide">
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe62d;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className="writting">
              <i className="iconfont">&#xe624;</i>
              写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
  getListArea() {
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      hanldMouseEnter,
      hanldMouseLeave,
      handleChangePage,
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>,
          );
        }
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={hanldMouseEnter}
          onMouseLeave={hanldMouseLeave}
        >
          <SearchInfoTilte>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <i
                ref={icon => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe635;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTilte>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login']),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.tohandleinputfocus(true));
    },
    handleInputBlur() {
      dispatch(actionCreators.tohandleInputBlur(false));
    },
    hanldMouseLeave() {
      dispatch(actionCreators.mouseEnter(false));
    },
    hanldMouseEnter() {
      dispatch(actionCreators.mouseEnter(true));
    },
    loginOut() {
      dispatch(loginActionCreators.logout());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngin = spin.style.transform.replace(/[^0-9]/gi, '');
      if (originAngin) {
        originAngin = parseInt(originAngin, 10);
      } else {
        originAngin = 0;
      }
      spin.style.transform = `rotate(${originAngin + 360}deg)`;
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
