var React = require("react");

var ClearingDetail = React.createClass({

  render : function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center fadeInUpBig scaleInv anim_1">
            <div className="text-center">
              <div className="fadein scaleInv anim_2">
                <img src="assets/images/slider/kaihuang.png" alt="开荒保洁服务" className="slide1-1 animated fadeInRight" />
              </div>
            </div>
          </div>
          <div className="col-md-6 animated fadeInDown notransition topspace30 text-right">
            <div className="fadein scaleInv anim_2">
              <h1 className="carouselText1 animated fadeInLeftBig"><span className="colortext">开荒保洁</span>服务</h1>
            </div>
            <div className="fadein scaleInv anim_1">
              <p className="carouselText2 animated fadeInUpBig scaleInv">
              武汉市洪山区康乐家政服务中心清洗保洁中心拥有一支专业、敬业的清洁队伍，提供地毯清洗、外墙清洗、沙发清洗、电脑清洗、油烟机清洗、吊灯清洗、家用空调清洗、地板清洗打蜡和翻新、地面砖翻新、家庭日常保洁、新居开荒等服务，同时，还对物业花园、大型酒店、超市、工厂、机关学校、医院、商务楼提供保洁托管服务。
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = ClearingDetail;
