var React = require("react");

var Guanggu = React.createClass({

  render : function() {
    return (
      <div className="col-md-3">
        <h1 className="title"><span className="colortext">光谷</span>旗舰店</h1>
        <div className="footermap">
          <p>
            <strong>地址: </strong> 武汉市光谷广场世界城新尚都21420室（湖北省中医院旁）
          </p>
          <p>
            <strong>服务热线: </strong> (027) 87791032
          </p>
          <p>
            <strong>庞老师: </strong> 13995680722
          </p>
          <p>
            <strong>涂老师: </strong> 13638623778
          </p>
          <ul className="social-icons list-soc">
            <li><a href="#"><i className="fa fa-weibo"></i></a></li>
            <li><a href="#"><i className="fa fa-weixin"></i></a></li>
            <li><a href="#"><i className="fa fa-qq"></i></a></li>
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = Guanggu;
