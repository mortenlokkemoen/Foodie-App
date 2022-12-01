import axios from "axios";

// consts for handling data
const GET_MEAL = 'get_meal';
const GET_MEAL_ERROR = 'get_meal_error';
const GET_MEAL_SUCCESS = 'get_meal_success';
const  GET_DETAILED_MEAL = 'get_detailed_meal';
const GET_MEAL_INGR = 'get_meal_ingr';
const GET_MEAL_AREA = 'get_meal_area';


// Payload data
const getMeals = () => ({
  type: GET_MEAL,
});

const getMealsSuccess = (meal) => ({
  type: GET_MEAL_SUCCESS,
  payload: meal,
});

const getMealsError = (error) => ({
  type: GET_MEAL_ERROR,
  payload: error,
});

const getMealDetails = (id) => ({
  type: GET_DETAILED_MEAL,
  payload: id,
});

const getMealIngredients = (ingr) => ({
  type: GET_MEAL_INGR,
  payload: ingr,
})

const getMealbyCountry = (area) => ({
  type: GET_MEAL_AREA,
  payload: area,
})

// FETCHING DATA 
const fetchCategoryMeals = (category) => (dispatch) => {
  dispatch(getMeals);
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  axios.get(url).then((response) => {
    dispatch(getMealsSuccess(response.data.meals));
  })
    .catch((error) => dispatch(getMealsError(error.message)));
};

const fetchMealDetails = (id) => (dispatch) => {
  dispatch(getMeals);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  axios.get(url).then((response) => {
    dispatch(getMealDetails(response.data));
  })
    .catch((error) => dispatch(getMealsError(error.message)));
};

const fetchMealIngredients = (ingredients) => (dispatch) => {
  dispatch(getMeals);
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`;
  axios.get(url).then((response) =>{
    dispatch(getMealIngredients(response.data.meals))
  })
}

const fetchMealArea = (country) => (dispatch) => {
  dispatch(getMeals);
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`;
  axios.get(url).then((response) =>{
    dispatch(getMealbyCountry(response.data.meals))
  })
}

export {
  GET_MEAL, GET_MEAL_SUCCESS, GET_MEAL_ERROR, GET_DETAILED_MEAL, GET_MEAL_INGR,GET_MEAL_AREA,
  getMeals, getMealsSuccess, getMealsError, getMealDetails, getMealIngredients,getMealbyCountry, 
  fetchCategoryMeals, fetchMealDetails, fetchMealIngredients, fetchMealArea,
};