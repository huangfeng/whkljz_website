var React = require("react");

var IntroNote = React.createClass({

  render : function() {
    return (
      <section className="intro-note topspace10">
  		<div className="container">
  			<div className="row">
  				<div className="col-md-12 text-center">
  					<h1>安康 . <span className="colortext">舒心 </span>. 快乐</h1>
  					<p>
              专业致力于高级家政管理服务、企事业单位公共保洁、家庭钟点工服务。
  					</p>
  				</div>
  			</div>
  		</div>
  		</section>
    );
  }

});

module.exports = IntroNote;
