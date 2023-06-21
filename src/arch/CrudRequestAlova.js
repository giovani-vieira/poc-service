import pageData from '@/arch/HttpServiceAlova';
import { useRequest } from 'alova';

class CrudRequest {
  static baseUrl() {
    throw Error('Method baseUrl not implemented');
  }

  static list(queryParams = {}) {
    return useRequest(pageData.Get(this.baseUrl(), { localCache: 1 * 10 * 1000 }), { //CACHE
      params: queryParams,

      // TODO: pode ser usado para realizar um request de refresh token? 
      async middleware(_, next) {
        console.log('Antes da request');
        await next();
        console.log('Depois da request');
      }
    });
  }

  static get(id) {
    return useRequest(pageData.Get(`${this.baseUrl()}/${id}`))
  }

}

export default CrudRequest;
