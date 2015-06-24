var React = require("react"),
    Link = require("react-router").Link;

var ServiceBox = React.createClass({

  render : function() {
    return (
      <section className="service-box topspace30">
  		<div className="container">
  			<div className="row">
  				<div className="col-md-3 text-center animated fadeInLeftNow notransition">
  					<div className="icon-box-top">
  						<i className="fontawesome-icon medium circle-white center fa fa-cutlery"></i>
  						<h1>钟点工服务</h1>
  						<p>
                 武汉市洪山区康乐家政服务中心有一批经过专业培训的经验丰富的钟点工队伍，钟点工统一形象，统一管理，具有专业的家居清洁、洗衣熨烫、配菜及烹饪技能。
  						</p>
  						<p className="fontupper">
  							<Link to="/service/hourlyWorker" className="readmore">详细了解 <i className="icon-double-angle-right"></i></Link>
  						</p>
  					</div>
  				</div>
  				<div className="col-md-3 text-center animated fadeInLeftNow notransition">
  					<div className="icon-box-top">
  						<i className="fontawesome-icon medium circle-white center fa fa-child"></i>
  						<h1>育婴师、月嫂服务</h1>
  						<p>
                 武汉市洪山区康乐家政服务中心的员工毕业于正规的培训机构具有扎实的理论基础，专业的护理知识，又有丰富的操作经验，更有良好的卫生习惯。
  						</p>
  						<p className="fontupper">
                <Link to="/service/nursemaid" className="readmore">详细了解 <i className="icon-double-angle-right"></i></Link>
  						</p>
  					</div>
  				</div>
  				<div className="col-md-3 text-center animated fadeInRightNow notransition">
  					<div className="icon-box-top active">
  						<i className="fontawesome-icon medium circle-white center fa fa-female"></i>
  						<h1>家庭保姆服务</h1>
  						<p>
                 武汉市洪山区康乐家政服务中心家务助理主要通过省妇联、劳动就业部门、阳光工程办、劳务职介部门等专业输送单位选送，来源安全可靠，双重体检。
  						</p>
  						<p className="fontupper">
                <Link to="/service/nanny" className="readmore">详细了解 <i className="icon-double-angle-right"></i></Link>
  						</p>
  					</div>
  				</div>
  				<div className="col-md-3 text-center animated fadeInRightNow notransition">
  					<div className="icon-box-top">
  						<i className="fontawesome-icon medium circle-white center fa fa-building"></i>
  						<h1>开荒保洁服务</h1>
  						<p>
                 武汉市洪山区康乐家政服务中心清洗保洁中心拥有一支专业、敬业的清洁队伍，先后承接了多个现代化小区的新房清洁，深得广大客户的好评。
  						</p>
  						<p className="fontupper">
                <Link to="/service/clearing" className="readmore">详细了解 <i className="icon-double-angle-right"></i></Link>
  						</p>
  					</div>
  				</div>
  			</div>
  		</div>
  		</section>
    );
  }

});

module.exports = ServiceBox;
