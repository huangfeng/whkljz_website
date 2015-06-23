var React = require("react"),
    Alert = require("react-bootstrap").Alert,
    $ = window.$;

var ContactForm = React.createClass({

  getInitialState() {
    return {
      alertVisible: false
    };
  },

  componentDidMount : function() {
    var _this = this;
    $('#submit').click(function () {

  		//Get the data from all the fields
  		var name = $('input[name=bd_bp_messName]');
  		var phone = $('input[name=bd_bp_messPhone]');
  		var regexMobile = /^1\d{10}$/;
      var regexPhone = /^0\d{2,3}-?\d{7,8}$/;
  		var message = $('textarea[name=message]');
  		var returnError = false;

  		//Simple validation to make sure user entered something
  		//Add your own error checking here with JS, but also do some error checking with PHP.
  		//If error found, add hightlight class to the text field
  		if (name.val()=='') {
  			name.addClass('error');
  			returnError = true;
  		} else name.removeClass('error');

  		if (phone.val()=='') {
  			phone.addClass('error');
  			returnError = true;
  		} else phone.removeClass('error');

  		if(!regexMobile.test(phone.val()) && !regexPhone.test(phone.val())) {
            phone.addClass('error');
            returnError = true;
  		} else phone.removeClass('error');

  		if (message.val()=='') {
        message.addClass('error');
  			returnError = true;
  		} else message.removeClass('error');

  		// Highlight all error fields, then quit.
  		if(returnError == true){
  			return false;
  		}
      $("#baiduMessagePostForm").submit();

      _this.handleAlertShow();
      $(".form").find('input[type=text], textarea').val("");
    });
  },

  render : function() {
    var baiduMessagePostStyle = {
      display: "none"
    };
    var alertMessage = <div></div>;
    if (this.state.alertVisible) {
      alertMessage = (
        <Alert bsStyle='success' onDismiss={this.handleAlertDismiss}>
        您的留言已经发出。谢谢！
        </Alert>
      );
    }
    return (
      <div className="col-md-3">
        <h1 className="title">请您<span className="colortext">留言</span></h1>
        {alertMessage}
        <form id="baiduMessagePostForm" action="http://qiao.baidu.com/v3/?module=default&controller=index&action=doMess&siteid=3154243&page_id=&ucid=5585554"
          method="post" encType="application/x-www-form-urlencoded" target="baiduMessagePost" className="form">
        <div className="form">
          <input className="col-md-6" type="text" name="bd_bp_messName" placeholder="姓名" />
          <input className="col-md-6" type="text" name="bd_bp_messPhone" placeholder="联系方式" />
          <textarea className="col-md-12" name="bd_bp_messName" rows="4" placeholder="请您在此留言，我们将尽快与您联系。"></textarea>
          <input type="hidden" name="bd_bp_tick" value="1434591035071" />
          <input type="hidden" name="bd_bp_bid" value="ca71a1601da1f04ddff248fd" />
          <input type="hidden" name="bd_bp_title" value="武汉市洪山区康乐家政服务中心_专业提供月嫂、育婴师、钟点工、保姆、保洁、护工等家政服务" />
          <input type="button" id="submit" className="btn" value="发送" />
        </div>
        </form>
        <iframe name="baiduMessagePost" style={baiduMessagePostStyle}/>
      </div>
    );
  },

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  },

  handleAlertShow() {
    this.setState({alertVisible: true});
  }

});

module.exports = ContactForm;
