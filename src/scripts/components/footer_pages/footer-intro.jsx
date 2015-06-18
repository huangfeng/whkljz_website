var React = require("react");

var FooterIntro = React.createClass({

  render : function() {
    return (
      <div className="col-md-3">
        <h1 className="footerbrand"><img src="assets/images/logo_footer.png" title="武汉市洪山区康乐家政管理服务中心"/></h1>
        <p>
           专业致力于高级家政管理服务企事业单位公共保洁、家庭钟点工服务。
        </p>
        <p>
           本家政服务中心实行规范化的专业家政管理服务，以诚信为本。欢迎广大客户来电咨询。
        </p>
        <p>
           同时也欢饮城乡下岗女工、农村剩余劳动力来本家政中心应聘，我们会竭尽所能为您提供广阔的就业平台。
        </p>
      </div>
    );
  }

});

module.exports = FooterIntro;
