import CrudRequest from '@/arch/CrudRequest';

class FruitsApi extends CrudRequest {
  static baseUrl() {
    return '/api/fruits';
  }
}
export default FruitsApi;
