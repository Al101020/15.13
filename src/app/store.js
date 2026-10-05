import { configureStore } from '@reduxjs/toolkit';
import listOfServicesReducer from '../features/listOfServicesReducer';
import serviceDetailsReducer from '../features/serviceDetailsReducer'

import createSagaMiddleware from "redux-saga";
import rootSaga from '../sagas/servicesSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    storage: listOfServicesReducer,
    details: serviceDetailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(sagaMiddleware),
  devTools: import.meta.env.DEV,
});
// //
// const store = configureStore({
//   reducer: {
//     storage: listOfServicesReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       thunk: false,
//       serializableCheck: {
//         ignoredActions: ["persist/PERSIST"],
//       },
//     }).concat(sagaMiddleware),
//   devTools: import.meta.env.DEV,
// });
// //

sagaMiddleware.run(rootSaga);

export default store;
