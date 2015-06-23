var React = require("react"),
    BMap = window.BMap,
    $ = window.$;

var AddressMap = React.createClass({

  moveToGuanggu : function() {
    this.map && this.map.panTo(new BMap.Point(114.412601, 30.521976));
    this.guangguInfoWindow && this.guangguInfoWindow.open(this.guanggu);
  },

  moveToJiedaokou: function() {
    this.map && this.map.panTo(new BMap.Point(114.359974,30.541505));
    this.jiedaokouInfoWindow && this.jiedaokouInfoWindow.open(this.jiedaokou);
  },

  componentDidMount : function() {
    this.map = new BMap.Map('map');
    var _this = this;
    this.map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}));  //右上角，仅包含平移和缩放按钮
    this.map.centerAndZoom(new BMap.Point(114.387094, 30.516876),14);  //初始化时，即可设置中心点和地图缩放级别。
    this.map.enableScrollWheelZoom();

    var guangguDetail = '<div style="margin:0;line-height:20px;padding:2px;">' +
    			        '<img src="assets/images/address/xinshangdu.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
    			        '地址：武汉市光谷广场世界城新尚都21420室（湖北省中医院旁）<br/>联系人：庞老师  涂老师<br/>电话：(027)87791032， 13995680722， 13638623778<br/></div>';
    this.guangguInfoWindow = new BMapLib.SearchInfoWindow(this.map, guangguDetail, {
    	title  : "康乐家政光谷店",      //标题
    	width  : 290,                 //宽度
    	height : 105,                 //高度
    	panel  : "panel",             //检索结果面板
    	enableAutoPan : false,         //自动平移
    	searchTypes   :[
    	]
    });
    this.guanggu = new BMap.Marker(new BMap.Point(114.412601, 30.511976));  // 创建标注
    this.guanggu.addEventListener("click", function(e){
      _this.moveToGuanggu();
    })
    this.map.addOverlay(this.guanggu);              // 将标注添加到地图中
    var label = new BMap.Label("康乐家政光谷店",{offset:new BMap.Size(10,-10)});
    this.guanggu.setLabel(label);

    var jiedaokouDetail = '<div style="margin:0;line-height:20px;padding:2px;">' +
    			          '<img src="assets/images/address/weilaicheng.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
    			          '地址：街道口未来城C座1112室<br/>联系人：吴老师<br/>电话：(027)87748868， 18908648300<br/></div>';
    this.jiedaokouInfoWindow = new BMapLib.SearchInfoWindow(this.map, jiedaokouDetail, {
    	title  : "康乐家政街道口店",      //标题
    	width  : 290,                   //宽度
    	height : 105,                   //高度
    	panel  : "panel",               //检索结果面板
    	enableAutoPan : false,           //自动平移
    	searchTypes   :[
    	]
    });
    this.jiedaokou = new BMap.Marker(new BMap.Point(114.359974,30.531505));  // 创建标注
    this.jiedaokou.addEventListener("click", function(e){
      _this.moveToJiedaokou();
    })
    this.map.addOverlay(this.jiedaokou);              // 将标注添加到地图中
    var label = new BMap.Label("康乐家政街道口店",{offset:new BMap.Size(10,-10)});
    this.jiedaokou.setLabel(label);
  },

  render : function() {
    var allMapStyle = {
      overflow:"hidden",
      zoom:1,
      position:"relative",
      height:"370px"
    };
    var mapStyle = {
      height:"100%",
      WebkitTransition: "all 0.5s ease-in-out",
      transition: "all 0.5s ease-in-out"
    };
    return (
      <section className="container">
        <div className="row">
          <div id="allmap" style={allMapStyle}>
            <div id="map" style={mapStyle}></div>
          </div>
        </div>
        <div className="row">
          <ul className="ca-menu">
            <li className="col-md-6">
            <a href="javascript:" onClick={this.moveToGuanggu}>
            <div className="grey-box-icon">
              <div className="icon-box-top grey-box-icon-pos">
                <i className="fontawesome-icon medium circle-white center fa fa-flag"></i>
              </div>
              <div className="ca-content">
                <h2 className="ca-main">光谷旗舰店</h2>
                <h3 className="ca-sub">地址: 武汉市光谷广场世界城新尚都21420室（湖北省中医院旁）</h3>
                <h3 className="ca-sub">服务热线: (027) 87791032</h3>
              </div>
            </div>
            </a>
            </li>
            <li className="col-md-6">
            <a href="javascript:" onClick={this.moveToJiedaokou}>
            <div className="grey-box-icon active">
              <div className="icon-box-top grey-box-icon-pos">
                <i className="fontawesome-icon medium circle-white center fa fa-leaf"></i>
              </div>
              <div className="ca-content">
                <h2 className="ca-main">街道口店</h2>
                <h3 className="ca-sub">地址: 武汉市洪山区街道口未来城C座1112室</h3>
                <h3 className="ca-sub">服务热线: (027) 87748868</h3>
              </div>
            </div>
            </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }

});

module.exports = AddressMap;
