import React from "react";
import "./mealCard.css";

const MealCard = (getMeal) => {

    if (getMeal.data.strTags === null) {
        return (
  
            <div key ={getMeal.data.idMeal} className="meal-card">
                <div className="img-container">
                    <img className="meal-img" src={getMeal.data.strMealThumb} alt = "lovely food"/>
                </div>
                <div className="meal-info-container">
                    <h1 className="meal-title">{getMeal.data.strMeal}</h1>
                    <p className="meal-origin">Origin: {getMeal.data.strArea}</p>
                    <p className="meal-tags">Tags:No tags found</p>
                    <h2 className="meal-prep-title">Recipe:</h2>
                    <p className="meal-prep-ins">{getMeal.data.strInstructions}</p>
                    <p>Ingredients:</p>
                        <div className="ingrediant-container">
                            <p className="ingr">{getMeal.data.strIngredient1}<br/>{getMeal.data.strMeasure1}</p>
                            <p className="ingr">{getMeal.data.strIngredient2}<br/>{getMeal.data.strMeasure2}</p>
                            <p className="ingr">{getMeal.data.strIngredient3}<br/>{getMeal.data.strMeasure3}</p>
                            <p className="ingr">{getMeal.data.strIngredient4}<br/>{getMeal.data.strMeasure4}</p>
                            <p className="ingr">{getMeal.data.strIngredient5}<br/>{getMeal.data.strMeasure5}</p>
                            <p className="ingr">{getMeal.data.strIngredient6}<br/>{getMeal.data.strMeasure6}</p>
                            <p className="ingr">{getMeal.data.strIngredient7}<br/>{getMeal.data.strMeasure7}</p>
                            <p className="ingr">{getMeal.data.strIngredient8}<br/>{getMeal.data.strMeasure8}</p>
                        </div>   
                </div>
            </div>
        )
    } else {
        return (
  
            <div key ={getMeal.data.idMeal} className="meal-card">
                <div className="img-container">
                    <img className="meal-img" src={getMeal.data.strMealThumb} alt = "lovely food"/>
                </div>
                <div className="meal-info-container">
                    <h1 className="meal-title">{getMeal.data.strMeal}</h1>
                    <p className="meal-origin">Origin: {getMeal.data.strArea}</p>
                    <p className="meal-tags">Tags:{getMeal.data.strTags}</p>
                    <h2 className="meal-prep-title">Recipe:</h2>
                    <p className="meal-prep-ins">{getMeal.data.strInstructions}</p>
                    <p>Ingredients:</p>
                        <div className="ingrediant-container">
                            <p className="ingr">{getMeal.data.strIngredient1}<br/>{getMeal.data.strMeasure1}</p>
                            <p className="ingr">{getMeal.data.strIngredient2}<br/>{getMeal.data.strMeasure2}</p>
                            <p className="ingr">{getMeal.data.strIngredient3}<br/>{getMeal.data.strMeasure3}</p>
                            <p className="ingr">{getMeal.data.strIngredient4}<br/>{getMeal.data.strMeasure4}</p>
                            <p className="ingr">{getMeal.data.strIngredient5}<br/>{getMeal.data.strMeasure5}</p>
                            <p className="ingr">{getMeal.data.strIngredient6}<br/>{getMeal.data.strMeasure6}</p>
                            <p className="ingr">{getMeal.data.strIngredient7}<br/>{getMeal.data.strMeasure7}</p>
                            <p className="ingr">{getMeal.data.strIngredient8}<br/>{getMeal.data.strMeasure8}</p>
                        </div>   
                </div>
            </div>
        )
    }

}

export default MealCard;