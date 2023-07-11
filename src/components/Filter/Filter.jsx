// import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input value={value} onChange={onChange} type="text" name="filter" />
  </label>
);
