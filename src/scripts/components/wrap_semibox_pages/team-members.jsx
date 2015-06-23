var React = require("react");

var TeamMembers = React.createClass({

  render : function() {
    return (
      <section className="container animated fadeInDownNow notransition topspace10 fadeInDown">
    		<div className="row">
    			<h1 className="text-center smalltitle">
    			<span>我们的团队</span>
    			</h1>
    			<div className="col-md-4">
    				<div className="thumbnail">
    					<img src="img/demo/team1.jpg" alt="庞老师" />
    					<div className="caption">
    						<h4>庞老师</h4>
    						<span className="primarycol">- 康乐家政联合创始人/客户经理 -</span>
    						<p>
    							 酒店管理专业毕业，有丰富的人力资源管理经验。<br/>
    						</p>
    						<ul className="social-icons">
    							<li><a href="#"><i className="fa fa-weixin"></i></a></li>
    							<li><a href="#"><i className="fa fa-qq"></i></a></li>
    							<li><a href="#"><i className="fa fa-envelope"></i></a></li>
    						</ul>
    					</div>
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="thumbnail">
    					<img src="img/demo/team2.jpg" alt="涂老师" />
    					<div className="caption">
    						<h4>涂老师</h4>
    						<span className="primarycol">- 康乐家政联合创始人/客户经理 -</span>
    						<p>
    							 会计专业毕业，中级会计师职称。<br/>
    						</p>
                <ul className="social-icons">
    							<li><a href="#"><i className="fa fa-weixin"></i></a></li>
    							<li><a href="#"><i className="fa fa-qq"></i></a></li>
    							<li><a href="#"><i className="fa fa-envelope"></i></a></li>
    						</ul>
    					</div>
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="thumbnail">
    					<img src="img/demo/team3.jpg" alt="吴老师"/>
    					<div className="caption">
    						<h4>吴老师</h4>
    						<span className="primarycol">- 街道口店客户经理 -</span>
    						<p>
    							 有丰富的家政工作经验。<br/>
    						</p>
                <ul className="social-icons">
    							<li><a href="#"><i className="fa fa-weixin"></i></a></li>
    							<li><a href="#"><i className="fa fa-qq"></i></a></li>
    							<li><a href="#"><i className="fa fa-envelope"></i></a></li>
    						</ul>
    					</div>
    				</div>
    			</div>
    		</div>
  		</section>
    );
  }

});

module.exports = TeamMembers;
