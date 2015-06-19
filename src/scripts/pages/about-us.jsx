var React = require("react"),
    SemiboxEnd = require("../components/wrap_semibox_pages/semibox-end");

var AboutUs = React.createClass({

  render : function() {
    return (
      <section>
        <section className="pageheader-default text-center">
      	<div className="semitransparentbg">
      		<h1 className="animated fadeInLeftBig notransition">关于我们</h1>
      		<p className="animated fadeInRightBig  notransition container page-description">
      			 武汉市洪山区康乐家政管理服务中心简介及人员介绍
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

module.exports = AboutUs;
