import { Routes, Route } from 'react-router-dom';
import Searchbar from './Components/searchAllMeals/Searchbar';
import RandomMeal from './Components/singleMeal/RandomMeal';
import Layout from './Components/Layout';
import MealsContainer from './Components/categoryContainers/MealCategory';
import MealDetailComponent from './Components/categoryContainers/MealDetails';
import MealIngredients from './Components/mealbyIngredient/MealIngredient';
import MealIngredientsDetailsComponent from './Components/mealbyIngredient/MealIngredientDetails';
import MealbyCountry from './Components/mealbyCountry/MealCountry';
import MealCountryDetailComponent from './Components/mealbyCountry/MealCountryDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Layout />} />
        <Route path = 'searchFood' element={<Searchbar />} />
        <Route path = 'randomMeal' element={<RandomMeal />} />
        <Route path = 'mealbycategory' element={<MealsContainer/>} />
        <Route path= 'mealbycategory/meals/:id' element={<MealDetailComponent />} />
        <Route path= 'mealbyingredients' element={<MealIngredients />} />
        <Route path= 'mealbyingredients/meals/:id' element={<MealIngredientsDetailsComponent />} />
        <Route path= 'mealbycountry' element={<MealbyCountry />} />
        <Route path= 'mealbycountry/meals/:id' element={<MealCountryDetailComponent />} />
     </Routes>
    </div>
  );
}

export default App;
