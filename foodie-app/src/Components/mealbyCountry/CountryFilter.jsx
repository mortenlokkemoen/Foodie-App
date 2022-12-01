import PropTypes from 'prop-types';

const CountryFilter = ({ handleFilterChange }) => (
    <select name="select-countries" id="select-countries" placeholder="Countries" onClick={(e) => handleFilterChange(e)}>
            <option value="British">British</option>
            <option value="American">American</option>
            <option value="French">French</option>
            <option value="Canadian">Canadian</option>
            <option value="Jamaican">Jamaican</option>
            <option value="Chinese">Chinese</option>
            <option value="Dutch">Dutch</option>
            <option value="Egyptian">Egyptian</option>
            <option value="Greek">Greek</option>
            <option value="Indian">Indian</option>
            <option value="Japanese">Japanese</option>
            <option value="Norwegian">Norwegian</option>
            <option value="Turkish">Turkish</option>
            <option value="Russian">Russian</option>
        </select>
    );

    CountryFilter.propTypes = {
        handleFilterChange: PropTypes.func.isRequired,
      };
      
      export default CountryFilter;