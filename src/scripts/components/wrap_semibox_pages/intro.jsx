var React = require("react"),
    Link = require("react-router").Link;

var Intro = React.createClass({

  render : function() {
    return (
      <section className="container">
        <div className="col-md-12 animated anim-slide notransition">
          <div className="text-center">
            <h2>康乐家政简介</h2>
            <span className="meta bottomspace30">By
              <Link to="/" title="武汉市洪山区康乐家政管理服务中心" rel="author">武汉市洪山区康乐家政管理服务中心</Link>
              <span className="bullet">•</span> 2008-8-1
            </span>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
              <span className="drop-cap round">武</span>汉市洪山区康乐家政服务中心系经工商局注册（工商注册号：420111600437078)政府相关职能部门备案的经营实体，属湖北省家政行业协会单位。专业致力于高级家政管理服务、企事业单位公共保洁、家庭钟点工服务，也是本市第一家采用网络智能化管理的家政服务中心。
              </p>
              <p className="text-center">
                <img alt="关于我们" src="assets/images/demo/aboutus.jpg" className="img-responsive aligncenter"/>
  						</p>
              <p>
              <span className="drop-cap round">本</span>
              家政服务中心实行规范化的专业家政管理服务，家政服务人员须经基础培训、卫生部门体检合格，拥有身份证明，体检证明方能上岗。
              我们为雇主提供个性化服务,满足您全方位的要求,对雇主采用跟踪服务的服务方式,全力为您提供舒适开心的家居生活环境。
              同时为了减轻雇主的责任风险，公司免费为雇主提供“双重保险”：A. 雇员人身意外伤害险－－最高理赔八万元人民币。
              B. 雇主第三责任险－－最高理赔十万元人民币（详情依照永安保险公司相关条款理赔）。
              目前已和荆门、荆州、襄樊、十堰 、孝感、黄岗等地区妇联、劳动就业部门建立了长效的家政服务员输送培训机制 ，与武汉市49个社区建立了再就业绿色通道。
              本家政服务中心以诚信为本，赢得了广大客户的赞誉，同时也为城乡下岗女工、农村剩余劳动力提供了广阔的就业平台。
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

});

module.exports = Intro;
