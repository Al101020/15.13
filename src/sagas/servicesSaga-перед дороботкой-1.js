// import { call, put, takeEvery } from 'redux-saga/effects';
import { takeLatest, debounce, retry, put, spawn, call } from "redux-saga/effects";
import fetchServicesUpload from '../api/fetchServicesUpload';

import { 
  SERVICES_UPLOAD_REQUEST,
  SERVICES_UPLOAD_FAILURE,
  SERVICES_UPLOAD_SUCCESS,
 } from '../actions/actionTypes';

 import { servicesUploadRequest } from "../actions/actionCreators";

// Воркер: слушает действие и выполняет запрос
function* fetchServicesGenerator(action) {
  try {
    // Отправляем действие, что запрос начался (отслеживаем состояние)
    yield put({ type: SERVICES_UPLOAD_REQUEST });
    // Выполняем запрос
    const data = yield call(fetchServicesUpload);
    // Отправляем действие с успешными данными
    yield put({ type: SERVICES_UPLOAD_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: SERVICES_UPLOAD_FAILURE, message: e.message });
  }
};

// Watcher-сага (настраивает прослушку)
function* watcherFetchDataSaga() {
  // takeLatest гарантирует, что если за короткое время придёт несколько FETCH_DATA_REQUEST,
  // сработает только результат последнего запроса (предыдущий отменится)

  // yield takeLatest(SERVICES_UPLOAD_REQUEST, fetchServicesGenerator); беспрерывно, постоянно, забивает память
  yield spawn(SERVICES_UPLOAD_REQUEST, fetchServicesGenerator);
};

function* rootSaga() {
  yield debounce("SERVICES_UPLOAD_REQUEST", watcherFetchDataSaga);
}

export default rootSaga;

// Экспортируем rootSaga, чтобы запустить watcher в middleware
// function* rootSaga() {
//   yield spawn([
//     call(watcherFetchDataSaga),
//     // Другие саги можно добавить здесь
//   ]);
// }



// function* fetchServicesGenerator(action) {
//   try {
//     const services = yield call(fetchServicesUpload, action.payload.services);
//     yield put({ type: SERVICES_UPLOAD_SUCCESS, services: services });
//   } catch (e) {
//     yield put({ type: SERVICES_UPLOAD_FAILURE, message: e.message });
//   }
// }

// // Сага слушает конкретные действия
// export function* mySaga() {
//   yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
//   // Или takeLatest: если новое действие пришло, пока предыдущая сага ещё работает,
//   // предыдущая отменяется, и сработает только последний запрос
// }

// + + + + + + + + + + + + + + + + + + + + +  + + + +

// import { takeLatest, debounce, retry, put, spawn, call } from "redux-saga/effects";
// import { servicesUploadRequest, servicesUploadSuccess, servicesUploadFailure } from "../actions/actionCreators";
// import { 
//   SERVICES_UPLOAD_REQUEST,
//   SERVICES_UPLOAD_FAILURE,
//   SERVICES_UPLOAD_SUCCESS,
//  } from '../actions/actionTypes';

//  import fetchServicesUpload from '../api/fetchServicesUpload';
//  import { uploadServicesGenerator } from '../api/fetchServicesUpload';

// function* servicesUploadSaga(action) {
//   yield put(servicesUploadRequest(action.payload.services))
// };

// //
// export default function* servicesSaga(action) {
//   console.log('servicesSaga()');
//   // console.log(action);
//   // servicesUploadSaga(action);
//   uploadServicesGenerator();
// };

