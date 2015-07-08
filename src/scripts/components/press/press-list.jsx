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
    var imagePath = "assets/images/press/notice.jpg";
    if (catalog == "food") {
      imagePath = "assets/images/press/food.jpg";
    } else if (catalog == "life") {
      imagePath = "assets/images/press/life.jpg";
    } else if (catalog == "health") {
      imagePath = "assets/images/press/health.jpg";
    } else if (catalog == "news") {
      imagePath = null;
    }
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
            <img src={!imagePath ? item.imagePath : imagePath} className="pull-left img-responsive" alt="" style={imageStyle} />
            <span dangerouslySetInnerHTML={{__html: item.abstract}} />
          </p>
          <Link to={"/press/" + category.name + "/" + item.id} className="btn btn-default">详细内容</Link>
          <hr className="clearfix" />
        </div>
        ))}
        </div>
      </div>
    );
  }
});

module.exports = PressList;
