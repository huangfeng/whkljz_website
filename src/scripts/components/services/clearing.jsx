var React = require("react"),
    Table = require("react-bootstrap").Table;

var Clearing = React.createClass({

  getInitialState: function () {
    return {
      priceTable: [
        {type: "新房保洁—家庭开荒", price:"￥4-4.5元/平方", memo: "100元起步"},
        {type: "新房保洁—单位开荒", price:"￥4-4.5元/平方", memo: "按建筑面积和难易程度"},
        {type: "地板抛光打蜡—初次打蜡", price:"￥3.5元/平方", memo: "100元起步"},
        {type: "地板抛光打蜡—非初次打蜡", price:"￥4元/平方", memo: "150元起步"},
        {type: "地毯清洗—化纤地毯", price:"￥3.5元/平方", memo: "150元起步"},
        {type: "地毯清洗—混纺地毯", price:"￥4元/平方", memo: "150元起步"},
        {type: "地毯清洗—羊毛地毯", price:"￥5元/平方", memo: "150元起步"},
        {type: "抽油烟机清洗", price:"￥150-200元/台", memo: ""}
      ]
    };
  },

  render : function() {
    var priceTable = this.state.priceTable.map(function (item, i) {
      return (
        <tr key={i}>
          <td>{item.type}</td>
          <td>{item.price}</td>
          <td>{item.memo}</td>
        </tr>
      );
    });
    return (
      <section id="clearingIntro">
        <h1 className="smalltitle"><br/><span>开荒保洁服务简介</span></h1>
        <p>
        武汉市洪山区康乐家政服务中心清洗保洁中心拥有一支专业、敬业的清洁队伍，为了适应新房清洁的需要，
        本中心花巨资购置了一整套完备的新房清洁工具，先后承接了多个现代化小区的新房清洁，深得广大客户的好评。
        本中心清洁工在长期的新房清洁工作中积累了丰富的经验，服务中，始终坚持以重合同、守信誉、求质量、
        诚信服务为经营宗旨，欢迎广大客户无论何时何地来电洽谈，本中心将竭诚为您服务。
        </p>
        <h1 className="smalltitle"><br/><span>开荒保洁服务内容</span></h1>
        <ul className="icons circleoklist">
          <li>地毯清洗</li>
          <li>外墙清洗</li>
          <li>沙发清洗</li>
          <li>电脑清洗</li>
          <li>油烟机清洗</li>
          <li>吊灯清洗</li>
          <li>家用空调清洗</li>
          <li>地板清洗打蜡和翻新</li>
          <li>地面砖翻新</li>
          <li>家庭日常保洁</li>
          <li>新居开荒</li>
          <li>同时，还对物业花园、大型酒店、超市、工厂、机关学校、医院、商务楼提供保洁托管服务</li>
        </ul>
        <h1 className="smalltitle"><br/><span>收费标准</span></h1>
        <Table bordered responsive>
          <thead>
            <tr>
              <th>服务类型</th>
              <th>收费标准</th>
              <th>备注</th>
            </tr>
          </thead>
          <tbody>
          {priceTable}
          </tbody>
        </Table>
        <div className="box effect6">
          <h4>说明</h4>
          <ul className="icons asterisklist">
            <li>此收费标准自2014年1月1日起执行。</li>
          </ul>
        </div>
      </section>
    );
  }

});

module.exports = Clearing;
