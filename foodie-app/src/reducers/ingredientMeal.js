import { GET_MEAL_INGR } from "../actions/index";

const initialState = {
    mealIngredients: [],
  };
  
  const mealIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MEAL_INGR:
        return {
          ...state,
          mealIngredients: action.payload,
        };
      default:
        return state;
    }
  };
  export default mealIngredientsReducer;
  