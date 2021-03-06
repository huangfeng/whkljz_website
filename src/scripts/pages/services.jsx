var React = require("react"),
    ServiceBox = require("../components/wrap_semibox_pages/service-box"),
    Customers = require("../components/wrap_semibox_pages/customers"),
    SemiboxEnd = require("../components/wrap_semibox_pages/semibox-end"),
    HourlyWorker = require("../components/services/hourly-worker"),
    Nursemaid = require("../components/services/nursemaid"),
    Nanny = require("../components/services/nanny"),
    Clearing = require("../components/services/clearing"),
    Link = require("react-router").Link;

var Services = React.createClass({

  getInitialState() {
    return {
      services: {
        "hourlyWorker": {
          "title": "钟点工服务",
          "info": <HourlyWorker/>
        },
        "nursemaid": {
          "title": "育婴师、月嫂服务",
          "info": <Nursemaid/>
        },
        "nanny": {
          "title": "家庭保姆服务",
          "info": <Nanny/>
        },
        "clearing": {
          "title": "开荒保洁服务",
          "info": <Clearing/>
        }
      }
    }
  },

  componentDidMount : function() {
    this.props.setMenuType && this.props.setMenuType("services");
    var serviceType = this.props.params.serviceType;
    this.refs.serviceBox.setActiveType(serviceType);
  },

  componentWillUpdate : function(nextProps, nextState) {
    var serviceType = nextProps.params.serviceType;
    this.refs.serviceBox.setActiveType(serviceType);
  },

  render : function() {
    var serviceItem = this.renderServiceItem();
    return (
      <section>
        <section className="pageheader-default text-center">
        <div className="semitransparentbg">
          <h1 className="animated fadeInLeftBig notransition">服务项目</h1>
          <p className="animated fadeInRightBig  notransition container page-description">
             武汉市洪山区康乐家政管理服务中心专业致力于高级家政管理服务、企事业单位公共保洁、家庭钟点工服务。
          </p>
        </div>
        </section>
        <div className="wrapsemibox">
          <div className="semiboxshadow text-center">
            <img src="assets/images/shp.png" className="img-responsive" alt="" />
          </div>
          {serviceItem}
          <ServiceBox ref="serviceBox"/>
          <Customers/>
          <SemiboxEnd/>
        </div>
      </section>
    );
  },

  renderServiceItem: function() {
    var serviceType = this.props.params.serviceType;
    if (!serviceType || serviceType == "") {
      return (<div></div>);
    }
    var serviceItem = this.state.services[serviceType];
    return (
      <section className="container">
        <div className="col-md-12 animated anim-slide notransition">
          <div className="text-center">
            <h2>{serviceItem.title}</h2>
            <span className="meta bottomspace30">By
              <Link to="/" title="武汉市洪山区康乐家政管理服务中心" rel="author"> 武汉市洪山区康乐家政管理服务中心 </Link>
              <span className="bullet">•</span> 2014-1-1
            </span>
          </div>
          <div className="row">
            <div className="col-md-12">
            {serviceItem.info}
            <hr/>
            </div>
          </div>
        </div>
      </section>
    );
  }

});

module.exports = Services;
