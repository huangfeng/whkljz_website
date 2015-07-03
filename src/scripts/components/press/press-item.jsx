var React = require("react");

var PressItem = React.createClass({

  render: function() {
    var catalog = this.props.params.catalog;
    console.log("catalog:" + catalog);
    return (
      <section>
        pressItem
      </section>
    );
  }

});

module.exports = PressItem;
