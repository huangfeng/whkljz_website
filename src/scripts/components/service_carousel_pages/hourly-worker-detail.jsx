var React = require("react");

var HourlyWorkerDetail = React.createClass({

  render : function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 fadein scaleInv anim_1">
            <div className="fadein scaleInv anim_2">
              <h1 className="carouselText1 animated fadeInUpBig"><span className="colortext">钟点工</span>服务</h1>
            </div>
            <div className="fadein scaleInv anim_1">
              <p className="carouselText2 animated fadeInLeft">
              钟点工是一种比保姆更加灵活的家政服务形式，其服务形式主要采取三种方式：
              </p>
            </div>
            <div className="fadein scaleInv anim_2">
              <p className="carouselText3">
                <i className="icon-ok"></i> 临时钟点服务
              </p>
            </div>
            <div className="fadein scaleInv anim_3">
              <p className="carouselText3">
                <i className="icon-ok"></i> 随叫随到套票
              </p>
            </div>
            <div className="fadein scaleInv anim_4">
              <p className="carouselText3">
                <i className="icon-ok"></i> 固定钟点服务
              </p>
            </div>
            <div className="car-highlight5 animated rollIn notransition">
              服务范围包括：<span className="font100">买菜、做饭、家居清洁等。</span><br/>
            </div>
          </div>
          <div className="col-md-6 text-center fadein scaleInv anim_2">
            <div className="text-center">
              <div className="fadein scaleInv anim_8">
                <img src="assets/images/slider/zhongdiangong.png" alt="钟点工服务" className="slide1-1 animated rollIn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = HourlyWorkerDetail;
