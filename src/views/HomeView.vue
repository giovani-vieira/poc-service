<template>
  <div style="display: flex; flex-direction: column; gap: 1rem">
    <button @click="fruitsService.listFruits()">Frutas</button>

    <div
      v-if="fruitsService.getListFruits().length > 0"
      style="display: flex; flex-direction: row; gap: 1rem"
    >
      <select
        id="fruitsSelect"
        name="fruitsSelect"
        v-model="fruitModel"
      >
        <option 
          v-for="fruit in fruitsService.getListFruits()"
          :value="fruit.id"
          :key="fruit.id"
        >
          {{ fruit.description }}
        </option>
      </select>

      <button
        v-if="fruitModel"
        @click="fruitsService.clearFruit"
      >
        Limpar seleção
      </button>
    </div>

    <div
      v-if="!fruitModel && fruitsService.getListFruits().length > 0"
    >
      <b>
        Frutas:
      </b>
      <!-- {{ fruitsService.fruitsStore.fruitList }} -->
      <ul
        
      >
        <li v-for="(fruit, index) in fruitsService.getListFruits()" :key="index"> 
          {{ fruit.description }}
        </li>
      </ul>     
    </div>
    <div v-else-if="fruitModel">
      Fruta selecionada: {{ fruitsService.getFruit() }}
    </div>
    
    <!-- <input type="text" @input="fruitsService.setFruit($event.target.value)" />
    {{ fruitsService.getTest() }} -->
  </div>

</template>

<script>

export default {
  name: 'AboutView',

  inject: ['fruitsService'],


  computed: {
    fruitModel: {
      get() {
        return this.fruitsService.getFruit()?.id
      },
      set(value) {
        this.getFruitById(value)
      }
    }
  },

  methods: {
    getFruitById(id) {
      this.fruitsService.getFruitById(id)
    }
  },
}

</script>