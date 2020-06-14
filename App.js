import * as React from "react";

import { Provider } from "react-redux";
import rootSaga from "./src/rootSaga";
import configureStore from "./src/rootStore";
import Routes from "./src/routes";

const { store, runSaga } = configureStore({});

runSaga(rootSaga);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
