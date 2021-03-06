var React = require("react"),
    Navbar = require("react-bootstrap").Navbar,
    Nav = require("react-bootstrap").Nav,
    NavItemLink = require("react-router-bootstrap").NavItemLink,
    DropdownButton = require("react-bootstrap").DropdownButton,
    MenuItemLink = require("react-router-bootstrap").MenuItemLink,
    $ = window.$;

var Navigation = React.createClass({

  getInitialState() {
    return {
      servicesActive: false,
      pressActive: false
    };
  },

  componentDidMount : function() {
    $('.navbar .dropdown').hover(function() {
      $(this).addClass('extra-nav-class').find('.dropdown-menu').first().stop(true, true).delay(50).slideDown();
    }, function() {
      var na = $(this)
      na.find('.dropdown-menu').first().stop(true, true).delay(100).slideUp('fast', function(){ na.removeClass('extra-nav-class') })
    });
    $("#nav").tinyNav({
      active: 'selected', // String: Set the "active" class
      header: '导航 +', // String: Specify text for "header" and show header instead of the active item
      label: '' // String: Sets the <label> text for the <select> (if not set, no label will be added)
    });
    $(window).scroll(function () {
      if ($(document).scrollTop() == 0) {
        $('.wowmenu').removeClass('tiny');
      } else {
        $('.wowmenu').addClass('tiny');
      }
    });
  },

  render : function() {
    var brand = <a className="navbar-brand logo-nav" href="#"><img src="assets/images/logo.png" alt="武汉康乐家政"/></a>
    return (
      /*jshint ignore:start */
      <Navbar fixedTop={true} brand={brand} className="wowmenu">
        <Nav className="pull-right" id="nav">
          <NavItemLink eventKey={1} to="/" onClick={this.clearOtherActive}>首页</NavItemLink>
          <NavItemLink eventKey={2} to="aboutus" onClick={this.clearOtherActive}>关于我们</NavItemLink>
          <DropdownButton eventKey={3} title="服务项目" navItem={true} className={this.state.servicesActive ? "active" : ""}>
            <MenuItemLink to="/service/hourlyWorker" eventKey={3.1} onClick={this.setServicesActive}>钟点工服务</MenuItemLink>
            <MenuItemLink to="/service/nursemaid" eventKey={3.2} onClick={this.setServicesActive}>育婴师、月嫂服务</MenuItemLink>
            <MenuItemLink to="/service/nanny" eventKey={3.3} onClick={this.setServicesActive}>家庭保姆服务</MenuItemLink>
            <MenuItemLink to="/service/clearing" eventKey={3.4} onClick={this.setServicesActive}>开荒保洁服务</MenuItemLink>
          </DropdownButton>
          <DropdownButton eventKey={4} title="家政资讯" navItem={true} className={this.state.pressActive ? "active" : ""}>
            <MenuItemLink to="/press/notice" eventKey={4.1} onClick={this.setPressActive}>康乐公告板</MenuItemLink>
            <MenuItemLink to="/press/news" eventKey={4.2} onClick={this.setPressActive}>康乐图片新闻</MenuItemLink>
            <MenuItemLink to="/press/life" eventKey={4.3} onClick={this.setPressActive}>生活宝典</MenuItemLink>
            <MenuItemLink to="/press/food" eventKey={4.4} onClick={this.setPressActive}>居家饮食</MenuItemLink>
            <MenuItemLink to="/press/health" eventKey={4.5} onClick={this.setPressActive}>早教保健</MenuItemLink>
          </DropdownButton>
          <NavItemLink eventKey={5} to="contactus" onClick={this.clearOtherActive}>联系我们</NavItemLink>
        </Nav>
      </Navbar>
      /*jshint ignore:end */
    );
  },

  setServicesActive: function() {
    this.clearOtherActive();
    this.setState({servicesActive: true});
  },

  setPressActive: function() {
    this.clearOtherActive();
    this.setState({pressActive: true});
  },

  clearOtherActive: function() {
    this.setState({servicesActive: false, pressActive: false});
  }

});

module.exports = Navigation;
