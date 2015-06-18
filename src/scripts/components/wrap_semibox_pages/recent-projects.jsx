var React = require("react"),
    $ = window.$;

var RecentProjects = React.createClass({

  componentDidMount : function() {
    $(window).load(function(){
      $('#carousel-projects').carouFredSel({
        responsive: true,
        items: {
          width: 200,
          height: 295,
          visible: {
            min: 1,
            max: 4
          }
        },
        width: '200px',
        height: '295px',
        auto: true,
        circular	: false,
        infinite	: false,
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
    });
    $("a[data-gal^='prettyPhoto']").prettyPhoto({social_tools:'', animation_speed: 'normal' , theme: 'dark_rounded'});
  },

  render : function() {
    return (
      <section className="grayarea recent-projects-home topspace30 animated fadeInUpNow notransition">
      <div className="container">
        <div className="row">
          <h1 className="small text-center topspace0">图片新闻</h1>
          <p className="animated fadeInRightNow notransition text-center topspace20">
             康乐家政竭诚为您服务！
          </p>
          <div className="text-center smalltitle">
          </div>
          <div className="col-md-12">
            <div className="list_carousel text-center">
              <div className="carousel_nav">
                <a className="prev" id="car_prev" href="#"><span>上一条</span></a>
                <a className="next" id="car_next" href="#"><span>下一条</span></a>
              </div>
              <div className="clearfix">
              </div>
              <ul id="carousel-projects">
                <li>
                <div className="boxcontainer">
                  <img src="assets/images/news/news1.jpg" alt=""/>
                  <div className="roll">
                    <div className="wrapcaption">
                      <a href="projectdetail.html"><i className="icon-link captionicons"></i></a>
                      <a data-gal="prettyPhoto[gallery1]" href="assets/images/news/news1.jpg" title="家政经营责任险"><i className="icon-zoom-in captionicons"></i></a>
                    </div>
                  </div>
                  <h1><a href="projectdetail.html">家政经营责任险</a></h1>
                  <p>
                     当您在选择家政公司时，请务必询问并查验该公司是否购买了保险。
                  </p>
                </div>
                </li>
                <li>
                <div className="boxcontainer">
                  <img src="assets/images/news/news2.jpg" alt=""/>
                  <div className="roll">
                    <div className="wrapcaption">
                      <a href="projectdetail.html"><i className="icon-link captionicons"></i></a>
                      <a data-gal="prettyPhoto[gallery1]" href="assets/images/news/news2.jpg" title="康乐第2期月嫂育婴师培训"><i className="icon-zoom-in captionicons"></i></a>
                    </div>
                  </div>
                  <h1><a href="projectdetail.html">康乐第2期月嫂育婴师培训</a></h1>
                  <p>
                     育婴员（师）是国家劳动和社会保障部新发布的8个新工种之一。
                  </p>
                </div>
                </li>
                <li>
                <div className="boxcontainer">
                  <img src="assets/images/news/news3.jpg" alt=""/>
                  <div className="roll">
                    <div className="wrapcaption">
                      <a href="projectdetail.html"><i className="icon-link captionicons"></i></a>
                      <a data-gal="prettyPhoto[gallery1]" href="assets/images/news/news3.jpg" title="康乐家政新春团年饭现场"><i className="icon-zoom-in captionicons"></i></a>
                    </div>
                  </div>
                  <h1><a href="projectdetail.html">康乐家政新春团年饭现场</a></h1>
                  <p>
                     康乐家政是一个快乐、团结的大家庭。
                  </p>
                </div>
                </li>
                <li>
                <div className="boxcontainer">
                  <img src="assets/images/news/news4.jpg" alt=""/>
                  <div className="roll">
                    <div className="wrapcaption">
                      <a href="projectdetail.html"><i className="icon-link captionicons"></i></a>
                      <a data-gal="prettyPhoto[gallery1]" href="assets/images/news/news4.jpg" title="康乐家政岁末大扫除"><i className="icon-zoom-in captionicons"></i></a>
                    </div>
                  </div>
                  <h1><a href="projectdetail.html">康乐家政岁末大扫除</a></h1>
                  <p>
                     过完元旦迎新春，每至此时，大扫除便成了武汉许多家庭的“必修课”。
                  </p>
                </div>
                </li>
                <li>
                <div className="boxcontainer">
                  <img src="assets/images/news/news5.jpg" alt=""/>
                  <div className="roll">
                    <div className="wrapcaption">
                      <a href="projectdetail.html"><i className="icon icon-link captionicons"></i></a>
                      <a data-gal="prettyPhoto[gallery1]" href="assets/images/news/news5.jpg" title="庆贺康乐家政街道口店开张"><i className="icon icon-zoom-in captionicons"></i></a>
                    </div>
                  </div>
                  <h1><a href="projectdetail.html">庆贺康乐家政街道口店开张</a></h1>
                  <p>
                     康乐家政为拓展业务并更好的为江城人民服务，特选址街道口附近区域，作为另一分店。
                  </p>
                </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }

});

module.exports = RecentProjects;
