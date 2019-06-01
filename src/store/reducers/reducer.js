import {REMOVE_INGREDIENT} from '../actions/action';
import cloneDeep from 'lodash/cloneDeep';

const initialState = {
  meals: [{
    day: '2019-06-01',
    meal: 0,
    ingredients: [
      {name: 'spaghetti', weight: '100g'},
      {name: 'ziemniaki', weight: '200g'},
      {name: 'pies', weight: '250g'}
    ]
  },
  {
    day: '2019-06-02',
    meal: 1,
    ingredients: [
      {name: 'spaghetti', weight: '100g'},
      {name: 'ziemniaki', weight: '200g'},
      {name: 'pies', weight: '250g'}
    ]
  },
  {
    day: '2019-06-01',
    meal: 2,
    ingredients: [
      {name: 'spaghetti', weight: '100g'},
      {name: 'ziemniaki', weight: '200g'},
      {name: 'pies', weight: '250g'}
    ]
  }]
};

const removeIngredient = (state, action) => {
  const newIngs =state.meals[action.path[0]].ingredients.filter((_, index) => index !== action.path[1])
  const newMeals = state.meals.map((meal, index) => {
    if(index === action.path[0]){
      return {...meal, ingredients: newIngs};
    }
    return meal;
  })
  return {...state, meals: newMeals};
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
  case REMOVE_INGREDIENT:
    return removeIngredient(state, action);
  default:
    return state;
  }
};

export default reducer;