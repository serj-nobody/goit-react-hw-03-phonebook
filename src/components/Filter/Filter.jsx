import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import { FilterContainer, FilterLabel, FilterInput } from "./Filter.styled";



const filterInputID = nanoid();

export const Filter = ({value, onFilterChange}) => {
  return (
    <FilterContainer>
      <FilterLabel htmlFor={filterInputID}>Find contact by name:</FilterLabel>
      <FilterInput
        id={filterInputID}
        type="text"
        name="name"
        value={value}
        onChange={onFilterChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </FilterContainer>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
}