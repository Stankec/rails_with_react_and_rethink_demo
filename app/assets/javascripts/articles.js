var DOM = React.DOM;

window.ShowArticle = React.createClass({
  name: "ShowArticle",
  render: function() {
    return  DOM.div(null,
              DOM.p(null,
                DOM.strong(null, "Title: "),
                this.props.title
              ),
              DOM.p(null,
                DOM.strong(null, "Text: "),
                this.props.text
              )
            );
  }
});


var ShowArticleFactory = React.createFactory(ShowArticle);

$(function() {
  return $('[data-reactive]').each(function(_nop, element) {
    var reactivePath, source;
    reactivePath = $(element).attr('data-reactive');
    source = new EventSource(reactivePath);
    return source.addEventListener('message', function(e) {
      return React.render(ShowArticleFactory(JSON.parse(e.data)), element);
    });
  });
});
