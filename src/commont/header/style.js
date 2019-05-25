import styled from 'styled-components';
import headerLogo from '../../statics/jianshulogo.png';

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`;

export const Logo = styled.div`
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  position: absolute;
  background: url(${headerLogo});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  margin: 0 auto;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.action {
    color: #ea6f5a;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索',
})`
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  margin-top: 9px;
  margin-left: 20px;
  background-color: #eee;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  color: #666;
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  line-height: 38px;
  border-radius: 19px;
  margin-right: 20px;
  padding: 0 20px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6146;
  }
  &.writting {
    color: #fff;
    background-color: #ec6146;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      background-color: #777;
      color: #fff;
    }
  }
`;

export const SearchInfo = styled.div`
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  position: absolute;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

export const SearchInfoTilte = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 6px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`;

export const SearchInfoItem = styled.a`
  line-height: 20px;
  padding: 0 5px;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  display: block;
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;
