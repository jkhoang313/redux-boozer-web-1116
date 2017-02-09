const defaultCocktails = [{id: 1, name: 'Gin and Tonic', description: "2 shots of gin, half a glass of tonic, 3 ice cubes"}, {id: 2, name: 'Old Fashioned', description: "2 shots of bourbon, 2 dashes of bitters, few dashes of water, 1 sugar cube"}, {id: 3, name: 'Negroni', description: "2 shots of gine, 1 oz of vermouth, 1 oz of Campari"}, {id: 4, name: 'Roy Rogers', description: "a few splashes of grenadine syrup, filler up with your choice of cola drink"}];

export function fetchCocktails() {
  return {type: "FETCH_COCKTAILS", payload: defaultCocktails}
}

export function selectCocktail(key) {
  return {type: "SELECT_COCKTAIL", payload: key}
}

export function addCocktail(cocktail){
	return {
		type: 'ADD_COCKTAIL',
		payload: cocktail
	}
}

export function hideShowCocktail(){
	return {type: "HIDE_COCKTAIL"}
}
