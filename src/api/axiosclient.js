import axios from 'axios';

export const BASIC_HTTP = axios.create({
  baseURL: 'http://3.87.247.127:3000/',
  timeout: 10000,
});


export let BEARER_HTTP = axios.create({
  baseURL: 'http://44.211.220.175/',
  timeout: 10000,
  headers: {'Authorization': `Bearer`}
});
export const SET_BEARER_HTTP = () => {
   BEARER_HTTP = axios.create({
    baseURL: 'http://44.211.220.175/',
    timeout: 10000,
    headers: {'Authorization': `Bearer`}
    });
}