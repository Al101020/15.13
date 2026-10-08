import { useSelector, useDispatch } from 'react-redux';
import { serviceDetailsUploadRequest } from '../actions/actionCreators';

import { useEffect } from 'react';

function FetchCheck() {

  const {Details, isLoadingDetails, isErrorDetails, errorDetails} = useSelector((state) => state.details);
  
  useEffect(() => { console.log(Details); }, [Details]);
  useEffect(() => { console.log(isLoadingDetails); }, [isLoadingDetails]);
  useEffect(() => { console.log(isErrorDetails); }, [isErrorDetails]);
  useEffect(() => { console.log(errorDetails); }, [errorDetails]);


  //   const sTaTe = useSelector((state) => state.details); // --- Для проверки
  //   useEffect(() => {
  //     console.log(sTaTe);
  //   }, [sTaTe]); // При изменении state // --- Для проверки

  const dispatch = useDispatch();

  useEffect(() => {
    // Код побочного эффекта    // console.log('useEffect - [dispatch]');
    dispatch(serviceDetailsUploadRequest());
  }, [dispatch]); // срабатыват при начальной загрузке

  if (isLoadingDetails === true) {
    return (
      <>
        <div className='FetchCheck'>
            <h4 className='blue'>Загрузка или isLoadingDetails === TRUE</h4>
        </div>
      </>
    );
  } else {
    if (isErrorDetails === true) {
      return (
        <>
          <div className='FetchCheck'>
              <h4 className='red'>isErrorDetails === true</h4>
              <div>"{errorDetails.errorDetails}"</div>
          </div>
        </>
      );
    }
    
    // return (
    //     <>
    //       <div className='FetchCheck'>
    //           <h4 className='blue'>НЕТ загрузки</h4>
    //       </div>
  };

//   return (
//     <>
//       <div className='FetchCheck'>
//         <h4>FetchCheck или Проверка api/fetchServiceDetails</h4>
//       </div>
//     </>
//   );
}
export default FetchCheck;




// if (isLoading === true) {
//     return (
//       <>
//         <h2>Список услуг:</h2>
//         <div className='red'>Загрузка...</div>
//         <div><img src='../src/assets/spinner.png'></img></div>
//       </>
//     )
//   } else {
//     if (isError === true) {
//       // console.log('Ошибка');
//       return (
//         <>
//           <h2>Список услуг:</h2>
//           <div className='red'>Ошибка загрузки услуг:</div>
//           <div>"{error.error}"</div>
//           <button onClick={repeatRequest}>Повторить запрос</button>
//         </>
//       )
//     } else if(services.items) {
//       // console.log('Значит загрузка прошла успешно');
//       return (
//         <>
//           <h2>Список услуг:</h2>
//           <ul> 
//             {services.items.map(service => (
//               <li key={service.id} className='service'>
            
//                 <span className='displayNone'>{service.id}</span>
//                 <a href="#" onClick={serviceSelected}><div className='name'>{service.name}</div></a>
              
//                 <div className='price'>{service.price}</div>
//               </li>
//             ))}
//           </ul>
//         </>
//       )
//     }
//   }