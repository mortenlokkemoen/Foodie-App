import { GET_MEAL, GET_MEAL_ERROR, GET_MEAL_SUCCESS } from "../actions/index";

const initialState = {
    meals: [],
    error: '',
    isLoading: false,
  };

  const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MEAL:
        return {
          ...state,
          isLoading: true,
        };
      case GET_MEAL_SUCCESS:
        return {
          ...state,
          meals: action.payload,
          isLoading: false,
        };
      case GET_MEAL_ERROR:
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
      default:
        return state;
    }
  };
  
  export default mealsReducer;