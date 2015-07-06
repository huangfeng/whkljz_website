var React = require("react"),
    Link = require("react-router").Link,
    pressData = require("../../data/press-data");

var PressItem = React.createClass({

  render: function() {
    var catalog = this.props.params.catalog;
    var articleId = this.props.params.item;
    var article = pressData.lookupArticle(catalog, articleId);
    return (
      <section>
        <div className="col-md-12 animated anim-slide notransition">
          <div className="text-center">
            <h2>{article.title}</h2>
            <span className="meta bottomspace30">By
              <Link to="/" title={article.author} rel="author"> {article.author} </Link>
              <span className="bullet">•</span> {article.date}
            </span>
          </div>
          <div className="row">
            <div className="col-md-12" dangerouslySetInnerHTML={{__html: article.content}} />
          </div>
        </div>
      </section>
    );
  }

});

module.exports = PressItem;
