var c = {
  ROUTE: {
    TRANSITION: "ROUTE:TRANSITION"
  }
};

var methods = {
  routes: {
    transition: function(path, params) {
      this.dispatch(c.ROUTE.TRANSITION, {path: path, params: params});
    }
  }
};

module.exports = {
  methods: methods,
  constants: c
};
