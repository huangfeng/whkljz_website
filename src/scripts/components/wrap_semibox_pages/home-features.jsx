var React = require("react"),
    Link = require("react-router").Link,
    $ = window.$;

var HomeFeatures = React.createClass({

  componentDidMount : function() {
    $("#cbp-qtrotator").cbpQTRotator();
  },

  render : function() {
    return (
      <section className="home-features topspace30">
      <div className="container animated fadeInUpNow notransition">
        <h1 className="small text-center">我们的故事</h1>
        <div className="br-hr type_short">
          <span className="br-hr-h">
          <i className="icon-pencil"></i>
          </span>
        </div>
        <div id="cbp-qtrotator" className="cbp-qtrotator">
          <div className="cbp-qtcontent">
            <img src="assets/images/demo/tulaoshi.png" alt="涂老师" />
            <blockquote>
              <p className="bigquote">
                <i className="icon-quote-left colortext quoteicon"></i>
                公司的成立很简单。2008年，两个老友说：要不自己做点什么吧。好吧！就开始了！公司一开就开到了现在。
                我们从20多岁的小女生做到30多岁的小妇人。除了身材一高一矮一胖一瘦没有变化，心态和历练都还是有所增长的。
                <i className="icon-quote-right colortext quoteicon"></i>
              </p>
              <footer>涂老师 / <a href="http://www.whkljz.com.cn">康乐家政</a>联合创始人</footer>
            </blockquote>
          </div>
          <div className="cbp-qtcontent">
            <img src="assets/images/demo/panglaoshi.png" alt="庞老师" />
            <blockquote>
              <p className="bigquote">
                <i className="icon-quote-left colortext quoteicon"></i>
                从开始一年接单量惨淡，到现在有时忙也忙不过来；从开始的各种不淡定，但现在很多事情还算处变不惊；
                从开始的各种委屈不理解到现在发现每件事情都有自己的道理。
                <i className="icon-quote-right colortext quoteicon"></i>
              </p>
              <footer>庞老师 / <a href="http://www.whkljz.com.cn">康乐家政</a>联合创始人</footer>
            </blockquote>
          </div>
          <div className="cbp-qtcontent">
            <img src="assets/images/demo/tulaoshi.png" alt="涂老师" />
            <blockquote>
              <p className="bigquote">
                <i className="icon-quote-left colortext quoteicon"></i>
                要调整的永远都只是自己。<br/>
                伴随着欢笑的眼泪，成长或多或少都有吧；伴随着眼角眉梢日渐增长的皱纹，成熟或多或少都有吧。
                <i className="icon-quote-right colortext quoteicon"></i>
              </p>
              <footer>涂老师 / <a href="http://www.whkljz.com.cn">康乐家政</a>联合创始人</footer>
            </blockquote>
          </div>
          <div className="cbp-qtcontent">
            <img src="assets/images/demo/panglaoshi.png" alt="庞老师" />
            <blockquote>
              <p className="bigquote">
                <i className="icon-quote-left colortext quoteicon"></i>
                希望长期开下去吧。毕竟我们都还算年轻。
                <i className="icon-quote-right colortext quoteicon"></i>
              </p>
              <footer>庞老师 / <a href="http://www.whkljz.com.cn">康乐家政</a>联合创始人</footer>
            </blockquote>
          </div>
        </div>
        <br/>
        <div className="col-md-10 col-md-offset-1 animated slidea notransition">
          <div className="row">
            <div className="col-md-6">
              <h4><i className="icon fa fa-check-square-o">
              </i> 怎样选择合适的家政服务员</h4>
              <div className="bottomspace30">
                 回答您关心的几个问题，教您如何选择合适的家政服务员。<br/>
                 <Link to="/press/tips/1" className="readmore">详细了解 <i className="icon-double-angle-right"></i></Link>
              </div>
            </div>
            <div className="col-md-6">
              <h4><i className="icon icon-anchor">
              </i> 会员的权益之一：免费保险</h4>
              <div className="bottomspace30">
                 家政服务中的风险无时不在，为了有效转移和规避这两类风险责任，武汉康乐家政作为被保险人已经投保了雇主
                 责任险和家政经营责任险（单笔意外事故最高赔偿20万元）。<br/>
                 <Link to="/press/tips/2" className="readmore">详细了解 <i className="icon-double-angle-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h4><i className="icon fa fa-stack-overflow">
              </i> 聘请家政人员的流程</h4>
              <div className="bottomspace30">
                当您想聘请家政人员时，我们提供服务的流程是：接单、匹配、面谈及签约、安排上岗。<br />
                <Link to="/press/tips/3" className="readmore">详细了解 <i className="icon-double-angle-right"></i></Link>
              </div>
            </div>
            <div className="col-md-6">
              <h4><i className="icon fa fa-users">
              </i> 怎样与家政服务员相处</h4>
              <div className="bottomspace30">
                在日常生活中，给您与家政服务员相处的意见和建议。 <br />
                <Link to="/press/tips/4" className="readmore">详细了解 <i className="icon-double-angle-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }

});

module.exports = HomeFeatures;
