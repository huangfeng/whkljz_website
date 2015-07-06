var React = require("react"),
    Link = require("react-router").Link,
    SemiboxEnd = require("../components/wrap_semibox_pages/semibox-end"),
    PressList = require("../components/press/press-list"),
    PressItem = require("../components/press/press-item");

var Press = React.createClass({
  getInitialState() {
    return {
      catalog: this.props.params.catalog ?  this.props.params.catalog : "notice"
    };
  },

  componentDidMount : function() {
    this.props.setMenuType && this.props.setMenuType("press");
  },

  componentWillReceiveProps: function(nextProps) {
    console.log(nextProps);
    var catalog = nextProps.params.catalog;
    console.log("will mount: catalog=" + catalog);
    this.setCatalog(catalog);
  },

  render: function() {
    var {catalog, item} = this.props.params;
    var content = <div></div>
    if (!item) {
      content = <PressList params={this.props.params}/>
    } else {
      content = <PressItem params={this.props.params}/>
    }
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
              {content}
            </div>
            <div className="col-md-3">
      				<aside className="sidebar topspace30">
      				<div className="wowwidget">
      					<h4>分类</h4>
      					<ul className="categories">
      						<li className={this.state.catalog == "notice" ? "active" : ""}><Link to="/press/notice">康乐公告板</Link></li>
      						<li className={this.state.catalog == "news" ? "active" : ""}><Link to="/press/news">康乐图片新闻</Link></li>
      						<li className={this.state.catalog == "life" ? "active" : ""}><Link to="/press/life">生活宝典</Link></li>
      						<li className={this.state.catalog == "food" ? "active" : ""}><Link to="/press/food">居家饮食</Link></li>
      						<li className={this.state.catalog == "health" ? "active" : ""}><Link to="/press/health">早教保健</Link></li>
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
  },

  setCatalog : function(newCatalog) {
    this.setState({catalog : newCatalog});
  }

});

module.exports = Press;
