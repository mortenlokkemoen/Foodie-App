import { GET_MEAL_AREA } from "../actions/index";

const initialState = {
    mealArea: [],
  };
  
  const mealAreaReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MEAL_AREA:
        return {
          ...state,
          mealArea: action.payload,
        };
      default:
        return state;
    }
  };
  export default mealAreaReducer;
  