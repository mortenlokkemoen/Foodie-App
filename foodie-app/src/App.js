import { Routes, Route } from 'react-router-dom';
import Searchbar from './Components/searchAllMeals/Searchbar';
import RandomMeal from './Components/singleMeal/RandomMeal';
import Layout from './Components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Layout />} />
        <Route path = 'searchFood' element={<Searchbar />} />
        <Route path = 'randomMeal' element={<RandomMeal />} />
     </Routes>
    </div>
  );
}

export default App;
