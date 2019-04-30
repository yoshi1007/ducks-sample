import axios from 'axios';

// my rails API local
// export const URL = 'http://localhost:3030'

// my rails API production
export const URL = 'https://limitless-dusk-89789.herokuapp.com'

export const myHttpClient = axios.create({
  'Access-Control-Allow-Origin':'*'
})
