/**
 * TODO: adicionar mais regras de negócio no service
 * captura de erros globais (axios - interceptor)
 * adicionar store com composition api
 **/
import { useFruitsStore } from '../stores/fruits-store';

class FruitsService {
  
  constructor() {
    this.fruitsStore = useFruitsStore;
  }

  listFruits() {
    this.fruitsStore.getAllFruits();
    return this.fruitsStore.fruitList;
  }

  getFruitById(id) {
    this.fruitsStore.getFruitById(id);
  }

  getListFruits() {
    return this.fruitsStore.fruitList;
  }

  getFruit() {
    return this.fruitsStore.fruit;
  }

  getTest() {
    return this.fruitsStore.test;
  }

  setFruit(test) {
    return this.fruitsStore.setStateValue('test', test);
  }

  clearFruit() {
    return this.fruitsStore.fruit = null;
  }

  getLoading() {
    return this.fruitsStore.loading;
  }

}

export default FruitsService;
