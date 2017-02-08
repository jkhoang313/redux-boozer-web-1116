import React from 'react'
import { connect } from 'react-redux'
import { fetchCocktails } from '../actions'

class CocktailList extends React.Component {
  componentDidMount() {
    this.props.fetchCocktails()
  }

  render() {
    const cocktails = this.props.cocktails
    return (
      <div>
        <h2>All Cocktails</h2>
        <ul>
          { cocktails.map( (cocktail, index) => {
            return <li key={index}>{cocktail.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {cocktails: state.cocktails}
}

function mapDispatchToProps(dispatch) {
  return {fetchCocktails: function() {
    var action = fetchCocktails()
    dispatch(action)
  }}
}

export default connect(mapStateToProps, mapDispatchToProps)(CocktailList)
