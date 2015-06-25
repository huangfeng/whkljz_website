var React = require("react"),
    Table = require("react-bootstrap").Table;

var Nursemaid = React.createClass({
  getInitialState: function () {
    return {
      priceTable1: [
        {level: "初级", price:"￥4000-5000元",  memo: "月工作26天"},
        {level: "中级", price:"￥5000-6500元",  memo: "月工作26天"},
        {level: "高级", price:"￥6500-8000元",  memo: "月工作26天"},
        {level: "特级", price:"￥8000元",  memo: "月工作26天"}
      ],
      priceTable2: [
        {level: "育婴员", price:"￥2800-3000元", oneYear:"￥1000元", halfYear:"￥800元", threeMonths:"￥600元", memo:"其中含100元/年双向保险费"},
        {level: "育婴师", price:"￥2800-3000元", oneYear:"￥3000-3500元", halfYear:"￥800元", threeMonths:"￥600元", memo:"其中含100元/年双向保险费"},
        {level: "高级育婴师", price:"￥2800-3000元", oneYear:"￥3500元以上", halfYear:"￥800元", threeMonths:"￥600元", memo:"其中含100元/年双向保险费"}
      ]
    };
  },
  render : function() {
      var priceTable1 = this.state.priceTable1.map(function (item, i) {
        return (
          <tr key={i}>
              <td>{item.level}</td>
              <td>{item.price}</td>
              <td>{item.memo}</td>
          </tr>
        );
      });
      var priceTable2 = this.state.priceTable2.map(function (item, i) {
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
      <section id="nursemaidIntro">
        <h1 className="smalltitle"><br/><span>月嫂服务简介</span></h1>
        <p>
        武汉市洪山区康乐家政服务中心的员工毕业于正规的培训机构具有扎实的理论基础，毕业后大多在医院从事产科、儿科方面的工作，
        所以她们具有专业的护理知识，又有丰富的操作经验，更有良好的卫生习惯。所以将宝宝交给这样的专业人士照顾，产妇放心、宝宝又安心。
        </p>
        <p>
        在培训方面，本中心聘请了有专业临床经验并且从事几年月护工作的妇产科护士长或医生对员工进行：产妇伤口处理、乳房护理、
        婴儿的肚脐护理、早产儿的特别护理、尿疹的处理方法等方面的培训，公司还结合武汉地区环境、天气风俗习惯等特点对员工进行
        了关于产妇的营养煲汤、发奶汤、营养餐的特点培训，这样产妇和婴儿既可以得到全面、周到的照顾，又能科学舒服的渡过“月子”期。
        </p>
        <h1 className="smalltitle"><br/><span>月嫂服务内容</span></h1>
        <h4>产妇</h4>
        <p>营养膳食调配，乳房的护理，保健母乳喂养的指导，会阴冲洗及伤口护理，产妇一般身体状况的观察，护理及指导。</p>
        <h4>新生儿</h4>
        <p>生活护理：洗澡、抚触、喂奶、换尿布、包束、婴儿抱法。</p>
        <p>常见病防治：鹅口疮、脐带出血、新生儿黄疸、脐带、尿布疹护理等。</p>
        <p>新生儿成长的指导：断奶、添加辅食、母子情感交流等。</p>
        <h4>家政</h4>
        <p>为顾客提供护理产妇及婴儿范围内的家政服务，产妇的营养膳食搭配，衣服清洁、消毒、新生儿尿布、衣服、奶瓶的清洁、消毒等。</p>
        <h1 className="smalltitle"><br/><span>收费标准</span></h1>
        <Table bordered responsive>
          <thead>
            <tr>
              <th>级别</th>
              <th>工资标准</th>
              <th>备注</th>
            </tr>
  				</thead>
  				<tbody>
          {priceTable1}
          </tbody>
				</Table>
        <div className="box effect6">
					<h4>说明</h4>
          <ul className="icons asterisklist">
						<li>以上服务价格为单胎服务费，双胞胎加收500元。</li>
						<li>若提前来公司预定可享受折扣优惠。</li>
					</ul>
				</div>
        <h1 className="smalltitle"><br/><span>育婴师服务简介</span></h1>
        <p>
        孩子的早期教育是一项复杂而又重要的工作，往往很多家长忽视了这一点，从而使孩子输在了起跑线上。育婴师是近年出现的一个全新职业，
        我们通称为育婴嫂（0-1岁）和育儿嫂（1-3岁），已被国家劳动和社会保障部列入《中华人民共和国职业大典》，拥有严格规范的职业标准，它
        不同于通常意义上的保姆，也不同于我们常听说的月嫂，其工作职能体现为对0~3岁婴幼儿的精心护理、科学喂养和早期教育，它的出现满足了广
        大家长对婴幼儿喂养和早教的专业化需求，填补了婴幼儿早期教育的市场空白。
        </p>
        <p>
        本中心现在有近百名育婴师为您服务。本中心的育婴早教员一般是学历达到高中（中专）学历以上，年龄在45岁以下的一专多能服务员工，她们
        的强项是科学育儿、早教幼教。这个服务群体都是经过公司职业技能培训中心长达一个月以上的系统规范培训并通过理论、实操两个方面考核定级后上岗的员工。
        </p>
        <h1 className="smalltitle"><br/><span>育婴早教服务内容</span></h1>
        <p>主要针对0-3岁婴幼儿提供生活照料、日常健康护理及早期教育等工作，兼做一般家务。</p>
        <ul className="icons circleoklist">
					<li>生活照料：主要有饮食、饮水、睡眠、二便、三浴、卫生、营养配餐、辅食添加、衣服玩具等清洁；</li>
					<li>日常卫生与护理：生长监测、预防接种、常见疾病护理、预防铅中毒、预防意外伤害；</li>
					<li>启蒙开发：音乐智能、动作技能训练。其中大动作包括抬头、翻身、坐、爬、走、跑、跳；精细动作包括手、眼、脑协调；</li>
          <li>学前教育：游戏陪伴、儿歌舞蹈、英语教育、发展测评、社会行为及人格培养、实施个别化教学计划；</li>
          <li>生长测评：育婴师首先对宝宝生长发育的测评，根据测评结果，制定宝宝全方位的日计划、周计划、月计划，并进行实施，在实施过程中，随宝宝生长发育的情况，调整计划，再进行实施，使宝宝一天天健康快乐成长；</li>
          <li>日常保健：体格训练、婴幼儿被动操、婴幼儿健身操。</li>
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
          {priceTable2}
          </tbody>
        </Table>
        <div className="box effect6">
          <h4>说明</h4>
          <ul className="icons asterisklist">
            <li>以上服务价格为单胎服务费，双胞胎加收500元。</li>
            <li>会员中介服务费一次性收取，雇主中途解约不予退还。</li>
            <li>此收费标准自2014年1月1日起执行。</li>
          </ul>
        </div>
      </section>
    );
  }

});

module.exports = Nursemaid;
