import React, { Fragment } from 'react';
import './App.css';
import Header from './commont/header';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/write" exact component={Write} />
          <Route path="/detail/:id" exact component={Detail} />
          {/* <Route path="/detail" exact component={Detail} /> */}
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
}

export default App;
