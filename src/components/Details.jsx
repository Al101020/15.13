import { useSelector, useDispatch } from 'react-redux';
// import { servicesUploadRequest } from '../actions/actionCreators';
import { serviceDetailsUploadRequest } from '../actions/actionCreators'; 

import { useEffect } from 'react';

export default function Services() {
  // const {services, isLoading, isError, error} = useSelector((state) => state.storage);
  // console.log(services);
  // console.log(isLoading);
  // console.log(isError);
  // console.log(error);
  const {Details, isLoadingDetails, isErrorDetails, errorDetails} = useSelector((state) => state.details);

  const sTaTe = useSelector((state) => state); // --- Для проверки
  useEffect(() => {
    console.log(sTaTe);
  }, [sTaTe]); // При изменении state // --- Для проверки

  const dispatch = useDispatch();

  useEffect(() => {
    // Код побочного эффекта
    dispatch(serviceDetailsUploadRequest());
  }, [dispatch]); // срабатыват при начальной загрузке

  useEffect(() => {
    // Код побочного эффекта изменения 'services'
    console.log(Details);
    console.log(Details.items);

    if (Details.length === 0) {
      console.log('Details = []');
    };
    if (Details.length !== 0) {
      console.log('Details != []');
    }
  }, [Details]); // При изменении services


    function repeatDetailsRequest() {
      // console.log('Кнопка: Повторить запрос');
      dispatch(serviceDetailsUploadRequest());
    }

    // function serviceSelected(e) {      // console.log('выбран сервис');
    //   const service = e.target.parentElement.parentElement
    //   // const nameServiceSelected = service.children[1].textContent
    //   // console.log('name - ' + nameServiceSelected);
    //   const idServiceSelected = service.children[0].textContent
    //   console.log('id - ' + idServiceSelected);
    // }

  if (isLoadingDetails === true) {
    return (
      <>
        <h2>Подробная информация об услуге:</h2>
        <div className='red'>Загрузка...</div>
        <div><img src='../src/assets/spinner.png'></img></div>
      </>
    )
  } else {
    if (isErrorDetails === true) {
      console.log('Ошибка');
      return (
        <>
          <h2>Подробная информация об услуге:</h2>
          <div className='red'>Ошибка загрузки Подробная информация об услуге:</div>
          <div>"{errorDetails.error}"</div>
          {/* <button onClick={repeatRequest}>Повторить запрос</button> */}
        </>
      )
    } else if(Details.items) { //} else if(Details) {
      console.log('Значит загрузка прошла успешно');
      return (
        <>
          <h2>Подробная информация об услуге:</h2>
          {/* <ul> 
            {Details.items.map(service => (
              <li key={Details.id} className='service'>
            
                <span className='displayNone'>{Details.id}</span>
                <a href="#" onClick={serviceSelected}><div className='name'>{service.name}</div></a>
              
                <div className='price'>{service.price}</div>
              </li>
            ))}
          </ul> */}
        </>
      )
    }
  }
};






  // const state = useSelector((state) => state.storage);
  // console.log(state);

 // const storage = useSelector((state) => state.storage);
  // console.log(storage.services);

  // if (storage.services.length === 0) {
  //   return (
  //     <>
  //       <h2>Список услуг:</h2>
  //       <div><img src='../src/assets/spinner.png'></img></div>
  //       {/* <div><img src='../assets/spinner.png'></img></div> */}
  //     </>
  //   )
  // };

  // return (
  //   <>
  //     <h2>Список предлагаемых услуг:</h2>
  //     <ul> 
  //       {storage.services.map(service => (
  //         <li key={service.id} className='service'>
            
  //           <span className='displayNone'>{service.id} - </span>
  //           <a href="#"><div className='name'>{service.name}</div></a>
            
  //           <div className='price'>{service.price}</div>
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // ); 
// export default Services;