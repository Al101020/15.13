import { createSlice } from '@reduxjs/toolkit';
import {
  SERVICES_UPLOAD_REQUEST,
  SERVICES_UPLOAD_FAILURE,
  SERVICES_UPLOAD_SUCCESS,
} from "../actions/actionTypes";
// import fetchServices from '../api/fetchServices';
// import fetchServicesUpload from '../api/fetchServicesUpload';

const servicesSlice = createSlice({
  name: 'storage',
  initialState: { 
    services: [],
    isLoading: false,
    isError: false,
    error: '',
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
      .addCase(SERVICES_UPLOAD_REQUEST, (state) => {
        // console.log('начало загрузки'); // работает
        // console.log(state); // не видел

        state.isLoading = true;
        state.isError = false; // Сбрасываем флаг ошибки при новом запросе
        state.error = '';
      })
      // Обработка успешной загрузки (fulfilled)
      .addCase(SERVICES_UPLOAD_SUCCESS, (state, action) => {
        // console.log('SUCCESS-fulfilled'); // не видел

        state.isLoading = false;
        state.isError = false;

        if (action.payload === undefined) {
          return;
        }

        state.services = action.payload;
      })
      // Обработка ошибки (rejected)
      .addCase(SERVICES_UPLOAD_FAILURE, (state, action) => {
        // console.log('FAILURE-error');

        state.isLoading = false;
        state.isError = true;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

// Экспорт действий и редуктора
// export const { newServices } = servicesSlice.actions;

// export const { services } = servicesSlice.actions;
export default servicesSlice.reducer;
