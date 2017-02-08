import React from 'react'
import { connect } from 'react-redux'
import { fetchCocktails, selectCocktail } from '../actions'

class CocktailList extends React.Component {
  componentDidMount() {
    this.props.fetchCocktails()
  }

  handleClick(event) {
    this.props.selectCocktail(event.target.dataset.id)
  }

  render() {
    const cocktails = this.props.cocktails
    return (
      <div>
        <h2>All Cocktails</h2>
        <ul className="col-md-4">
          { cocktails.map( (cocktail, index) => {
            return <li key={cocktail.id} data-id={cocktail.id} onClick={this.handleClick.bind(this)}>{cocktail.name}</li>
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
  return {
    fetchCocktails: function() {
      var action = fetchCocktails()
      dispatch(action)
    },
    selectCocktail: function(key) {
      var action = selectCocktail(key)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CocktailList)
