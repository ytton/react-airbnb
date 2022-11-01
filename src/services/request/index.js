import { handleResponse, handleError } from './tools';
import { request } from '@ytton/tools';
export const http = request.create({
  baseURL: 'http://codercba.com:1888/airbnb/api/',
  handleResponse,
  handleError
});
