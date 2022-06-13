import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanets from '../services/API';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [textFilter, setTextFilter] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [numericFilters, setNumericFilters] = useState([]);
  const [filterType, setFilterType] = useState('population');
  const [operator, setOperator] = useState('maior que');
  const [value, setValue] = useState(0);

  useEffect(() => {
    const fetchPlanets = async () => {
      const planetsRequest = await getPlanets();
      setPlanets(planetsRequest);
      setFilteredPlanets(planetsRequest);
    };
    fetchPlanets();
  }, []);

  const contextValue = {
    planets,
    setPlanets,
    textFilter,
    setTextFilter,
    filteredPlanets,
    setFilteredPlanets,
    filterType,
    setFilterType,
    operator,
    setOperator,
    value,
    setValue,
    numericFilters,
    setNumericFilters,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
