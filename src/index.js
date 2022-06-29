import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./Css/index.css";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import ProductReducer from "./components/store/product-reducer";
import Rolesreducer from "./components/store/roles-reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rootReducer = combineReducers({
  lr: Rolesreducer,
  pr: ProductReducer,
});

const store = createStore(rootReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
