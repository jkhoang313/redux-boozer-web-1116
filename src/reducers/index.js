import { combineReducers } from 'redux';
import cocktailsReducer from './cocktails_reducer';
import currentCocktailReducer from './currentCocktailReducer'

const rootReducer = combineReducers({
  cocktails: cocktailsReducer,
  currentCocktail: currentCocktailReducer
})

export default rootReducer
