import axios from 'axios'

export function fetchCocktails() {
  let cocktailList = axios.get('http://localhost:3000/api/v1/cocktails').then( response => response.data)
  return {type: "FETCH_COCKTAILS", payload: cocktailList}
}

export function selectCocktail(key) {
  return {type: "SELECT_COCKTAIL", payload: key}
}

export function addCocktail(cocktail){

  let newCocktail = axios.post('http://localhost:3000/api/v1/cocktails', { name: cocktail.name, description: cocktail.description } ).then( response => response.data )

	return {
		type: 'ADD_COCKTAIL',
		payload: newCocktail
	}
}

export function hideShowCocktail(){
	return {type: "HIDE_COCKTAIL"}
}
