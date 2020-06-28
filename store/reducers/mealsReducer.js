import {MEALS} from '../../data/dummy-data'
import {TOGGLE_FAVORITE, SET_FILTERS} from '../actions/mealsAction'

const INITIALSTATE ={
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}

const mealReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE: 
      const favFoundIndex = state.favoriteMeals.findIndex(meal => meal.id === action.payload)
      if(favFoundIndex >= 0){
        const updatedfavorites = [...state.favoriteMeals]
        updatedfavorites.splice(favFoundIndex, 1)
        return{...state, favoriteMeals: updatedfavorites}
      }else{
        const selectedMeal = state.meals.find(meal => meal.id === action.payload)
        return{...state, favoriteMeals: state.favoriteMeals.concat(selectedMeal)}
      }      
    
    case SET_FILTERS:
      const filterSettings = action.payload
      const filteredMeals = state.meals.filter(meal => {
        if(filterSettings.isGlutenFree && !meal.isGlutenFree){
          return false
        }
        if(filterSettings.isLactoseFree && !meal.isLactoseFree){
          return false
        }
        if(filterSettings.isVegan && !meal.isVegan){
          return false
        }
        if(filterSettings.isVegetarian && !meal.isVegetarian){
          return false
        }
        return true
      });

      return{
        ...state, filteredMeals
      }


    default:
      return state
  }
}

export default mealReducer