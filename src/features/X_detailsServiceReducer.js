import { createSlice, current } from '@reduxjs/toolkit';
import fetchServiceDetails from '../api/fetchServiceDetails';

const initialState = {
  details: {},
  isLoadingDetails: false,
  isErrorDetails: false,
  errorDetails: '',
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Обработка начала загрузки (pending)
      .addCase(fetchDetailsMovie.pending, (state) => {
        state.isLoadingDetails = true;
        state.isErrorDetails = false; // Сбрасываем флаг ошибки при новом запросе
        state.errorDetails = '';
      })
      // Обработка успешной загрузки (fulfilled)
      .addCase(fetchDetailsMovie.fulfilled, (state, action) => {
        state.isLoadingDetails = false;
        state.isErrorDetails = false;
        if (action.payload === undefined) {
          return;
        }
        state.details = action.payload;
      })
      // Обработка ошибки (rejected)
      .addCase(fetchDetailsMovie.rejected, (state, action) => {
        state.isLoadingDetails = false;
        state.isErrorDetails = true;
        state.errorDetails = action.payload || 'Something went wrong';
      });
  },
});

// export const selectDetailsObj = (state) => state.detailsObj;//
// export const selectDetails = (state) => state.detailsObj.details;//

export default detailsSlice.reducer;
