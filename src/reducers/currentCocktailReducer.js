export default function currentCocktailReducer(state="", action) {
  switch(action.type) {
    case "SELECT_COCKTAIL":
      return action.payload
    case "HIDE_COCKTAIL":
    	return null
    default:
      return state
  }
}
