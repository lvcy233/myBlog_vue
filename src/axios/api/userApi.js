import http from "../http";
/**
 *  @parms resquest 请求地址 例如：http://localhost:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let resquest = "/User/user";

export default {
  getAll: () => {
    return http.get(`${resquest}/getAll`, {});
  },
  signIn: params => {
    return http.post(`${resquest}/signIn`, params);
  },
  signUp: params => {
    return http.get(`${resquest}/signUp`, params);
  }
};