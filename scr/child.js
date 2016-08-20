var React = require('react');

	var Child = React.createClass({
		
		getInitialState: function() {
    	return {}
  	},
	  render: function() {
	      		//console.log(this.state.data);
	    return (
	      <div className="commentBox">
	      	Child Component
		  </div>	    
	    );
	  }
	});

module.exports = Child;