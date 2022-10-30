export function handleAuth(config) {
  config.headers['X-Token'] = localStorage.getItem('user-token') ?? 'acasd56456:asdas:Xx';
}
export function handleRequest(req) {}
export function handleResponse(res) {
  return res.data;
}
export function handleError(error, configOrResponse) {
  return new Promise((res, rej) => {
    if (error.message === '发生了异常') {
      res(configOrResponse);
    }
    error.message = '未知异常，请联系管理员';
    rej(error);
  });
}
export const message = {
  error: msg => alert(msg)
};
