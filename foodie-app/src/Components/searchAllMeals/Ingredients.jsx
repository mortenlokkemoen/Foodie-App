import React from 'react';

function IngredientAndMeasure(props) {

    let ingredients = []
    let measures = []

    // Here I am converting the JSON to an array and slices it for ingredients and measures
    // From there I loop them to get rid of any null values
    Object.keys(props.meal).map((key) => props.meal[key]).slice(9, 29).forEach((item, index) => {
        if(item) {
            ingredients.push(item)
            measures.push(Object.keys(props.meal).map((key) => props.meal[key]).slice(29, 49)[index])
        }
    })
        return (
            <div className="ingrediant-container">
            {ingredients.map((item, index) => {
                return(
                <p className="ingr">{item}<br />Measure:{measures[index]}</p>
                )
            })}
        </div>
        )
};

export default IngredientAndMeasure;