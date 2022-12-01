import React, { useState } from "react";
import MealCard from "./MealCard";
import { Link } from "react-router-dom";
import "./searchbar.css";

const Searchbar = () => {
    const [search, setSearch] = useState('');
    const [meal, setMeal] = useState();
    const getMeal = (e) => {
        if(e.key === "Enter")
        { 
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res=>res.json()).then(data=> {setMeal(data.meals);setSearch('')})
        }
    }
    return ( 
        <div className="header-container">
            <div className="title-container">
                <h1 className="search-bar-title"> Hey and welcome!</h1>
                <h3 className="search-sub-title"> Here you search all kinds of recipies</h3>
            </div>
            <div className="searchbar-container">
                <input type="search" 
                className="searchbar"
                placeholder="Search food name here.."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                onKeyDown={getMeal}
                />
            <Link to ="/"><button className='cancel-btn'>Return to main menu</button></Link>
            </div>
            <div className="results-container">
                {
                    (meal == null)? <p className="meal-not-found">No meal found, try another word!</p> :
                    meal.map((res) => {
                    return (
                    <MealCard data={res} />
                );
                })}
            </div>
        </div>
    )
}

export default Searchbar;