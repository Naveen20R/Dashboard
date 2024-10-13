import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/MainRoute.jsx';
import { Provider } from "react-redux";
import store from './redux/store';
// import { HelmetProvider } from 'react-helmet-async';
// import 'react-toastify/dist/ReactToastify.css';
// import { Provider } from 'react-redux';
// import store from 'redux/store.js';
// import store from '/src/redux/store.js'
// import sto


const App = () => (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </>
);

export default App;
