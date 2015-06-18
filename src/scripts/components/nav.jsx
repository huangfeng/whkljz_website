var React = require("react"),
    Navbar = require("react-bootstrap").Navbar,
    Nav = require("react-bootstrap").Nav,
    NavItemLink = require("react-router-bootstrap").NavItemLink,
    DropdownButton = require("react-bootstrap").DropdownButton,
    MenuItemLink = require("react-router-bootstrap").MenuItemLink,
    $ = window.$;

var Navigation = React.createClass({

  componentDidMount : function() {
    console.log("start render navigation");
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
      <Navbar fixedTop brand={brand} className="wowmenu">
        <Nav className="pull-right" activeKey={1} id="nav">
          <NavItemLink eventKey={1} to="/">首页</NavItemLink>
        </Nav>
      </Navbar>
      /*jshint ignore:end */
    );
  }

});

module.exports = Navigation;
