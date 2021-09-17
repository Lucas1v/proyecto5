import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock.jsx';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./store.js";
import './App.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <Clock />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
