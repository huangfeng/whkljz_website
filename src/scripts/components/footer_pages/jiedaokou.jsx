var React = require("react");

var Jiedaokou = React.createClass({

  render : function() {
    return (
      <div className="col-md-3">
        <h1 className="title"><span className="colortext">街道口</span>店</h1>
        <div className="footermap">
          <p>
            <strong>地址: </strong> 武汉市洪山区街道口未来城C座1112室
          </p>
          <p>
            <strong>服务热线: </strong> (027) 87748868
          </p>
          <p>
            <strong>吴老师: </strong> 18908648300
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

module.exports = Jiedaokou;
