var React = require("react"),
    ServicesCarousel = require("../components/services-carousel"),
    HomeWrapSemibox = require("../components/home-wrap-semibox");

var Home = React.createClass({

  componentDidMount : function() {
    this.props.setMenuType && this.props.setMenuType("home");
  },

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
