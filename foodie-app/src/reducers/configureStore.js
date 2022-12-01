import { configureStore } from '@reduxjs/toolkit'
import mealsReducer from './meals';
import mealDetailsReducer from './detailedMeal';
import mealIngredientsReducer from './ingredientMeal';
import mealAreaReducer from './mealCountry';


const store = configureStore({
  reducer: {
    meals: mealsReducer,
    details: mealDetailsReducer,
    ingredients: mealIngredientsReducer,
    country: mealAreaReducer,
  }
})

export default store;