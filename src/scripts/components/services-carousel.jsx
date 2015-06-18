var React = require("react"),
    Carousel = require("react-bootstrap").Carousel,
    CarouselItem = require("react-bootstrap").CarouselItem,
    HourlyWorkerDetail = require("./service_carousel_pages/hourly-worker-detail"),
    NursemaidDetail = require("./service_carousel_pages/nursemaid-detail"),
    NannyDetail = require("./service_carousel_pages/nanny-detail"),
    ClearingDetail = require("./service_carousel_pages/clearing-detail");

var ServicesCarousel = React.createClass({

  render : function(){
    var hourlyWorkerStyle = {
      background: 'url(assets/images/slider/bg1.jpg)'
    };
    var nursemaidStyle = {
      background: 'url(assets/images/slider/bg2.jpg)'
    };
    var nannyStyle = {
      background: 'url(assets/images/slider/bg3.jpg)'
    };
    var clearingStyle = {
      background: 'url(assets/images/slider/bg4.jpg)'
    };
    return (
      /*jshint ignore:start */
      <Carousel className="carousel-fade home-slider" id="c-slide">
        <CarouselItem style={hourlyWorkerStyle}>
          <HourlyWorkerDetail/>
        </CarouselItem>
        <CarouselItem style={nursemaidStyle}>
          <NursemaidDetail/>
        </CarouselItem>
        <CarouselItem style={nannyStyle}>
          <NannyDetail/>
        </CarouselItem>
        <CarouselItem style={clearingStyle}>
          <ClearingDetail/>
        </CarouselItem>
      </Carousel>
      /*jshint ignore:end */
    );
  }

});

module.exports = ServicesCarousel;
