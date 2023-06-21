import FruitsApi from '../api/fruits.api'
import pinia  from '@/arch/store'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFruitsStore = defineStore('fruits', () => {
  const fruitList = ref([]);
  const fruit = ref(null);
  const loading = ref(false);
  const test = ref('');

  function getAllFruits() {    
    const { loading: reqLoading, onComplete } = FruitsApi.list()
    loading.value = reqLoading;

    onComplete(async (response) => {
      if (response.status == 'error') {
        throw new Error(response?.error + ' - 2')
      }
      console.log(response)
      const { data } = response;
      fruitList.value = data;
    })
    
  }

  function getFruitById(id) {
    const { loading: reqLoading, onComplete } = FruitsApi.get(id);
    loading.value = reqLoading;

    onComplete(async (response) => {
      if (response.status == 'error') {
        throw new Error(response.error)
      }
      console.log(response)
      const { data } = response;
      fruit.value = data;
    })
  }

  return { fruit, fruitList, loading, test, getAllFruits, getFruitById }
  
  // state: () => ({
  //   fruitList: [],
  //   fruit: null,
  //   test: '',
  //   loading: false
  // }),

  // actions: {

  //   async getAllFruits() {
  //     this.setStateValue('loading', true)
  //     const data = await FruitsApi.list()
  //     this.setStateValue('fruitList', data?.data?.fruits)
  //     this.setStateValue('loading', false)
  //   },

  //   async getFruitById(id) {
  //     const data = await FruitsApi.get(id)
  //     this.setStateValue('fruit', data?.data?.fruit)
  //   },

  //   setStateValue(key, value) {
  //     this.$state[key] = value;
  //   }
  // },
})(pinia)

