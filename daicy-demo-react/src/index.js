import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyRouter from './Router';
import  {Provider} from "react-redux"
import  store from "./store"
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <Provider store={store}>
      <MyRouter />
  </Provider>,
  document.getElementById('root')
);

