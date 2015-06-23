var React = require("react"),
    AddressMap = require("../components/wrap_semibox_pages/address-map"),
    ContactDetail = require("../components/wrap_semibox_pages/contact-detail"),
    SemiboxEnd = require("../components/wrap_semibox_pages/semibox-end");

var ContactUs = React.createClass({

  render : function() {
    return (
      <section>
        <section className="pageheader-default text-center">
        <div className="semitransparentbg">
          <h1 className="animated fadeInLeftBig notransition">联系我们</h1>
          <p className="animated fadeInRightBig  notransition container page-description">
             武汉市洪山区康乐家政管理服务中心详细地址及联系方式
          </p>
        </div>
        </section>
        <div className="wrapsemibox">
          <div className="semiboxshadow text-center">
            <img src="assets/images/shp.png" className="img-responsive" alt="" />
          </div>
          <AddressMap/>
          <ContactDetail/>
          <SemiboxEnd/>
        </div>
      </section>
    );
  }

});

module.exports = ContactUs;
