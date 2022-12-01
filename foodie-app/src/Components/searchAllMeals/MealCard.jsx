import React from "react";
import IngredientAndMeasure from "./Ingredients";
import "./mealCard.css";

const MealCard = (getMeal) => {

        return (

            <div key ={getMeal.data.idMeal} className="meal-card">
                <div className="img-container">
                    <img className="meal-img" src={getMeal.data.strMealThumb} alt = "lovely food"/>
                </div>
                <div className="meal-info-container">
                    <h1 className="meal-title">{getMeal.data.strMeal}</h1>
                    <p className="meal-origin">Origin: {getMeal.data.strArea}</p>
                    {getMeal.data.strTags 
                    ? <p className="meal-tags"> Tags: {getMeal.data.strTags}</p> 
                    : <p className="meal-tags"> Tags: No tags found</p>}
                    <h2 className="meal-prep-title">Recipe:</h2>
                    <p className="meal-prep-ins">{getMeal.data.strInstructions}</p>
                    <p>Ingredients:</p>
                        <IngredientAndMeasure meal ={getMeal.data} />
                </div>
            </div>
        )
}

export default MealCard;