const getPlanets = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const request = await fetch(URL);
  const response = await request.json();
  delete response.results.residents;
  return response.results;
};

export default getPlanets;
