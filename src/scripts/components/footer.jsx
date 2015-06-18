var React = require("react"),
    FooterIntro = require("./footer_pages/footer-intro"),
    Guanggu = require("./footer_pages/guanggu"),
    Jiedaokou = require("./footer_pages/jiedaokou"),
    ContactForm = require("./footer_pages/contact-form"),
    BackTop = require("./footer_pages/back-top"),
    Copyright = require("./footer_pages/copyright");

var Footer = React.createClass({

  render: function() {
    return (
      <section>
      	<div className="footer">
      		<div className="container animated fadeInUpNow notransition">
      			<div className="row">
              <FooterIntro/>
              <Guanggu/>
              <Jiedaokou/>
              <ContactForm/>
      			</div>
      		</div>
      	</div>
        <BackTop/>
        <Copyright/>
      </section>
    );
  }

});

module.exports = Footer;
