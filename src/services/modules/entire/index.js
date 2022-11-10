import { http } from '../../request';
export function getEntireList(query) {
  return http.get('/entire/list', {
    params: {
      offset: (query.currentPage - 1) * query.pageSize,
      size: query.pageSize
    }
  });
}
