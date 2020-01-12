import React from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/UserManagement/Login";
import EspaceClient from "./components/EspaceClient/EspaceClient";
import { Provider } from "react-redux";
import store from "./store";
import ListComptes from "./components/EspaceClient/ListComptes/ListComptes";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/EspaceClient" component={EspaceClient} />
      </Router>
    </Provider>
  );
}
export default App;
