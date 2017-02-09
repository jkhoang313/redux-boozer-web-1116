export default function currentCocktailReducer(state="", action) {
  switch(action.type) {
    case "SELECT_COCKTAIL":
      return action.payload
    case "HIDE_COCKTAIL":
    	return null
    case "ADD_COCKTAIL":
    	return action.payload.id
    default:
      return state
  }
}
