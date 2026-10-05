import { takeLatest, debounce, retry, put, spawn, call } from "redux-saga/effects";
import { servicesUploadRequest, servicesUploadSuccess, servicesUploadFailure } from "../actions/actionCreators";
import { 
  SERVICES_UPLOAD_REQUEST,
  SERVICES_UPLOAD_FAILURE,
  SERVICES_UPLOAD_SUCCESS,
 } from '../actions/actionTypes';

 import fetchServicesUpload from '../api/fetchServicesUpload';
 import { uploadServicesGenerator } from '../api/fetchServicesUpload';

function* servicesUploadSaga(action) {
  yield put(servicesUploadRequest(action.payload.services))
};

//
export default function* servicesSaga(action) {
  console.log('servicesSaga()');
  // console.log(action);
  // servicesUploadSaga(action);
  uploadServicesGenerator();
};

