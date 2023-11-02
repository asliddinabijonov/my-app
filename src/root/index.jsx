import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../containers/App";
import { Provider } from "react-redux";
import store from "../redux/store";

const Root = () => {
  return (
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
};

export default Root;
