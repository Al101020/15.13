import { call, put, takeLatest } from "redux-saga/effects";

import fetchServiceDetalist from '../api/fetchServiceDetails';
import { serviceDetailsUploadFailure, serviceDetailsUploadSuccess } from "../actions/actionCreators";
import { SERVICE_DETAILS_UPLOAD_REQUEST } from '../actions/actionTypes';

import fetchServicesUpload from "../api/fetchServicesUpload";
import { servicesUploadFailure, servicesUploadSuccess } from "../actions/actionCreators";
import { SERVICES_UPLOAD_REQUEST } from "../actions/actionTypes";

function* fetchServicesGenerator() {
  try {
    const services = yield call(fetchServicesUpload);
    yield put(servicesUploadSuccess(services));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    yield put(servicesUploadFailure(message));
  }
}

function* fetchServiceDetalistGenerator() {
  try {
    const details = yield call(fetchServiceDetalist);
    yield put(serviceDetailsUploadSuccess(details));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    yield put(serviceDetailsUploadFailure(message));
  }
}

export default function* rootSaga() {
  yield takeLatest(SERVICES_UPLOAD_REQUEST, fetchServicesGenerator);
  yield takeLatest(SERVICE_DETAILS_UPLOAD_REQUEST, fetchServiceDetalistGenerator);
}


// import { call, put, takeLatest } from "redux-saga/effects";

// import fetchServicesUpload from "../api/fetchServicesUpload";
// import { servicesUploadFailure, servicesUploadSuccess } from "../actions/actionCreators";
// import { SERVICES_UPLOAD_REQUEST } from "../actions/actionTypes";

// function* fetchServicesGenerator() {
//   try {
//     const services = yield call(fetchServicesUpload);
//     yield put(servicesUploadSuccess(services));
//   } catch (error) {
//     const message = error instanceof Error ? error.message : String(error);
//     yield put(servicesUploadFailure(message));
//   }
// }

// export default function* rootSaga() {
//   yield takeLatest(SERVICES_UPLOAD_REQUEST, fetchServicesGenerator);
// }