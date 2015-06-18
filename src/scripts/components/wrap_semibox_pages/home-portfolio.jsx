var React = require("react");

var HomePortfolio = React.createClass({

  render : function() {
    return (
      <section className="home-portfolio bgarea topspace30">
      <div className="bgarea-semitransparent">
        <div className="container">
          <h1 className="small text-center animated fadeInLeftNow notransition">为何选择康乐家政</h1>
          <p className="animated fadeInRightNow notransition text-center topspace20">
             武汉市洪山区康乐家政服务中心系经工商局注册（工商注册号：420111600437078)政府相关职能部门备案的经营实体，属湖北省家政行业协会单位。<br/>专业致力于高级家政管理服务企事业单位公共保洁、家庭钟点工服务，也是本市第一家采用网络智能化管理的家政服务中心。
          </p>
          <br/>
          <div className="row">
            <div className="col-md-6 animated fadeInLeftNow notransition">
              <div className="row">
                <div className="col-md-4">
                  <img src="assets/images/address/xinshangdu.jpg" alt="光谷旗舰店"/>
                </div>
                <div className="col-md-8">
                  <h4 className="font100"><strong>光谷旗舰店</strong></h4>
                  <ul className="unstyled">
          					<li><span style={{marginRight:"5px"}}><i className="icon-map-marker"></i></span> 地址： 武汉市光谷广场世界城新尚都21420室（湖北省中医院旁）</li>
          					<li><span style={{marginRight:"3px"}}><i className="icon-phone"></i></span> 服务热线： (027) 87791032</li>
          					<li><span style={{marginRight:"3px"}}><i className="fa fa-mobile"></i></span> 庞老师: 13995680722</li>
                    <li><span style={{marginRight:"3px"}}><i className="fa fa-mobile"></i></span> 涂老师: 13638623778</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src="assets/images/address/weilaicheng.jpg" alt="街道口店"/>
                </div>
                <div className="col-md-8">
                  <h4 className="font100"><strong>街道口店</strong></h4>
                  <ul className="unstyled">
                    <li><span style={{marginRight:"5px"}}><i className="icon-map-marker"></i></span> 地址： 武汉市洪山区街道口未来城C座1112室</li>
                    <li><span style={{marginRight:"3px"}}><i className="icon-phone"></i></span> 服务热线： (027) 87748868</li>
                    <li><span style={{marginRight:"3px"}}><i className="fa fa-mobile"></i></span> 吴老师: 18908648300</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 animated fadeInRightNow notransition">
              <ul className="icons">
                <li>
                <h4><i className="fa fa-group"></i>丰富的劳务资源</h4>
                <p>
                   公司成立6年时间，积累了大量的人力资源。除了数量上有保障，公司各类家政人员进行甄别，通过几年的售后，积累了家政人员第一手的资料。
                </p>
                </li>
                <li>
                <h4><i className="fa fa-phone"></i>专业的咨询服务</h4>
                <p>
                   几年工作下来，我们对于各类家政工作的需求都比较了解。会根据您的具体需求提供专业的咨询服务，推荐最适合您的家政服务项目。
                </p>
                </li>
                <li>
                <h4><i className="icon-heart"></i>热情规范的接待</h4>
                <p>
                   我们一直采取预约制，一对一的接待会面，保证过来的客户和雇员有一个舒适自如的沟通空间，由家政老师主持，让每一次会面都尽量让人愉快。
                </p>
                </li>
                <li>
                <h4><i className="icon-leaf"></i>完善有保障的售后</h4>
                <p>
                   公司的双向保险已经购买了5年时间，每个月例行回访，让我们更加了解客户在使用过程中的意见和建议，详细了解家政人员在客户家里的工作情况，即协调双方的劳务关系，又掌握家政人员的想法和需求，力求为双方提供稳定长期的合作关系。
                </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }

});

module.exports = HomePortfolio;
