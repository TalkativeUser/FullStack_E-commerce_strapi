import axios from "axios";
import { IAxiosErrorMsg } from "../interfaces";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:1337',
  
  });

  //   المفروض نشيل النوع أنى ونحط مكانه نوع البرامتر المبعوت اللى هو  object.response

  export const isIAxiosErrorMsg = (data: IAxiosErrorMsg): data is IAxiosErrorMsg => {
    return data && typeof data === 'object'
      && 'error' in data
      && typeof data.error === 'object'
      && 'message' in data.error
      && typeof data.error.message === 'string';
  };