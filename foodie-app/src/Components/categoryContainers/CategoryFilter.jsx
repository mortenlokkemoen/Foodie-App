
import PropTypes from 'prop-types';

// I thougth about mapping  all the category choices and fill out value and text with {}
// but in order to just keep it fairly light I chose to hardcode this out. 
const CategoryFilter = ({ handleFilterChange }) => (
    <select name="select-category" id="select-category" placeholder="Food category" onChange={(e) => handleFilterChange(e)}>
            <option value="Breakfast">Breakfast</option>
            <option value="Dessert">Dessert</option>
            <option value="Vegan">Vegan</option>
            <option value="Chicken">Chicken</option>
            <option value="Side">Side</option>
            <option value="Pasta">Pasta</option>
            <option value="Pork">Pork</option>
            <option value="Seafood">Seafood</option>
            <option value="Starter">Starter</option>
            <option value="Goat">Goat</option>
            <option value="Beef">Beef</option>
        </select>
    );

    CategoryFilter.propTypes = {
        handleFilterChange: PropTypes.func.isRequired,
      };
      
      export default CategoryFilter;