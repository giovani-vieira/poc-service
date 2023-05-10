import FruitsApi from '../api/fruits.api'
import pinia  from '@/arch/store'
import { defineStore } from 'pinia'

export const useFruitsStore = defineStore('fruits', {

  state: () => ({
    fruitList: [],
    fruit: null,
    test: ''
  }),

  actions: {

    async getAllFruits() {
      const data = await FruitsApi.list()
      console.log(data?.data?.fruits)
      this.setStateValue('fruitList', data?.data?.fruits)
    },

    async getFruitById(id) {
      const data = await FruitsApi.get(id)
      this.setStateValue('fruit', data?.data?.fruit)
    },

    setStateValue(key, value) {
      this.$state[key] = value;
    }
  },
})(pinia)

