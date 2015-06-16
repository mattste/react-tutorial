var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <h1>Hello World!</h1>
        </div>
      </div> 
    );
  }  
});

React.render(
  <App />, 
  document.getElementById('app')
);