var React = require("react"),
    SemiboxEnd = require("../components/wrap_semibox_pages/semibox-end");

var Press = React.createClass({
  componentDidMount : function() {
    this.props.setMenuType && this.props.setMenuType("press");
  },

  render: function() {
    return (
      <section>
        <section className="pageheader-default text-center">
        <div className="semitransparentbg">
          <h1 className="animated fadeInLeftBig notransition">家政资讯</h1>
          <p className="animated fadeInRightBig  notransition container page-description">
             武汉市洪山区康乐家政管理服务中心最新消息及家政相关资讯
          </p>
        </div>
        </section>
        <div className="wrapsemibox">
          <div className="semiboxshadow text-center">
            <img src="assets/images/shp.png" className="img-responsive" alt="" />
          </div>
          <section className="container animated fadeInDown notransition">
          <div className="row blogindex">
            <div className="col-md-9">
            </div>
            <div className="col-md-3">
      				<aside className="sidebar topspace30">
      				<div className="wowwidget">
      					<h4>分类</h4>
      					<ul className="categories">
      						<li className="active"><a href="#">康乐公告板</a></li>
      						<li><a href="#">康乐图片新闻</a></li>
      						<li><a href="#">生活宝典</a></li>
      						<li><a href="#">居家饮食</a></li>
      						<li><a href="#">早教保健</a></li>
      					</ul>
      				</div>
              </aside>
            </div>
          </div>
          </section>
          <SemiboxEnd/>
        </div>
      </section>
    );
  }

});

module.exports = Press;
