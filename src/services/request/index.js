import { handleAuth, handleResponse, handleRequest, handleError, message } from './tools';
import { request } from '@ytton/tools';
export const http = request.create({
  baseURL: 'http://localhost:3000',
  needAuth: true,
  needMessage: false,
  message,
  returnType: 'withError',
  handleAuth,
  handleResponse,
  handleRequest,
  handleError
});