import { http } from '../request';
export function getDetailInfo(id) {
  return http.get('room?id=' + id);
}
