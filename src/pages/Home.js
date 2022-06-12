import React, { useContext, useEffect } from 'react';
import Table from '../components/Table';
import TextInput from '../components/TextInput';
import ValueInput from '../components/ValueInput';
import PlanetsContext from '../context/PlanetsContext';
import getPlanets from '../services/API';

function Home() {
  const { setPlanets } = useContext(PlanetsContext);

  useEffect(() => {
    const requestApi = async () => {
      const planetsRequest = await getPlanets();
      setPlanets(planetsRequest);
      // console.log(planetsRequest);
    };
    requestApi();
  }, [setPlanets]);

  return (
    <>
      <TextInput />
      <ValueInput />
      <Table />
    </>
  );
}

export default Home;
