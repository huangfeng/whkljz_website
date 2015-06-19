var React = require("react"),
    Link = require("react-router").Link;

var SemiboxEnd = React.createClass({

  render: function() {
    return (
      <section className="container animated fadeInDownNow notransition topspace40">
      <div className="row">
        <div className="col-md-12">
          <div className="text-center">
            <p className="bigtext">
               您需要家政服务吗？赶快来找<span className="fontpacifico colortext">康乐家政</span>吧！
            </p>
          </div>
          <div className="text-center topspace20">
            <Link to="aboutus" className="buttonblack"><i className="fa fa-briefcase"></i>&nbsp; 关于我们</Link>
            <a href="#" className="buttoncolor"><i className="icon-link"></i>&nbsp; 联系我们</a>
          </div>
        </div>
      </div>
      </section>
    );
  }

});

module.exports = SemiboxEnd;
