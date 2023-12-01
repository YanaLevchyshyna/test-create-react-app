import axios from 'axios';

axios.defaults.baseURL = 'https://656870759927836bd974cfd0.mockapi.io';

export async function fetchCars() {
  const { data } = await axios.get('/cars');
  return data;
}
