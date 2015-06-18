var React = require("react");

var NursemaidDetail = React.createClass({

  render : function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center fadeInLeftBig scaleInv anim_2">
            <div className="text-center">
              <div className="fadein scaleInv anim_8">
                <img src="assets/images/slider/yuyingshi.png" alt="育婴师服务" className="slide1-1 animated fadeInDown" />
              </div>
            </div>
          </div>
          <div className="col-md-6 animated fadeInDown notransition topspace30 text-right">
            <div className="fadein scaleInv anim_1">
              <h1 className="carouselText1 animated fadeInLeftBig"><span className="colortext">月嫂、育婴师</span>服务</h1>
            </div>
            <div className="fadein scaleInv anim_2">
              <p className="carouselText2 animated fadeInUpBig scaleInv">
              母婴护理（月嫂）对产妇及新生儿提供如下服务：
              </p>
            </div>
            <div className="fadein scaleInv anim_3">
              <p className="carouselText3">
                <i className="icon-ok"></i> 产妇一般身体状况的观察，护理及指导
              </p>
            </div>
            <div className="fadein scaleInv anim_4">
              <p className="carouselText3">
                <i className="icon-ok"></i> 新生儿护理及常见病防治
              </p>
            </div>
            <div className="fadein scaleInv anim_5">
              <p className="carouselText3">
                <i className="icon-ok"></i> 新生儿断奶、添加辅食、母子情感交流等
              </p>
            </div>
            <div className="fadein scaleInv anim_1">
              <p className="carouselText2 animated fadeInDownBig notransition">
              育婴师主要针对0-3岁婴幼儿提供生活照料、日<br/>常健康护理及早期教育等工作，兼做一般家务。
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }

});

module.exports = NursemaidDetail;
