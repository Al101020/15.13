import { createSlice } from '@reduxjs/toolkit';
import {
  SERVICE_DETAILS_UPLOAD_REQUEST,
  SERVICE_DETAILS_UPLOAD_FAILURE,
  SERVICE_DETAILS_UPLOAD_SUCCESS,
} from "../actions/actionTypes";
// import fetchServiceDetails from '../api/fetchServiceDetails';

const serviceDetailsReducer = createSlice({
  name: 'details',
  initialState: { 
    Details: [],
    isLoadingDetails: false,
    isErrorDetails: false,
    errorDetails: '',
  },
  reducers: {},
  // reducers: {
  //   services(state, action) {
  //     console.log('reduser-newServices'); // ищё не видел
  //     state.services = action.payload;
  //   },
  // },
    extraReducers: (builder) => {
    builder
      // Обработка начала загрузки (pending)
      .addCase(SERVICE_DETAILS_UPLOAD_REQUEST, (state) => {
        // console.log('начало загрузки'); // работает
        // console.log(state); // не видел

        state.isLoadingDetails = true;
        state.isErrorDetails = false; // Сбрасываем флаг ошибки при новом запросе
        state.errorDetails = '';
      })
      // Обработка успешной загрузки (fulfilled)
      .addCase(SERVICE_DETAILS_UPLOAD_SUCCESS, (state, action) => {
        // console.log('SUCCESS-fulfilled'); // не видел

        state.isLoadingDetails = false;
        state.isErrorDetails = false;

        if (action.payload === undefined) {
          return;
        }

        state.Details = action.payload;
      })
      // Обработка ошибки (rejected)
      .addCase(SERVICE_DETAILS_UPLOAD_FAILURE, (state, action) => {
        // console.log('FAILURE-error');

        state.isLoadingDetails = false;
        state.isErrorDetails = true;
        state.errorDetails = action.payload || 'Something went wrong';
      });
  },
});

// Экспорт действий и редуктора
// export const { newServices } = servicesSlice.actions;

// export const { services } = servicesSlice.actions;
export default serviceDetailsReducer.reducer;
