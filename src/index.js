import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import AlertTemplate from './AlertTemplate/AlertTemplate'
import { positions, Provider as AlertProvider } from 'react-alert'
import './index.css';
import store from './redux/Store';
import App from './App';
import reportWebVitals from './reportWebVitals';

const options = {
  timeout: 2000,
  position: positions.BOTTOM_CENTER,


};

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
