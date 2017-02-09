export default function (state=[], action) {
  switch(action.type) {
    case "FETCH_COCKTAILS":
      return action.payload
     case 'ADD_COCKTAIL':
       return[...state, action.payload]
    default:
      return state;
  }
}
