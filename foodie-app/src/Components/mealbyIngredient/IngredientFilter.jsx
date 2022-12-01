import PropTypes from 'prop-types';


// I thougth about mapping  all the ingredient choices and fill out value and text with {}
// but in order to just keep it fairly light I chose to hardcode this out 
const IngredientFilter = ({ handleFilterChange }) => (
    <select name="select-ingredients" id="select-ingredients" placeholder="Food ingredients" onClick={(e) => handleFilterChange(e)}>
            <option value="Salmon">Salmon</option>
            <option value="Chicken Breasts">Chicken Breasts</option>
            <option value="Fries">Fries</option>
            <option value="Chopped Tomatoes">Chopped Tomatoes</option>
            <option value="Lemon">Lemon</option>
            <option value="Cod">Cod</option>
            <option value="Cinnamon Stick">Cinnamon Stick</option>
            <option value="Orange">Orange</option>
            <option value="Sunflower Oil">Sunflower Oil</option>
            <option value="Peanut Butter">Peanut Butter</option>
            <option value="Lettuce">Lettuce</option>

        </select>
    );

    IngredientFilter.propTypes = {
        handleFilterChange: PropTypes.func.isRequired,
      };
      
      export default IngredientFilter;