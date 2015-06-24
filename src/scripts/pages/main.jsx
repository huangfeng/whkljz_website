var React = require("react"),
    Fluxxor = require("fluxxor");
    Router = require("react-router"),
    RouteHandler = Router.RouteHandler,
    TopArea = require("../components/top-area"),
    Navigation = require("../components/nav"),
    Footer = require("../components/footer")
    $ = window.$;

var transitionDelay=0;
function findMaxYLValue() {
  var max = 0;
  var elArray = [];
  $('*[class*="anim_"]').each(function() {
    var animValue = $(this).attr('class').split(" ");
    var i,value;
    for(i = 0; i < animValue.length; ++i) {
      value = animValue[i];
      if(value.substring(0,5) === "anim_") {
        elArray.push(value.substring(5));
        break;
      }
    }
  });
  var maxValue = '.anim_'+Math.max.apply(Math,elArray),
      $maxValueEl = $(maxValue).first();
      $maxValueEl.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(e) {
        var transitionDelayValue = $maxValueEl.css("transition-delay");
        transitionDelay = Math.ceil(parseFloat(transitionDelayValue.substring(0,transitionDelayValue.length-1)*1000)*1)/1;
      });
}

var Main = React.createClass({

  componentDidMount : function() {
    findMaxYLValue();
    $("body").on("click",".trigger",function(e) {
      e.preventDefault();
      $body.toggleClass('on off');
      var link=$(this).attr('href');
      setTimeout(function() {
        location.href=link;
      }, transitionDelay);
    });
    $("html").niceScroll({
  		scrollspeed: 60,
  		mousescrollstep: 40,
  		cursorwidth: 10,
  		cursorheight: 130,
  		cursorborder: 0,
  		cursorcolor: '#636363',
  		cursorborderradius: 5,
  		styler:"fb",
  		autohidemode: false,
  		horizrailenabled: false
    });
    var $body = $('body');
    $(window).load(function() {
      $body.toggleClass('on off');
      $('#trigger').click(function() {
        $body.toggleClass('on off');
        setTimeout(function() {
          $body.toggleClass('on off');
        }, 2000)
      });
    });
    $(".animated").appear();
    $(document.body).on("appear", ".fade", function() {
      $(this).each(function(){ $(this).addClass("anim-fade") });
    });
    $(document.body).on("appear", ".slidea", function() {
      $(this).each(function(){ $(this).addClass("anim-slide") });
    });
    $(document.body).on("appear", ".hatch", function() {
      $(this).each(function(){ $(this).addClass("anim-hatch") });
    });
    $(document.body).on("appear", ".entrance", function() {
      $(this).each(function(){ $(this).addClass("anim-entrance") });
    });
  	$(document.body).on("appear", ".fadeInUpNow", function() {
      $(this).each(function(){ $(this).addClass("fadeInUp") });
    });
  	$(document.body).on("appear", ".fadeInDownNow", function() {
      $(this).each(function(){ $(this).addClass("fadeInDown") });
    });
	  $(document.body).on("appear", ".fadeInLeftNow", function() {
      $(this).each(function(){ $(this).addClass("fadeInLeft") });
    });
	  $(document.body).on("appear", ".fadeInRightNow", function() {
      $(this).each(function(){ $(this).addClass("fadeInRight") });
    });
	  $(document.body).on("appear", ".fadeInUpBigNow", function() {
      $(this).each(function(){ $(this).addClass("fadeInUpBig") });
    });
	  $(document.body).on("appear", ".fadeInDownBigNow", function() {
      $(this).each(function(){ $(this).addClass("fadeInDownBig") });
    });
	  $(document.body).on("appear", ".fadeInLeftBigNow", function() {
      $(this).each(function(){ $(this).addClass("fadeInLeftBig") });
    });
	  $(document.body).on("appear", ".fadeInRightBigNow", function() {
      $(this).each(function(){ $(this).addClass("fadeInRightBig") });
    });
	  $(document.body).on("appear", ".fadeInNow", function() {
      $(this).each(function(){ $(this).addClass("fadeIn") });
    });
	  $(document.body).on("appear", ".flashNow", function() {
      $(this).each(function(){ $(this).addClass("flash") });
    });
	  $(document.body).on("appear", ".shakeNow", function() {
      $(this).each(function(){ $(this).addClass("shake") });
    });
	  $(document.body).on("appear", ".bounceNow", function() {
      $(this).each(function(){ $(this).addClass("bounce") });
    });
	  $(document.body).on("appear", ".tadaNow", function() {
      $(this).each(function(){ $(this).addClass("tada") });
    });
	  $(document.body).on("appear", ".swingNow", function() {
      $(this).each(function(){ $(this).addClass("swing") });
    });
  },

  render : function() {
    return (
      /*jshint ignore:start */
      <div className="wrapbox">
        <TopArea />
        <Navigation ref="nav"/>
        {/* this is the important part */}
        <RouteHandler setMenuType={this.setMenuType} />
        <Footer/>
      </div>
      /*jshint ignore:end */
    );
  },

  setMenuType: function(newMenuType) {
    if (newMenuType && newMenuType == "services") {
      this.refs.nav && this.refs.nav.setServicesActive();
    } else if (newMenuType && newMenuType == "blogs") {
      this.refs.nav && this.refs.nav.setBlogsActive();
    }
  }

});

module.exports = Main;
