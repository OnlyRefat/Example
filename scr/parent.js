var React = require('react');
var Child = require('./child');

module.exports = function(){

	var Parent = React.createClass({
		
		getInitialState: function() {
    	return {}
  	},
	  render: function() {
	      		//console.log(this.state.data);
	    return (
	      <div className="commentBox">
	      	Parent Component
	      	<Child />
		  </div>	    
	    );}
	});


	React.render(
	  <Parent />,
	  document.getElementById('example')
	);
}
