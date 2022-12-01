import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchMealDetails } from '../../actions/index';
import IngredientAndMeasure from "../searchAllMeals/Ingredients";

const MealCountryDetailComponent = () => {
    
  const mealDetails = useSelector((state) => state.details.mealDetails);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchMealDetails(params.id));
  });

  return (
    <div className="container">
      {mealDetails !== undefined && mealDetails.meals
            && (
            <div className='detail-container'>
                  <h2 className='meal-detail-title'>{mealDetails.meals[0].strMeal}</h2>
                  <p className='meal-detail-area'>Area: {mealDetails.meals[0].strArea}</p>
                <div className="img-container">
                    <img className="meal-detail-img" src={mealDetails.meals[0].strMealThumb} alt = "lovely food"/>
                </div>
                <div className="mealDetails">
                    <p className="meal-prep-ins">{mealDetails.meals[0].strInstructions}</p>
                    <IngredientAndMeasure meal ={mealDetails.meals[0]} />
                    <Link to ="/mealbycountry"><button className='cancel-btn'>Return to previous page</button></Link>
                </div>
            </div>
            )}
    </div>
  );
};

export default MealCountryDetailComponent;