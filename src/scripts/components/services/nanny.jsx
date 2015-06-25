var React = require("react"),
    Table = require("react-bootstrap").Table;

var Nanny = React.createClass({
  getInitialState: function () {
    return {
      priceTable: [
        {level: "初级", price:"￥2400-2600元", oneYear: "￥1000元", halfYear:"￥800元", threeMonths: "￥600元", memo: "其中含100元/年双向保险费"},
        {level: "中级", price:"￥2600-3000元", oneYear: "￥1000元", halfYear:"￥800元", threeMonths: "￥600元", memo: "其中含100元/年双向保险费"},
        {level: "高级", price:"￥3000元以上", oneYear: "￥1000元", halfYear:"￥800元", threeMonths: "￥600元", memo: "其中含100元/年双向保险费"}
      ]
    };
  },
  render : function() {
      var priceTable = this.state.priceTable.map(function (item, i) {
        return (
          <tr key={i}>
              <td>{item.level}</td>
              <td>{item.price}</td>
              <td>{item.oneYear}</td>
              <td>{item.halfYear}</td>
              <td>{item.threeMonths}</td>
              <td>{item.memo}</td>
          </tr>
        );
      });
    return (
      <section id="nannyIntro">
        <h1 className="smalltitle"><br/><span>白班、住家保姆服务简介</span></h1>
        <p>
        武汉市洪山区康乐家政服务中心家务助理主要通过省妇联、劳动就业部门、阳光工程办、劳务职介部门等专业输送单位选送，来源安全可靠，双重体检。公司来源渠道辐射全省各地。
        </p>
        <p>
        家务助理来到公司后，必须接受择业观念、职业道德、日常礼仪、法律知识、安全知识、买菜记账、家庭烹饪、衣物洗熨、衣物消毒、居家保洁、电器使用、花草养护、护理常识、照顾老幼、宠物饲养、家庭保健等课程的强化培训，考试合格上岗大都具备了基本的家政服务技能，获得上岗资格，为江城的千家万户提供了专业的家政服务。
        </p>
        <h1 className="smalltitle"><br/><span>白班、住家保姆服务内容</span></h1>
        <p>钟点工是一种比保姆更加灵活的家政服务形式，其服务形式主要采取三种方式：</p>
        <ul className="icons circleoklist">
					<li>家居保洁</li>
					<li>衣物洗涤、熨烫与保养</li>
					<li>家庭采购</li>
          <li>简易家庭餐制作</li>
          <li>看护小孩及婴幼儿辅助护理</li>
          <li>日常保健：体格训练、婴幼儿被动操、婴幼儿健身操。</li>
          <li>接送小孩上学</li>
          <li>照顾老人或病人</li>
          <li>宠物饲养、花草养护等</li>
				</ul>
        <h1 className="smalltitle"><br/><span>收费标准</span></h1>
        <Table bordered responsive>
          <thead>
            <tr>
              <th rowSpan="2">级别</th>
              <th rowSpan="2">工资标准</th>
              <th colSpan="3">中介服务费</th>
              <th rowSpan="2">备注</th>
            </tr>
            <tr>
              <th>一年</th>
              <th>半年</th>
              <th>三个月</th>
            </tr>
  				</thead>
  				<tbody>
          {priceTable}
          </tbody>
				</Table>
        <div className="box effect6">
					<h4>说明</h4>
          <ul className="icons asterisklist">
						<li>会员中介服务费一次性收取，雇主中途解约不予退还。</li>
						<li>此收费标准自2014年1月1日起执行。</li>
					</ul>
				</div>
      </section>
    );
  }

});

module.exports = Nanny;
