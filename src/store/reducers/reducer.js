import {ADD_MEAL, CHECK_MOOD, EDIT_MEAL, REMOVE_INGREDIENT} from '../actions/actionType';

export const initialState = {
  meals: [{
    day: '2019-06-01',
    meal: 0,
    mood: 0,
    ingredients: [
      {name: 'spaghetti', weight: '100g'},
      {name: 'ziemniaki', weight: '200g'},
      {name: 'pies', weight: '250g'}
    ]
  },
  {
    day: '2019-06-02',
    meal: 1,
    mood: 1,
    ingredients: [
      {name: 'spaghetti', weight: '100g'},
      {name: 'ziemniaki', weight: '200g'},
      {name: 'pies', weight: '250g'}
    ]
  },
  {
    day: '2019-06-01',
    meal: 2,
    mood: 2,
    ingredients: [
      {name: 'spaghetti', weight: '100g'},
      {name: 'ziemniaki', weight: '200g'},
      {name: 'pies', weight: '250g'}
    ]
  }]
};

const findIndex = (state, day, meal) => {
    return state.meals.findIndex(elem => elem.day === day && elem.meal === meal);
};

const removeIngredient = (state, action) => {
  const newIngs = state.meals[action.path[0]].ingredients.filter((_, index) => index !== action.path[1]);
  const newMeals = state.meals.map((meal, index) => {
    if(index === action.path[0]){
      return {...meal, ingredients: newIngs};
    }
    return meal;
  });
  return {...state, meals: newMeals};
};

const addMeal = (state, action) => {
    const meal = state.meals[findIndex(state, action.path[0].day, action.path[0].meal)];
    let newMeals = [];
    if (meal) {
        for (let i = 0; i < action.path[0].ingredients.length; i++) {
            meal.ingredients = [...meal.ingredients, action.path[0].ingredients[i]];
        }
        newMeals = [...state.meals, '']
    } else {
        newMeals = [...state.meals, action.path[0]];
    }
    return {...state, meals: newMeals};
};

const editMeal = (state, action) => {
    const meal = state.meals[findIndex(state, action.path[0].day, action.path[0].meal)];
    let newMeals = [];
    if (meal) {
        meal.ingredients[action.path[2]].name = action.path[1].name;
        meal.ingredients[action.path[2]].weight = action.path[1].weight;
        newMeals = [...state.meals, '']
    }
    return {...state, meals: newMeals};
};

const checkMood = (state, action) => {
    if (action.path[0].day === undefined || action.path[0].meal === undefined) {
        return {...state, meals: state.meals}
    }
    const meal = state.meals[findIndex(state, action.path[0].day, action.path[0].meal)];
    let newMeals = [];
    if (meal) {
        meal.mood = action.path[1];
        newMeals = [...state.meals, '']
    }
    return {...state, meals: newMeals};
};

const reducer = (state, action) => {
    switch (action.type) {
      case REMOVE_INGREDIENT:
          return removeIngredient(state, action);
      case ADD_MEAL:
          return addMeal(state, action);
      case EDIT_MEAL:
          return editMeal(state, action);
      case CHECK_MOOD:
          return checkMood(state, action);
      default:
        return state;
  }
};

export default reducer;