import React, { useState } from "react";
import { Link } from "react-router-dom";
import IngredientAndMeasure from "../searchAllMeals/Ingredients";
import axios from "axios";
import "./randomMeal.css";

const RandomMeal = () => {
    const [data, setData] = useState({meals: []});
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const handleClick = async () => {
        setIsLoading(true);
        try {
            const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php',{
                headers: {
                    Accept: 'application/json',
                },
            });
        
            console.log('data is: ', JSON.stringify(data,null,4));
            setData(data);

        } catch (err) {
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    };
        return (
            <div className="ran-container">
                {err && <h2>{err}</h2>}
                <h3 className="ran-title">Tired of finding out what to eat? Heres a button to find a random meal</h3>
                <button className="ran-btn" onClick={handleClick}>Fetch random recipe</button>
                <p className="ran-info">Did you find what you were looking for? If not try our other options</p>
                <Link to ="/"><button className='cancel-btn'>Return to main menu</button></Link>
                {isLoading && <h2>Loading...</h2>}
                {data.meals.map(meals => {
                    return (
                        <div key ={meals.idMeal}className="meal-card">
                        <div className="img-container">
                            <img className="meal-img" src={meals.strMealThumb} alt = "lovely food"/>
                        </div>
                        <div className="meal-info-container">
                            <h1 className="meal-title">{meals.strMeal}</h1>
                            <p className="meal-origin">Origin: {meals.strArea}</p>
                            {meals.strTags
                            ? <p className="meal-tags"> Tags: {meals.strTags}</p> 
                            : <p className="meal-tags"> Tags: No tags found</p>}
                            <h2 className="meal-prep-title">Recipe:</h2>
                            <p className="meal-prep-ins">{meals.strInstructions}</p>
                            <p>Ingredients:</p>
                            <IngredientAndMeasure meal ={meals} />  
                        </div>
                    </div>

                    );
                })}

            </div>
        );
}

export default RandomMeal;