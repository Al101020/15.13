import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';// import { useEffect, useState } from 'react';

// import fetchServiceDetails from '../api/fetchServiceDetails';
import uploadServiceDetailsGenerator from '../api/fetchServiceDetails'

import Details from '../components/Details'

const DetailsPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
  //   // Код побочного эффекта
    dispatch(uploadServiceDetailsGenerator());
  }, [dispatch]);
  
  // const State = useSelector((state) => state);  
  // console.log(State);

  // useEffect(() => {
  //   // console.log(servicesState);
  // }, [servicesState]);

  return (
    <>
      <h1>Home page - Подробно об услуге</h1>
      <div id='serviceDetails'>
        <Details />
        {/* <Services servicesState={servicesState} /> */}
      </div>
    </>
  );
};

export default DetailsPage;
