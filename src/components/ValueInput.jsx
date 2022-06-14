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
    arrayOptions,
    setArrayOptions,
  } = useContext(PlanetsContext);

  const selectOptionFilter = () => {
    const newArrayOptions = arrayOptions.filter((filter) => filter !== filterType);
    setArrayOptions(newArrayOptions);
  };

  const handleNumericFilter = () => {
    // console.log(filterType, operator, value);
    const newNumericFilter = {
      filterType,
      operator,
      value,
    };
    // console.log(newNumericFilter);
    setNumericFilters([...numericFilters, newNumericFilter]);
    selectOptionFilter();
    setValue(0);
  };

  const handleDeleteFilter = (index) => {
    const newFilters = numericFilters.filter(
      (_filter, filterIndex) => filterIndex !== index,
    );
    setNumericFilters(newFilters);
  };

  const deleteAllFilters = () => {
    setNumericFilters([]);
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setFilterType(target.value) }
        value={ filterType }
      >
        {arrayOptions.map((filter, index) => (
          <option key={ index } value={ filter }>{filter}</option>
        ))}
        {/* <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option> */}
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
          <div
            key={ `${filter.filterType}-${index}` }
            data-testid="filter"
          >
            <p>
              {`${filter.filterType} ${filter.operator} ${filter.value}`}
            </p>
            <button type="button" onClick={ () => handleDeleteFilter(index) }>X</button>
          </div>
        ),
      )}
      {numericFilters.length > 0 && (
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ deleteAllFilters }
        >
          Apagar filtros
        </button>)}

    </div>
  );
}

export default ValueInput;
