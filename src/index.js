var ReactDOM = require('react-dom');
var React = require('react');

var CommentBox = require('./CommentBox');

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(
  <CommentBox url="http://localhost:3000/api/comments" />,
  document.getElementById('app')
);
