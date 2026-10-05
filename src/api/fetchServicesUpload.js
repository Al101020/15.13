// 2026.09.22 console.log(' - fetchServicesUpload.js - ');

const fetchServicesUpload = async () => {

  const response = await fetch('http://localhost:7070/api/services');
  if (!response.ok) {    // throw new Error('Failed to fetch Services');
    throw new Error(response.statusText);
  }
  return await response.json();
};

export default fetchServicesUpload;

export function* uploadServicesGenerator() {
  while (true) {
    try {
      const data = yield (fetchServicesUpload());
      console.info(data);
    } catch (e) {
      console.warn(e.massege);
    }
  }
}



// + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
// // import { createAsyncThunk } from '@reduxjs/toolkit';

// const fetchServices = createAsyncThunk(
//   'servicesSearch/fetchServices',
//   async (_, thunkAPI) => {
//     // console.log('fetchServices');
//     // console.log(ob);
//     try {
//       // if (ob === undefined) {
//       //   return;
//       // }
//       const response = 
//       await fetch(`http://localhost:7070/api/services`);
//       if (!response.ok) {
//         // console.log('!response.ok');
//         throw new Error('Failed to fetch Services');
//       } else {
//         // console.log('response.ok');
//         const data = await response.json();
//         return data;
//       }
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export default fetchServices;
