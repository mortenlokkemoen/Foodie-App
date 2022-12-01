import { GET_DETAILED_MEAL } from "../actions/index";

const initialState = {
    mealDetails: [],
  };
  
  const mealDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_DETAILED_MEAL:
        return {
          ...state,
          mealDetails: action.payload,
        };
      default:
        return state;
    }
  };
  export default mealDetailsReducer;
  