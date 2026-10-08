// import { useDispatch } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';// import { useEffect, useState } from 'react';

// import fetchServicesUpload from '../api/fetchServicesUpload';
import Services from '../components/Services';

const HomePage = () => {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // Код побочного эффекта
  //   dispatch(fetchServicesUpload());
  // }, [dispatch]);
  
  // const servicesState = useSelector((state) => state.storage.services);  // console.log(servicesState);

  // useEffect(() => {
  //   // console.log(servicesState);
  // }, [servicesState]);

  return (
    <>
      <h1>Home page - Список услуг и их цена</h1>
      <div id='services'>
        <Services />
        {/* <Services servicesState={servicesState} /> */}
      </div>
    </>
  );
};

export default HomePage;
