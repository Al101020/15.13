import { useSelector, useDispatch } from 'react-redux';
import { servicesUploadRequest } from '../actions/actionCreators';

import { useEffect } from 'react';

export default function Services() {
  const {services, isLoading, isError, error} = useSelector((state) => state.storage);
  // console.log(services);
  // console.log(isLoading);
  // console.log(isError);
  // console.log(error);
  

  // const sTaTe = useSelector((state) => state); // --- Для проверки
  // useEffect(() => {
  //   console.log(sTaTe);
  // }, [sTaTe]); // При изменении state // --- Для проверки

  const dispatch = useDispatch();

  useEffect(() => {
    // Код побочного эффекта
    dispatch(servicesUploadRequest());
  }, [dispatch]); // срабатыват при начальной загрузке

  useEffect(() => {
    // Код побочного эффекта изменения 'services'
    // console.log(services);
    // console.log(services.items);

    // if (services.length === 0) {
    //   console.log('services = []');
    // };
    if (services.length !== 0) {
      // console.log('services != []');
    }
  }, [services]); // При изменении services


    function repeatRequest() {
      // console.log('Кнопка: Повторить запрос');
      dispatch(servicesUploadRequest());
    }

    function serviceSelected(e) {      // console.log('выбран сервис');

      // window.location.href = '/details.html'; // или '/pages/details.html'
      // const url = window.location.href;
      // console.log(url);
      window.location.href = '/details';

      const service = e.target.parentElement.parentElement
      // const nameServiceSelected = service.children[1].textContent
      // console.log('name - ' + nameServiceSelected);
      const idServiceSelected = service.children[0].textContent
      console.log('id - ' + idServiceSelected);
    }

  if (isLoading === true) {
    return (
      <>
        <h2>Список услуг:</h2>
        <div className='red'>Загрузка...</div>
        <div><img src='../src/assets/spinner.png'></img></div>
      </>
    )
  } else {
    if (isError === true) {
      // console.log('Ошибка');
      return (
        <>
          <h2>Список услуг:</h2>
          <div className='red'>Ошибка загрузки услуг:</div>
          <div>"{error.error}"</div>
          <button onClick={repeatRequest}>Повторить запрос</button>
        </>
      )
    } else if(services.items) {
      // console.log('Значит загрузка прошла успешно');
      return (
        <>
          <h2>Список услуг:</h2>
          <ul> 
            {services.items.map(service => (
              <li key={service.id} className='service'>
            
                <span className='displayNone'>{service.id}</span>
                <a href="#" onClick={serviceSelected}><div className='name'>{service.name}</div></a>
              
                <div className='price'>{service.price}</div>
              </li>
            ))}
          </ul>
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