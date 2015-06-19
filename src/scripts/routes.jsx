var React = require("react"),
    Router = require("react-router"),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute;

var Main = require("./pages/main"),
    Home = require("./pages/home"),
    AboutUs = require("./pages/about-us");

var routes = (
  <Route path="/" handler={Main} name="app">
    <DefaultRoute handler={Home}/>
    <Route handler={AboutUs} name="aboutus" />
  </Route>
);

module.exports = routes;
