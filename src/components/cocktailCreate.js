import React from 'react'
import { connect } from 'react-redux'
import { addCocktail, hideShowCocktail } from '../actions'


class CocktailCreate extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			name: '',
			description: ''
		}
	}

	handleOnNameChange(event){
    	this.setState({name: event.target.value})
  	}

  	handleOnDescriptionChange(event){
    	this.setState({description: event.target.value})
  	}

  	handleSubmit(event){
  		event.preventDefault()
  		this.props.addCocktail( this.state )
  		this.setState({name: '',
			description: ''})
  		this.props.hideShowCocktail()
  	}

  	render(){
  		console.log("rendering the form...")
  		return (
  			<div>
  			<h3> Add a Cocktail: </h3>
  			<form onSubmit={this.handleSubmit.bind(this)}>
	  			<p>
	  			<input type="text" onChange={this.handleOnNameChange.bind(this)} value={this.state.name}/>
	  			</p>
	  			<p>
	  			<input type="text" onChange={this.handleOnDescriptionChange.bind(this)} value={this.state.description}/>
	  			</p>
	  			<input type='submit' /> 
	  			</form>
	  		</div>

  			)
  	}
}

function mapDispatchToProps(dispatch){
  	return {
		addCocktail: function(cocktail){
			let action = addCocktail(cocktail)
		dispatch ( action )
  			},
  		hideShowCocktail: function(cocktail){
  			let action = hideShowCocktail()
  			dispatch ( action )
  		}
	}
}


export default connect(null, mapDispatchToProps)(CocktailCreate)







