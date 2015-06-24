var React = require("react"),
    ServiceBox = require("../components/wrap_semibox_pages/service-box"),
    Customers = require("../components/wrap_semibox_pages/customers"),
    SemiboxEnd = require("../components/wrap_semibox_pages/semibox-end"),
    Link = require("react-router").Link;

var Services = React.createClass({

  getInitialState() {
    return {
      services: {
        "hourlyWorker": {
          "title": "钟点工服务",
          "info": (
            <h1 className="smalltitle"><br/><span>钟点工服务简介</span></h1>
          )
        },
        "nursemaid": {
          "title": "育婴师、月嫂服务",
          "info": (
            <h1 className="smalltitle"><br/><span>育婴师服务简介</span></h1>
          )
        },
        "nanny": {
          "title": "家庭保姆服务",
          "info": (
            <h1 className="smalltitle"><br/><span>家庭保姆服务简介</span></h1>
          )
        },
        "clearing": {
          "title": "开荒保洁服务",
          "info": (
            <h1 className="smalltitle"><br/><span>开荒保洁服务简介</span></h1>
          )
        }
      }
    }
  },

  componentDidMount : function() {
    this.props.setMenuType && this.props.setMenuType("services");
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
          <ServiceBox/>
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
    console.log(serviceItem);
    return (
      <section className="container">
        <div className="col-md-12 animated anim-slide notransition">
          <div className="text-center">
            <h2>{serviceItem.title}</h2>
            <span className="meta bottomspace30">By
              <Link to="/" title="武汉市洪山区康乐家政管理服务中心" rel="author">武汉市洪山区康乐家政管理服务中心</Link>
              <span className="bullet">•</span> 2008-8-1
            </span>
          </div>
          <div className="row">
            <div className="col-md-12">
            {serviceItem.info}
            </div>
          </div>
        </div>
      </section>
    );
  }

});

module.exports = Services;
