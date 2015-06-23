var React = require("react");

var Customers = React.createClass({

  componentDidMount : function() {
    $('#carousel-projects').carouFredSel({
      responsive: true,
      items: {
        width: 200,
        height: 100,
        visible: {
          min: 1,
          max: 5
        }
      },
      width: '200px',
      height: '100px',
      auto: true,
      circular	: true,
      infinite	: true,
      prev : {
        button		: "#car_prev",
        key			: "left",
      },
      next : {
        button		: "#car_next",
        key			: "right",
      },
      swipe: {
        onMouse: true,
        onTouch: true
      },
      scroll: {
          easing: "",
          duration: 1200
      }
    });
  },

  render : function() {
    var displayBlock = {
      display:"block"
    };
    return (
      <section className="grayarea animated fade notransition recent-projects-home text-center topspace30">
  		<div className="container">
  			<div className="row">
  				<h1 className="small text-center animated fadeInLeftNow notransition">我们的客户</h1>
  				<p className="animated fadeInRightNow notransition text-center topspace20">
  					 武汉市洪山区康乐家政管理服务中心开业以来，承蒙广大客户的厚爱，服务客户遍及武汉三镇，尤其是以光谷为中心的诸多社区。康乐家政竭诚为您服务！
  				</p>
  				<div className="text-center smalltitle">
  				</div>
  				<div className="col-md-12">
  					<div className="list_carousel">
  						<div className="carousel_nav">
  							<a className="prev" id="car_prev" href="#" style={displayBlock}><span>上一个</span></a>
  							<a className="next" id="car_next" href="#" style={displayBlock}><span>下一个</span></a>
  						</div>
  						<div className="clearfix">
  						</div>
  						<div className="caroufredsel_wrapper">
  							<ul id="carousel-projects">
  								<li>
  								<div className="featured-projects">
  									<div className="featured-projects-image">
  										<a href="javascript:"><img src="assets/images/brands/1.png" className="imgOpa grayimage" alt="保利花园"/></a>
  									</div>
  								</div>
  								</li>
  								<li>
  								<div className="featured-projects">
  									<div className="featured-projects-image">
                      <a href="javascript:"><img src="assets/images/brands/2.png" className="imgOpa grayimage" alt="长城建设"/></a>
  									</div>
  								</div>
  								</li>
  								<li>
  								<div className="featured-projects">
  									<div className="featured-projects-image">
                      <a href="javascript:"><img src="assets/images/brands/3.png" className="imgOpa grayimage" alt="成熙英语"/></a>
  									</div>
  								</div>
  								</li>
  								<li>
  								<div className="featured-projects">
  									<div className="featured-projects-image">
                    <a href="javascript:"><img src="assets/images/brands/4.png" className="imgOpa grayimage" alt="光谷新世界"/></a>
                    </div>
  								</div>
  								</li>
  								<li>
  								<div className="featured-projects">
  									<div className="featured-projects-image">
                    <a href="javascript:"><img src="assets/images/brands/5.png" className="imgOpa grayimage" alt="江南家园"/></a>
                    </div>
  								</div>
  								</li>
  								<li>
  								<div className="featured-projects">
  									<div className="featured-projects-image">
                    <a href="javascript:"><img src="assets/images/brands/6.png" className="imgOpa grayimage" alt="谓语城"/></a>
                    </div>
  								</div>
  								</li>
  								<li>
  								<div className="featured-projects">
  									<div className="featured-projects-image">
                    <a href="javascript:"><img src="assets/images/brands/7.png" className="imgOpa grayimage" alt="金地太阳城"/></a>
                    </div>
  								</div>
  								</li>
  							</ul>
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>
  		</section>
    );
  }

});

module.exports = Customers;
