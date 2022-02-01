import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

/* const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

store.dispatch(getUsers());
store.dispatch(getTweets());
 */
ReactDOM.render(
  //<Provider store={store}>
    <App />,
  //</Provider>,
  document.getElementById("root")
);
