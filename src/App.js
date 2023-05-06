import "./App.css";

import React, { Component } from "react";
import store from "./Components/Redux/store";
import { Provider } from "react-redux";
import ClassCounter from "./Components/ClassCounter";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ClassCounter />
      </Provider>
    );
  }
}

export default App;
