import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Globalstyle } from './style.js';
import { IconFontstyle } from './statics/iconfont/iconfont';

ReactDOM.render(
  <Fragment>
    <App />
    <Globalstyle />
    <IconFontstyle />
  </Fragment>,
  document.getElementById('root'),
);
