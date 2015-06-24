var React = require("react"),
    Table = require("react-bootstrap").Table;

var HourlyWorker = React.createClass({

  render : function() {
    return (
      <section id="hourlyWorkerIntro">
        <h1 className="smalltitle"><br/><span>钟点工服务简介</span></h1>
        <p>武汉市洪山区康乐家政服务中心有一批经过专业培训的经验丰富的钟点工队伍，钟点工统一形象，包括统一的工作制服、佩戴工牌、使用统一的清洁工具；统一管理，包括培训、制定服务标准、服务流程、食宿管理。</p>
        <p>我们的超级钟点管家经过专业的全面培训，具有专业的家居清洁、洗衣熨烫、配菜及烹饪技能，武汉市洪山区康乐家政服务中心钟点随时为您提供专业的家庭服务。</p>
        <h1 className="smalltitle"><br/><span>服务内容</span></h1>
        <p>钟点工是一种比保姆更加灵活的家政服务形式，其服务形式主要采取三种方式：</p>
        <h4>（1）临时钟点服务</h4>
        <p>时间从3小时到数小时不等，根据您的要求，上门服务，收费标准以实际服务时间计算，每小时收费20元，此外，每次公司收20元介绍费。</p>
        <h4>（2）随叫随到套票</h4>
        <p>每次3小时以上，随时使用，不收介绍费。</p>
        <h4>（3）固定钟点服务</h4>
        <p>根据您的要求，可以每天、每周、每月在特定的时间上门服务，比如说，每周1～5，下午5：00～8：00，我们的熟手钟点工主要服务范围包括：买菜、做饭、家居清洁等。</p>
        <h1 className="smalltitle"><br/><span>收费标准</span></h1>
        <h4>（1）会员制</h4>
        <Table bordered responsive>
          <thead>
        		<tr>
        			<th>类别</th>
              <th colSpan="2">说明</th>
              <th>会员费</th>
              <th>跟踪</th>
              <th>服务费</th>
              <th>工资标准</th>
              <th>备注</th>
            </tr>
  				</thead>
  				<tbody>
            <tr>
              <td>包月</td>
              <td>每周工作六天，周休一天</td>
              <td>每次4小时</td>
              <td>￥800元</td>
            </tr>
          </tbody>
				</Table>

      </section>
    );
  }

});

module.exports = HourlyWorker;
