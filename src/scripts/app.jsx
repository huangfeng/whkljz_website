var React = require("react"),
    Router = require("react-router"),
    Fluxxor = require("fluxxor");

var actions = require("./actions.jsx"),
    routes = require("./routes.jsx"),
    RouteStore = require("./stores/RouteStore.jsx");

var router = Router.create({
  routes: routes,
  location: Router.HistoryLocation
});

var stores = {
  route: new RouteStore({router: router})
};

var flux = new Fluxxor.Flux(stores, actions.methods);
flux.on("dispatch", function(type, payload) {
  console.log("Dispatch:", type, payload);
});

router.run(function(Handler) {
  React.render(
    <Handler flux={flux} />,
    document.getElementById("app-wrapper")
  );
});
