import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchMealArea, fetchMealDetails } from '../../actions/index';
import CountryFilter from './CountryFilter';



const MealbyCountry = () => {
  const meals = useSelector((state) => state.country.mealArea);
  const [country, setCountry] = useState('Norwegian');
  const dispatch = useDispatch();

   useEffect(() => {
    dispatch(fetchMealArea(country));
  },[country, dispatch]);

  const getMealDetails = (id) => {
    dispatch(fetchMealDetails(id));
  };

  const changeFilter = (e) => {
    setCountry(e.target.value);
  };

    return (
      <div className='category-container'>
          <nav className='category-navbar'>
            <CountryFilter handleFilterChange= {changeFilter} />
              <Link to ="/"><button className='cancel-btn'>Return to main menu</button></Link>
          </nav>
            {meals && meals.map((meal) => (
          <div key={meal.idMeal} className="card" role="button" tabIndex={0} onClick={() => getMealDetails(meal.idMeal)} onKeyDown={() => getMealDetails(meal.idMeal)}>
              <div className='category-img-container'>
                <img className="category-meal-img" src={meal.strMealThumb} alt={meal.strMeal} />
             </div>
            <div className="category-card-container">
              <h3 className="category-meal-title">Dish: {meal.strMeal}</h3>
              <p> Click on link to see how to make the dish!</p>
              <Link to={`meals/${meal.idMeal}`}>Recipe Details</Link>
            </div>
          </div>
        ))}
          </div>
    )
}

export default MealbyCountry;