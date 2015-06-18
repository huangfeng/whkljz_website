var React = require("react"),
    IntroNote = require("./wrap_semibox_pages/intro-note"),
    ServiceBox = require("./wrap_semibox_pages/service-box"),
    HomePortfolio = require("./wrap_semibox_pages/home-portfolio"),
    HomeFeatures = require("./wrap_semibox_pages/home-features"),
    RecentProjects = require("./wrap_semibox_pages/recent-projects"),
    SemiboxEnd = require("./wrap_semibox_pages/semibox-end");

var HomeWrapSemibox = React.createClass({

  render : function() {
    return (
      <div className="wrapsemibox">
        <div className="semiboxshadow text-center">
    			<img src="assets/images/shp.png" className="img-responsive" alt="" />
    		</div>
        <IntroNote/>
        <ServiceBox/>
        <HomePortfolio/>
        <HomeFeatures/>
        <RecentProjects/>
        <SemiboxEnd/>
      </div>
    );
  }

});

module.exports = HomeWrapSemibox;
