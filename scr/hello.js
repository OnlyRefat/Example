var React = require('react');

module.exports = function(){

	var SelectBox = React.createClass({
		
		  getInitialState: function() {
    			return {data: ['S','M','L','XL'],selected:'S'}
  			},

			  handleClick: function(e) {
			  //  console.log(this.state.data);
			  		
			  		this.setState({selected:jQuery(e.target).find(":selected").text()});
			  },

	      render: function() {
	      		//console.log(this.state.data);
	      	
	      	var singleSelect =	this.state.data.map(function(index,element){

	      		return(
	      			<option value ={index} > {index}</option>
	      			)
	      		}.bind(this));


	    return (
	      <div className="commentBox">
	      	<select  onChange={this.handleClick}>{singleSelect}</select>
	      	<span>  You have selected {this.state.selected} </span>
		  </div>	    
	    );}
	});


	React.render(
	  <SelectBox />,
	  document.getElementById('example')
	);
}
