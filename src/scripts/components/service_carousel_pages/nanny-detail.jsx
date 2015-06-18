var React = require("react");

var NannyDetail = React.createClass({

  render : function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 fadein scaleInv anim_1">
            <div className="fadein scaleInv anim_2">
              <h1 className="carouselText1 animated fadeInUpBig"><span className="colortext">家庭保姆</span>服务</h1>
            </div>
            <div className="fadein scaleInv anim_1">
              <p className="carouselText2 animated fadeInLeft">
              家务助理接受公司提供的择业观念、职业道德、日常礼仪、法律知识、安全知识、买菜记账、家庭烹饪、衣物洗熨、衣物消毒、居家保洁、电器使用、花草养护、护理常识、照顾老幼、宠物饲养、家庭保健等课程的强化培训，考试合格上岗大都具备了基本的家政服务技能，获得上岗资格，为江城的千家万户提供了专业的家政服务。
              </p>
            </div>
          </div>
          <div className="col-md-6 text-center fadeInRightBig scaleInv anim_2">
            <div className="text-center">
              <div className="fadein scaleInv anim_8">
                <img src="assets/images/slider/baomu.png" alt="家庭保姆服务" className="slide1-1 animated fadeInLeft" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = NannyDetail;
