var React = require("react"),
    $ = window.$;

var ContactForm = React.createClass({

  componentDidMount : function() {
  $('#submit').click(function () {

  		//Get the data from all the fields
  		var name = $('input[name=name]');
  		var phone = $('input[name=phone]');
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

  		//organize the data
  		var data = {
        'bd_bp_messName': encodeURIComponent(name.val()),
        'bd_bp_messPhone': phone.val(),
        'bd_bp_messText': encodeURIComponent(message.val()),
        'bd_bp_tick': '1434591035071',
        'bd_bp_bid': 'ca71a1601da1f04ddff248fd',
        'bd_bp_title': encodeURIComponent('武汉市洪山区康乐家政服务中心_专业提供月嫂、育婴师、钟点工、保姆、保洁、护工等家政服务')
      }

  		//disabled all the text fields
  		$('.text').attr('disabled','true');

  		//show the loading sign
  		$('.loading').show();

      $.support.cors = true;
  		//start the ajax
  		$.ajax({
  			//this is the php file that processes the data and sends email
  			url: "http://qiao.baidu.com/v3/?module=default&controller=index&action=doMess&siteid=3154243&page_id=&ucid=5585554",

  			//GET method is used
  			type: "POST",

  			//pass the data
  			data: data,

  			//Do not cache the page
  			cache: false,

        contentType: "application/x-www-form-urlencoded",

        dataType: "html",

  			//success
  			success: function (html) {
          //show the success message
          $('.done').fadeIn('slow');
          $(".form").find('input[type=text], textarea').val("");
  			}
  		});

  		//cancel the submit button default behaviours
  		return false;
  	});
  },

  render : function() {
    return (
      <div className="col-md-3">
        <h1 className="title">请您<span className="colortext">留言</span></h1>
        <div className="done">
          <div className="alert alert-success">
            <button type="button" className="close" data-dismiss="alert">×</button>
            您的留言已经发出。谢谢！
          </div>
        </div>
        <div className="form">
          <input className="col-md-6" type="text" name="name" placeholder="姓名" />
          <input className="col-md-6" type="text" name="phone" placeholder="联系方式" />
          <textarea className="col-md-12" name="message" rows="4" placeholder="请您在此留言，我们将尽快与您联系。"></textarea>
          <input type="button" id="submit" className="btn" value="发送" />
        </div>
      </div>
    );
  }

});

module.exports = ContactForm;
