import axios from 'axios';

const httpService = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL || '/',
});

httpService.interceptors.request.use((request) => {
  return request;
});

httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {    
    if (error?.response?.status === 401) {
      // redirect to the error page
    }
    return Promise.reject(error);
  }
);


export default httpService;
