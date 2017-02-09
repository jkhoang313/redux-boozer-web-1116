import React from 'react'
import { connect } from 'react-redux'
import { selectCocktail } from '../actions'


class CocktailShow extends React.Component {
  render() {

      let cocktail = this.props.currentCocktail
      
      return <div><h1>{cocktail.name}</h1>
      <p>{cocktail.description}</p>
      <h4> Ingredients: </h4>
      
      <ul>
      {cocktail.proportions ? 
        <span>
          {cocktail.proportions.map((proportion, i) =>
          <li key={i}> {proportion.amount}  {proportion.ingredient_name}</li>
        )}
          </span>
          : 
          <p> No ingredients listed </p>
        }

      </ul>

      </div>
    }
  }

function mapStateToProps(state) {

    const cocktail = state.cocktails.find(cocktail => cocktail.id == state.currentCocktail) || {}


  return {
    // cocktail: cocktail
    cocktails: state.cocktails,
    currentCocktail: cocktail
  }
}


export default connect(mapStateToProps)(CocktailShow)
