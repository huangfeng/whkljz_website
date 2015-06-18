var React = require("react"),
    Router = require("react-router");

var TopArea = React.createClass({

  render: function() {
    return (
    /*jshint ignore:start*/
    <section className="toparea">
    <div className="container">
      <div className="row">
        <div className="col-md-6 top-text pull-left animated fadeInLeft">
          <i className="glyphicon glyphicon-phone-alt"></i> 光谷店服务热线：87791032 <span className="separator"></span><i className="glyphicon glyphicon-phone-alt"></i> 街道口店服务热线：87748868
        </div>
        <div className="col-md-6 text-right animated fadeInRight">
          <div className="social-icons">
            <a className="icon fa fa-weibo" href="#"></a>
            <a className="icon fa fa-weixin" href="#"></a>
            <a className="icon fa fa-qq" href="#"></a>
          </div>
        </div>
      </div>
    </div>
    </section>
    /*jshint ignore:end*/
    );
  }

});

module.exports = TopArea;
