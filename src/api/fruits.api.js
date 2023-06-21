import CrudRequest from '@/arch/CrudRequestAlova';

class FruitsApi extends CrudRequest {
  static baseUrl() {
    return '/api/fruits';
  }
}
export default FruitsApi;
