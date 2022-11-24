import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./randomMeal.css";

const RandomMeal = () => {
    const [data, setData] = useState({meals: []});
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const handleClick = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php',{
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });
            console.log(response);
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Result is: ', JSON.stringify(result,null,4));
            setData(result);

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
                            <p className="meal-tags">Tags:{meals.strTags}</p>
                            <h2 className="meal-prep-title">Recipe:</h2>
                            <p className="meal-prep-ins">{meals.strInstructions}</p>
                            <p>Ingredients:</p>
                        <div className="ingrediant-container">
                            <p className="ingr">{meals.strIngredient1}<br/>{meals.strMeasure1}</p>
                            <p className="ingr">{meals.strIngredient2}<br/>{meals.strMeasure2}</p>
                            <p className="ingr">{meals.strIngredient3}<br/>{meals.strMeasure3}</p>
                            <p className="ingr">{meals.strIngredient4}<br/>{meals.strMeasure4}</p>
                            <p className="ingr">{meals.strIngredient5}<br/>{meals.strMeasure5}</p>
                            <p className="ingr">{meals.strIngredient6}<br/>{meals.strMeasure6}</p>
                            <p className="ingr">{meals.strIngredient7}<br/>{meals.strMeasure7}</p>
                            <p className="ingr">{meals.strIngredient8}<br/>{meals.strMeasure8}</p>
                        </div>   
                        </div>
                    </div>

                    );
                })}

            </div>
        );
}

export default RandomMeal;