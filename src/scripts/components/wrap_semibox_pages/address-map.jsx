var React = require("react"),
    BMap = window.BMap,
    $ = window.$;

var AddressMap = React.createClass({

  componentDidMount : function() {
    var map = new BMap.Map('map');
    map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}));  //右上角，仅包含平移和缩放按钮
    map.centerAndZoom(new BMap.Point(114.387094, 30.516876),14);  //初始化时，即可设置中心点和地图缩放级别。
    map.enableScrollWheelZoom();

    var guangguDetail = '<div style="margin:0;line-height:20px;padding:2px;">' +
    			        '<img src="assets/images/address/xinshangdu.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
    			        '地址：武汉市光谷广场世界城新尚都21420室（湖北省中医院旁）<br/>联系人：庞老师  涂老师<br/>电话：(027)87791032， 13995680722， 13638623778<br/></div>';
    var guangguInfoWindow = null;
    guangguInfoWindow = new BMapLib.SearchInfoWindow(map, guangguDetail, {
    	title  : "康乐家政光谷店",      //标题
    	width  : 290,             //宽度
    	height : 105,              //高度
    	panel  : "panel",         //检索结果面板
    	enableAutoPan : true,     //自动平移
    	searchTypes   :[
    		BMAPLIB_TAB_TO_HERE,  //到这里去
    		BMAPLIB_TAB_FROM_HERE //从这里出发
    	]
    });
    var guanggu = new BMap.Marker(new BMap.Point(114.412601, 30.511976));  // 创建标注
    guanggu.addEventListener("click", function(e){
    	guangguInfoWindow.open(guanggu);
    })
    map.addOverlay(guanggu);              // 将标注添加到地图中
    var label = new BMap.Label("康乐家政光谷店",{offset:new BMap.Size(10,-10)});
    guanggu.setLabel(label);

    var jiedaokouDetail = '<div style="margin:0;line-height:20px;padding:2px;">' +
    			          '<img src="assets/images/address/jiedaokou.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
    			          '地址：街道口未来城C座1112室<br/>联系人：吴老师<br/>电话：(027)87748868， 18908648300<br/></div>';
    var jiedaokouInfoWindow = null;
    jiedaokouInfoWindow = new BMapLib.SearchInfoWindow(map, jiedaokouDetail, {
    	title  : "康乐家政街道口店",      //标题
    	width  : 290,             //宽度
    	height : 105,              //高度
    	panel  : "panel",         //检索结果面板
    	enableAutoPan : true,     //自动平移
    	searchTypes   :[
    		BMAPLIB_TAB_TO_HERE,  //到这里去
    		BMAPLIB_TAB_FROM_HERE //从这里出发
    	]
    });
    var jiedaokou = new BMap.Marker(new BMap.Point(114.359974,30.531505));  // 创建标注
    jiedaokou.addEventListener("click", function(e){
    	jiedaokouInfoWindow.open(jiedaokou);
    })
    map.addOverlay(jiedaokou);              // 将标注添加到地图中
    var label = new BMap.Label("康乐家政街道口店",{offset:new BMap.Size(10,-10)});
    jiedaokou.setLabel(label);
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
    var panelBtnStyle = {
      position:"absolute",
      fontSize:"14px",
      top:"50%",
      marginTop:"-95px",
      right:"0px",
      width:"20px",
      padding:"10px 10px",
      color:"#999",
      cursor:"pointer",
      textAlign:"center",
      height:"170px",
      background:"rgba(255,255,255,0.9)",
      WebkitTransition: "all 0.5s ease-in-out",
      transition: "all 0.5s ease-in-out",
      fontFamily:"微软雅黑",
      fontWeight:"bold"
    };
    var panelWrapStyle = {
      width:"0px",
      position:"absolute",
      top:"0px",
      right:"0px",
      height:"100%",
      overflow:"auto",
      WebkitTransition: "all 0.5s ease-in-out",
      transition: "all 0.5s ease-in-out"
    };
    var panelInfoStyle = {
      width:"20px",
      height:"200px",
      margin:"-100px 0 0 -10px",
      color:"#999",
      position:"absolute",
      opacity:"0.5",
      top:"50%",
      left:"50%"
    };
    var panelStyle = {
      position:"absolute"
    };
    return (
      <section className="container">
        <div className="row">
          <div id="allmap" style={allMapStyle}>
            <div id="map" style={mapStyle}></div>
            <div id="showPanelBtn" style={panelBtnStyle}>显示检索结果面板<br/>
              &lt;</div>
            <div id="panelWrap" style={panelWrapStyle}>
              <div style={panelInfoStyle}>此处用于展示结果面板</div>
              <div id="panel" style={panelStyle}></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

});

module.exports = AddressMap;
