import axios from 'axios';

const instance1 = axios.create({
  baseURL: 'https://inshorts-english.vercel.app',
});

const instance2 = axios.create({
  baseURL: 'https://inshorts-hindi-api.vercel.app',
});

export {instance1, instance2};