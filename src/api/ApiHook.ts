import { AxiosResponse } from "axios";
 import Axios from 'axios';
 
 // instance will have our custom typings from the return of this function
//  const instance = setupCache(
//    Axios.create({
//      // Axios options
//    }),
//    {
//      // Axios-cache-interceptor options
//    }
//  );

const baseURL = 'https://oiw.outsystemscloud.com/Safely/rest/HealthAndSafety/'

  const handleErr = async (err: any): Promise<any> => {
    const status = err?.response?.status;
    console.log(JSON.stringify(err));
    if (status === 404) {
      window.location.href = '/not-found';
      return Promise.reject(err);
    }

    if (status === 500) {
      window.location.href = '/server-error';
      return Promise.reject(err);
    }
    return Promise.reject(err);
  };
  
// Basic Auth:
 Axios.defaults.auth= {username:`${process.env.REACT_APP_USERNAME_API}`, password:`${process.env.REACT_APP_PASSWORD_API}`};

export const callAPI = async (method:string, url: string, params?: any) => { 
  try {
    
    const resp: AxiosResponse = await Axios({
      method:method,
      baseURL: baseURL,
      url: url,
      headers: {
          'content-type':'application/json',
      },
      // 'params': {
      //     'search':'parameter',
      // },
    })
    return Promise.resolve(resp.data);
  } catch (err){
    handleErr(err);
  }
}


