import http from "../http";

//
/**
 *  @parms resquest 请求地址 例如：http://localhost:8088/...
 *  @param '/Blog'代表vue-cil中config，index.js中配置的代理
 */
let resquest = "/Blog/blog";

export default {
  getAll: () => {
    return http.get(`${resquest}/getAll`, {});
  },
  UploadBlog: params => {
    return http.post(`${resquest}/uploadBlog`, JSON.stringify(params));
  }
};
