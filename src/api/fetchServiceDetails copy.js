// 2026.09.22 
console.log(' - fetchServiceDetailsSlice.js - ');

const fetchServiceDetails = async () => {

  const response = await fetch(`http://localhost:7070/api/services:1`);
  if (!response.ok) {    // throw new Error('Failed to fetch Services');
    throw new Error(response.statusText);
  }
  return await response.json();
};

// export default fetchServiceDetails;


export function* uploadServiceDetailsGenerator() {
  while (true) {
    try {
      const data = yield (fetchServiceDetails());
      console.info(data);
    } catch (e) {
      console.warn(e.massege);
    }
  }
}
export default uploadServiceDetailsGenerator;
