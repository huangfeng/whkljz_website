var React = require("react"),
    ServicesCarousel = require("../components/services-carousel"),
    HomeWrapSemibox = require("../components/home-wrap-semibox");

var Home = React.createClass({

  render : function() {
    return (
      <section>
      <ServicesCarousel/>
      <HomeWrapSemibox/>
      </section>
    );
  }

});

module.exports = Home;
