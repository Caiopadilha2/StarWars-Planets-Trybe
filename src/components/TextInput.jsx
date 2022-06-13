import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function TextInput() {
  const { setTextFilter } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    setTextFilter(target.value);
  };

  return (
    <input
      type="text"
      placeholder="Procure um planeta"
      data-testid="name-filter"
      onChange={ handleChange }
    />
  );
}

export default TextInput;
