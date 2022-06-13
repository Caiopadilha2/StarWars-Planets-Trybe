import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const {
    planets,
    textFilter,
    setFilteredPlanets,
    filteredPlanets,
    numericFilters,
  } = useContext(PlanetsContext);

  useEffect(() => {
    const filteredData = planets.filter((planet) => planet.name.toLowerCase()
      .includes(textFilter.toLowerCase()));

    const filterNumeric = numericFilters.reduce((acc, filter) => acc.filter((planet) => {
      switch (filter.operator) {
      case 'maior que':
        return planet[filter.filterType] > Number(filter.value);
      case 'menor que':
        return planet[filter.filterType] < Number(filter.value);
      case 'igual a':
        return planet[filter.filterType] === filter.value;
      default:
        return true;
      }
    }), filteredData);

    setFilteredPlanets(filterNumeric);
  }, [textFilter, numericFilters]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {filteredPlanets.filter((item) => (
          item.name.toLowerCase().includes((textFilter).toLowerCase())))
          .map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
