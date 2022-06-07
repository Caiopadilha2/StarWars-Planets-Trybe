import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const INITIAL_INPUT_TEXT = {
    filterByName: {
      name: '',
    },
  };

  const [planets, setPlanets] = useState([]);
  const [inputText, setInputText] = useState(INITIAL_INPUT_TEXT);

  return (
    <PlanetsContext.Provider value={ { planets, setPlanets, inputText, setInputText } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
