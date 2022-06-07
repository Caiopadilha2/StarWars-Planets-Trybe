import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function TextInput() {
  const { inputText, setInputText } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    setInputText({ ...inputText,
      filterByName: {
        name: target.value,
      } });
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
