import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function ValueInput() {
  const {
    filterType,
    setFilterType,
    operator,
    setOperator,
    value,
    setValue,
    numericFilters,
    setNumericFilters,
  } = useContext(PlanetsContext);

  const handleNumericFilter = () => {
    // console.log(filterType, operator, value);
    const newNumericFilter = {
      filterType,
      operator,
      value,
    };
    // console.log(newNumericFilter);
    setNumericFilters([...numericFilters, newNumericFilter]);
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setFilterType(target.value) }
        value={ filterType }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setOperator(target.value) }
        value={ operator }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target }) => setValue(target.value) }
        value={ value }
        placeholder="0"
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleNumericFilter }
      >
        Filtrar
      </button>
      {numericFilters.map(
        (filter, index) => (
          <p key={ `${filter.filterType}-${index}` }>
            {`${filter.filterType} ${filter.operator} ${filter.value}`}
          </p>
        ),
      )}
    </div>
  );
}

export default ValueInput;
