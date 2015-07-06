var React = require("react"),
    Link = require("react-router").Link,
    pressData = require("../../data/press-data");

var PressList = React.createClass({

  render: function() {
    var imageStyle = {
      maxWidth: "180px"
    };
    var catalog = this.props.params.catalog;
    var category = pressData.lookupCategory(catalog);
    return (
      <div className="row blogindex">
        <div className="col-md-12">
        {category.articles.map(item => (
        <div key={item.id}>
          <div className="text-center">
            <h2>{item.title}</h2>
            <span className="meta bottomspace30">By <Link to={"/"} title={item.author} rel="author">{item.author}</Link><span className="bullet">·</span> {item.date} </span>
          </div>
          <p className="lead">
            <img src="assets/images/press/notice.jpg" className="pull-left img-responsive" alt="" style={imageStyle} />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla non pulvinar. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut eu risus enim, ut pulvinar lectus.
          </p>
          <Link to={"/press/${category.name}/${item.id}"} className="btn btn-default">详细内容</Link>
          <hr className="clearfix" />
        </div>
        ))}
        </div>
      </div>
    );
  }
});

module.exports = PressList;
