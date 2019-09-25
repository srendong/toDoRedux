import React from "react";
import ReactDOM from "react-dom";
//Redux
import store from "./Redux/store";
import { Provider } from "react-redux";
//React-router-dom
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
//Bootstrap
import "bootstrap/dist/css/bootstrap.css";
//Components
import Notes from "./Components/Notes/Notes";
import Details from "./Components/Details/Details";
import Favorites from "./Components/Favorites/Favorites";
//scss
import "./Styles/Root.scss";

const Root = (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/notes" component={Notes} />
        <Route path="/details/:itemId" component={Details} />
        <Route path="/favorites" component={Favorites} />
        <Redirect from="/" to="/notes" />
      </Switch>
    </HashRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById("root"));
