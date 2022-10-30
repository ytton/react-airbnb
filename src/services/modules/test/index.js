import { http } from '../../request';

export function getUsers() {
  return http.get('/users', {
    handleResponse(res, beforeRes) {
      return beforeRes;
    }
  });
}
export function getUsers2() {
  return http.get('/users');
}
