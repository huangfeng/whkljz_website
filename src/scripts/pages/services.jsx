var React = require("react"),
    SemiboxEnd = require("../components/wrap_semibox_pages/semibox-end");

var Services = React.createClass({
  componentWillMount : function() {
    this.props.setMenuType && this.props.setMenuType("services");
  },

  render : function() {
    return (
      <section>
        <section className="pageheader-default text-center">
        <div className="semitransparentbg">
          <h1 className="animated fadeInLeftBig notransition">服务类型</h1>
          <p className="animated fadeInRightBig  notransition container page-description">
             武汉市洪山区康乐家政管理服务中心专业致力于高级家政管理服务、企事业单位公共保洁、家庭钟点工服务。
          </p>
        </div>
        </section>
        <div className="wrapsemibox">
          <div className="semiboxshadow text-center">
            <img src="assets/images/shp.png" className="img-responsive" alt="" />
          </div>
          <SemiboxEnd/>
        </div>
      </section>
    );
  }

});

module.exports = Services;
